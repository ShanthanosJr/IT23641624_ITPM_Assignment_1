const { chromium } = require('@playwright/test');
const fs = require('fs');
const testData = require('./tests/test-data.js');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const inputSelector = 'textarea[placeholder*="Singlish"]';
    const outputSelector = 'div.bg-slate-50';

    async function getTranslation(input) {
        if (!input) {
            await page.locator(inputSelector).clear();
            await page.waitForTimeout(1000);
            const val = await page.locator(outputSelector).textContent();
            return val ? val.trim() : '';
        }
        await page.locator(inputSelector).fill(input);
        await page.waitForTimeout(4000);
        const val = await page.locator(outputSelector).textContent();
        return val ? val.trim() : '';
    }

    await page.goto('https://www.swifttranslator.com/');

    console.log('Syncing Positive Tests...');
    for (const t of testData.positiveTests) {
        const actual = await getTranslation(t.input);
        t.actual = actual;
        // Strict equality for status
        t.status = (actual === t.expected) ? 'Pass' : 'Fail';
        console.log(`${t.id}: ${t.status} (Exp: ${t.expected} | Act: ${t.actual})`);
    }

    console.log('Syncing Negative Tests...');
    for (const t of testData.negativeTests) {
        const actual = await getTranslation(t.input);
        t.actual = actual;
        t.status = (actual === t.expected) ? 'Pass' : 'Fail';
        console.log(`${t.id}: ${t.status} (Exp: ${t.expected} | Act: ${t.actual})`);
    }

    await browser.close();

    const fileContent = `module.exports = ${JSON.stringify(testData, null, 2)};`;

    // Preserve the module.exports format but make it prettier if needed. 
    // JSON.stringify is fine.
    fs.writeFileSync('./tests/test-data.js', fileContent);
    console.log('test-data.js updated.');
})();
