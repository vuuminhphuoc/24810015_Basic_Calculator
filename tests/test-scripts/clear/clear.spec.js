// TC-CLEAR-001 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test('TC-CLEAR-001 Clear wipes all', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
  await page.selectOption('#selectOperationDropdown', '0');
  await page.fill('#number1Field', '10');
  await page.fill('#number2Field', '9');
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
  await page.click('#clearButton');
  await expect(await page.inputValue('#numberAnswerField')).toBe('');
  await expect(((await page.textContent('#errorMsgField')) || '').trim()).toBe('');
  await expect(page.locator('#integerSelect')).not.toBeChecked();
});
