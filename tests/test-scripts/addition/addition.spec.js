// TC-ADD-001, TC-ADD-002 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
});

async function calc(page, n1, n2) {
  await page.selectOption('#selectOperationDropdown', '0');
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

test('TC-ADD-001 Add 10+9=19', async ({ page }) => {
  await calc(page, '10', '9');
  await expect(await page.inputValue('#numberAnswerField')).toBe('19');
});

test('TC-ADD-002 Sequential uses fresh number1', async ({ page }) => {
  await calc(page, '5', '3');
  await expect(await page.inputValue('#numberAnswerField')).toBe('8');
  await page.fill('#number1Field', '2');
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
  await expect(await page.inputValue('#numberAnswerField')).toBe('5');
});
