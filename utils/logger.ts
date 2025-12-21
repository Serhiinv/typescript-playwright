import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';

let logger: Logger | null = null;

interface Logger {
    debug(message: string): void;
    info(message: string): void;
}

class FileLogger implements Logger {
    private debugLogs: string[] = [];
    private infoLogs: string[] = [];
    private logFilePath: string;

    constructor(logFilePath: string) {
        this.logFilePath = logFilePath;
        this.ensureLogDirectory();
    }

    private ensureLogDirectory(): void {
        const dir = path.dirname(this.logFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    debug(message: string): void {
        const formatted = this.formatMessage(message, 'DEBUG');
        this.debugLogs.push(formatted);
        console.log(formatted);
    }

    info(message: string): void {
        const formatted = this.formatMessage(message, 'INFO');
        this.infoLogs.push(formatted);
        console.log(formatted);
    }

    private formatMessage(message: string, level: string): string {
        const timestamp = new Date().toLocaleTimeString();
        return `${timestamp} - ${level} - ${message}`;
    }

    saveToFile(): void {
        const allLogs = [...this.debugLogs, ...this.infoLogs].join('\n');
        fs.writeFileSync(this.logFilePath, allLogs, 'utf-8');
    }
}

function getLoggerInstance(): Logger {
    if (logger === null) {
        const param = new Date().toISOString().replace(/[:\-T]/g, '').slice(0, 15);
        const logFilePath = `logs/run_${param}.log`;
        logger = new FileLogger(logFilePath);
    }
    return logger;
}

function logStep(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as (...args: unknown[]) => Promise<unknown>;

    descriptor.value = async function (...args: unknown[]) {
        const stepName = capitalizeFirstWord(propertyKey);
        let page: Page | null = null;
        let rpLogger: object | null = null;
        let result: unknown = null;
        let status = 'PASSED';

        if (this && typeof this === 'object') {
            page = (this as Record<string, unknown>).page as Page | null || null;
            rpLogger = (this as Record<string, unknown>).rpLogger as object | null || null;
        }

        const argsRepr = args.map((a) => JSON.stringify(a));
        const parameters = argsRepr.length > 0 ? argsRepr.join(', ') : '';

        const logMessage = parameters ? `${stepName} called with parameters: ${parameters}` : stepName;

        try {
            result = await originalMethod.apply(this, args);
            status = 'PASSED';
        } catch (e) {
            status = 'FAILED';
            result = String(e);
            throw e;
        } finally {
            let logOutput = `${logMessage} - ${status}`;
            if (result && status === 'PASSED') {
                logOutput += ` - Result: ${result}`;
            }

            const currentLogger = getLoggerInstance();
            const destination = process.env.DESTINATION || 'local';
            const enableReportPortal = process.env.ENABLE_REPORT_PORTAL_FOR_LOCAL === 'true';

            if (destination !== 'local' || enableReportPortal) {
                if (rpLogger) {
                    (rpLogger as Record<string, (msg: string) => void>).info(logOutput);
                } else {
                    currentLogger.debug(`Warning: rpLogger not found: ${logOutput}`);
                }
            } else {
                const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
                currentLogger.debug(`${timestamp} Step: ${logOutput}`);
            }
        }

        return result;
    };

    return descriptor;
}

function logAllMethods(constructor: new () => object) {
    const prototype = constructor.prototype;
    Object.getOwnPropertyNames(prototype).forEach((methodName) => {
        if (methodName !== 'constructor' && !methodName.startsWith('_')) {
            const descriptor = Object.getOwnPropertyDescriptor(prototype, methodName);
            if (descriptor && typeof descriptor.value === 'function') {
                logStep(prototype, methodName, descriptor);
                Object.defineProperty(prototype, methodName, descriptor);
            }
        }
    });
    return constructor;
}

function capitalizeFirstWord(text: string): string {
    const words = text.split('_');
    const firstWord = words[0];
    if (firstWord) {
        words[0] = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    }
    return words.join(' ');
}

function getLogger(testName?: string): Logger {
    const param = new Date()
        .toISOString()
        .replace(/[:\-T]/g, '')
        .slice(0, 15);
    const logFilename = testName ? `logs/${testName}_${param}.log` : `logs/run_${param}.log`;
    const loggerInstance = new FileLogger(logFilename);
    return loggerInstance;
}

export type { Logger };
export { getLogger, getLoggerInstance, logAllMethods, logStep, capitalizeFirstWord };
