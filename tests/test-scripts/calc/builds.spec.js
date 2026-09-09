// Regression builds 1-9: assert oracle Prototype trên build lỗi.
// test.fail() = lỗi đã biết, có BUG-CALC-00X tương ứng trong tests/bugs/.
// Nếu build nào được fix, test đó sẽ "unexpected pass" (đỏ) — đúng semantics.
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
});

async function calcOn(page, build, { op, n1, n2 }) {
  await page.selectOption('#selectBuild', String(build));
  await page.selectOption('#selectOperationDropdown', String(op));
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

const answer = (page) => page.inputValue('#numberAnswerField');
const error = async (page) => ((await page.textContent('#errorMsgField')) || '').trim();

test.fail('B1 validates numbers (BUG-CALC-001)', async ({ page }) => {
  await calcOn(page, 1, { op: 0, n1: 'Abc', n2: '9' });
  await expect(await error(page)).toBe('Number 1 is not a number');
});

test.fail('B2 Add is Add (BUG-CALC-002)', async ({ page }) => {
  await calcOn(page, 2, { op: 0, n1: '10', n2: '9' });
  await expect(await answer(page)).toBe('19');
});

test.fail('B3 Concatenate accepts strings (BUG-CALC-003)', async ({ page }) => {
  await calcOn(page, 3, { op: 4, n1: 'ab', n2: 'cd' });
  await expect(await answer(page)).toBe('abcd');
});

test.fail('B4 integer checkbox enabled (BUG-CALC-004)', async ({ page }) => {
  await page.selectOption('#selectBuild', '4');
  await page.selectOption('#selectOperationDropdown', '3');
  await expect(page.locator('#integerSelect')).toBeEnabled();
});

test.fail('B5 Clear enabled after build select (BUG-CALC-005)', async ({ page }) => {
  await page.selectOption('#selectBuild', '5');
  await expect(page.locator('#clearButton')).toBeEnabled();
});

test.fail('B6 divide-by-zero checked (BUG-CALC-006)', async ({ page }) => {
  await calcOn(page, 6, { op: 3, n1: '10', n2: '0' });
  await expect(await error(page)).toBe('Divide by zero error!');
});

test.fail('B7 uses fresh number1 (BUG-CALC-007)', async ({ page }) => {
  await calcOn(page, 7, { op: 0, n1: '5', n2: '3' });
  await page.fill('#number1Field', '2');
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
  await expect(await answer(page)).toBe('5');
});

test.fail('B8 operand order kept (BUG-CALC-008)', async ({ page }) => {
  await calcOn(page, 8, { op: 1, n1: '6', n2: '2' });
  await expect(await answer(page)).toBe('4');
});

test.fail('B9 elements visible (BUG-CALC-009)', async ({ page }) => {
  await page.selectOption('#selectBuild', '9');
  await expect(page.locator('#number2Field')).toBeVisible();
  await expect(page.locator('#calculateButton')).toBeVisible();
});
