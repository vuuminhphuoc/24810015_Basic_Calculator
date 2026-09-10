// TC-SUB-001, TC-SUB-002 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
});

async function calc(page, n1, n2) {
  await page.selectOption('#selectOperationDropdown', '1');
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

test('TC-SUB-001 Subtract 10-9=1', async ({ page }) => {
  await calc(page, '10', '9');
  await expect(await page.inputValue('#numberAnswerField')).toBe('1');
});

test('TC-SUB-002 Subtract 6-2=4 (non-commutative)', async ({ page }) => {
  await calc(page, '6', '2');
  await expect(await page.inputValue('#numberAnswerField')).toBe('4');
});
