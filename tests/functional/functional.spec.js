const { test, expect } = require('@playwright/test');
const testData = require('../test-data.js');

// Helper function to translate and get output
async function translateAndGetOutput(page, inputText) {
    await page.goto('https://www.swifttranslator.com/');
    const inputSelector = 'textarea[placeholder*="Singlish"]';
    const outputSelector = 'div.bg-slate-50';

    if (!inputText) {
        // Handle empty input case explicitly if needed, or better yet, just clear and wait
        await page.locator(inputSelector).clear();
        // Wait a bit for system to react to empty
        await page.waitForTimeout(1000);
        return page.locator(outputSelector).textContent().then(t => t ? t.trim() : '');
    }

    await page.locator(inputSelector).fill(inputText);
    await page.waitForTimeout(1500);  // Wait for real-time update
    const actual = await page.locator(outputSelector).textContent();
    return actual ? actual.trim() : '';
}

test.describe('Positive Functional Tests', () => {
    testData.positiveTests.forEach(({ id, name, input, expected }) => {
        test(`${id} - ${name}`, async ({ page }) => {
            const actual = await translateAndGetOutput(page, input);
            console.log(`${id} Input: "${input}" → Actual: "${actual}"`);
        });
    });
});

test.describe('Negative Functional Tests', () => {
    testData.negativeTests.forEach(({ id, name, input, expected }) => {
        test(`${id} - ${name}`, async ({ page }) => {
            const actual = await translateAndGetOutput(page, input);
            console.log(`${id} Input: "${input}" → Actual: "${actual}"`);
        });
    });
});
