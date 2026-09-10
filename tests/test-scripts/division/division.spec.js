// TC-DIV-001, TC-DIV-002, TC-DIV-003 trên Build Prototype (oracle).
// TC-DIV-003 FAIL trung thực → BUG-CALC-010 (nhánh chia-0 thiếu unlockCalculate).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
});

async function divide(page, n1, n2) {
  await page.selectOption('#selectOperationDropdown', '3');
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

const error = async (page) => ((await page.textContent('#errorMsgField')) || '').trim();

test('TC-DIV-001 Divide 10/4=2.5 unchecked', async ({ page }) => {
  await divide(page, '10', '4');
  await expect(await page.inputValue('#numberAnswerField')).toBe('2.5');
});

test('TC-DIV-002 Divide by zero errors', async ({ page }) => {
  await divide(page, '10', '0');
  await expect(await error(page)).toBe('Divide by zero error!');
});

test('TC-DIV-003 UI recovers after divide-by-zero', async ({ page }) => {
  await divide(page, '10', '0');
  await expect(await error(page)).toBe('Divide by zero error!');
  await expect(page.locator('#calculateButton')).toBeEnabled({ timeout: 3000 });
  await expect(page.locator('#clearButton')).toBeEnabled({ timeout: 3000 });
});
