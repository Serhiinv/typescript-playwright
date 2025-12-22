import dotenv from 'dotenv';
import {defineConfig, devices} from '@playwright/test';

if (!process.env.CI) {
    dotenv.config({ path: '.env.local' });
}

export default defineConfig({
    testDir: './tests',
    timeout: 300000,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: typeof process !== 'undefined' && !!process.env.CI,
    retries: typeof process !== 'undefined' && process.env.CI ? 1 : 0,
    workers: typeof process !== 'undefined' && process.env.CI ? 1 : undefined as unknown as number,


    // To use Allure
    reporter: [
      ['allure-playwright', {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false
      }]
    ],
    // reporter: [["line"], ["allure-playwright"]],


    use: {
        headless: !!process.env.CI,

        trace: 'on-first-retry',
        baseURL: 'https://playwright.dev/',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],
});