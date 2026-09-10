// TC-VAL-001, TC-VAL-002 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
  await page.selectOption('#selectOperationDropdown', '0');
});

const error = async (page) => ((await page.textContent('#errorMsgField')) || '').trim();

async function add(page, n1, n2) {
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

test('TC-VAL-001 Bad Number1 errors', async ({ page }) => {
  await add(page, 'Abc', '9');
  await expect(await error(page)).toBe('Number 1 is not a number');
});

test('TC-VAL-002 Bad Number2 errors', async ({ page }) => {
  await add(page, '10', 'xyz');
  await expect(await error(page)).toBe('Number 2 is not a number');
});
