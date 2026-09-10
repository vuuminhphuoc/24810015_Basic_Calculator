// TC-INT-001 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test('TC-INT-001 Integers only 2.5/2', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
  await page.selectOption('#selectOperationDropdown', '3');
  await page.fill('#number1Field', '5');
  await page.fill('#number2Field', '2');
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
  await expect(await page.inputValue('#numberAnswerField')).toBe('2.5');
  await page.evaluate(() => {
    document.getElementById('integerSelect').checked = true;
    displayAnswer();
  });
  await expect(await page.inputValue('#numberAnswerField')).toBe('2');
});
