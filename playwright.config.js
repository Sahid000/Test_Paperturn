// @ts-check
const {defineConfig, devices} = require('@playwright/test');
//export const baseURL = "https://www.paperturn.com";


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                screenshot: "only-on-failure",
                baseURL: 'https://www.paperturn.com',
                trace: 'on-first-retry',
                browserName: "chromium"
            },

        },

        {
            name: 'firefox',
            use: {
                screenshot: "only-on-failure",
                baseURL: 'https://www.paperturn.com',
                trace: 'on-first-retry',
                browserName: "firefox"
            },
        },

        {
            name: 'webkit',
            use: {
                screenshot: "only-on-failure",
                baseURL: 'https://www.paperturn.com',
                trace: 'on-first-retry',
                browserName: "webkit"
            },
        },

        /* Test against mobile viewports. */
        {
            name: 'MobileChrome',
            use: {
                ...devices['Pixel 5'],
                screenshot: "only-on-failure",
                baseURL: 'https://www.paperturn.com',
                trace: 'on-first-retry',
            }
        },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});

