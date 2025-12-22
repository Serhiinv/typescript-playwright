import dotenv from 'dotenv';
import {defineConfig, devices} from '@playwright/test';

dotenv.config({path: '.env.local'});

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
      // ['list'],
      // ['html', { open: 'never', outputFolder: 'playwright-report' }],
      // ['ortoni-report', {
      //   open: process.env.CI ? 'never' : 'always',
      //   folderPath: 'ortoni-report',
      //   filename: 'ortoni-report.html',
      //   title: 'TypeScript Playwright Test Report',
      //   showProject: true,
      //   projectName: 'TypeScript Playwright Project',
      //   testType: 'Functional Tests',
      //   authorName: 'GitHub Actions',
      //   base64Image: false,
      //   stdIO: true,
      //   meta: {
      //     'Environment': process.env.CI ? 'CI/CD' : 'Local',
      //     'Test Cycle': new Date().toISOString().split('T')[0],
      //     'Repository': 'typescript-playwright'
      //   }
      // }],
      ['allure-playwright', {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false
      }]
    ],

    // To use playwright-report
    // reporter: [['html', {open: 'never', outputFolder: 'playwright-report'}]],

    use: {
        headless: false, // run browsers with UI
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