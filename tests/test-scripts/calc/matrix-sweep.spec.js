// Full sweep: 14 TC × builds 0–8 + check Build 9. Assert oracle Prototype.
// Failures là bằng chứng mapping TC → bug (xem tests/test-runs/full-sweep.md).
// Chạy: npx playwright test matrix-sweep (khoảng 6 phút, workers 1).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';
const OPT = { timeout: 8000 };
const WAIT = 1800;

async function setup(page, build, op) {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', String(build), OPT);
  await page.selectOption('#selectOperationDropdown', String(op), OPT);
}

async function fillCalc(page, n1, n2) {
  await page.fill('#number1Field', n1, OPT);
  await page.fill('#number2Field', n2, OPT);
  await page.click('#calculateButton', OPT);
  await page.waitForTimeout(WAIT);
}

const answer = (page) => page.inputValue('#numberAnswerField');
const error = async (page) => ((await page.textContent('#errorMsgField')) || '').trim();

// TC đơn: 1 phép tính rồi assert answer + error.
const SINGLE = [
  { id: 'TC-ADD-001', op: 0, n1: '10', n2: '9', ans: '19', err: '' },
  { id: 'TC-SUB-001', op: 1, n1: '10', n2: '9', ans: '1', err: '' },
  { id: 'TC-SUB-002', op: 1, n1: '6', n2: '2', ans: '4', err: '' },
  { id: 'TC-MUL-001', op: 2, n1: '10', n2: '9', ans: '90', err: '' },
  { id: 'TC-DIV-001', op: 3, n1: '10', n2: '4', ans: '2.5', err: '' },
  { id: 'TC-DIV-002', op: 3, n1: '10', n2: '0', ans: '', err: 'Divide by zero error!' },
  { id: 'TC-VAL-001', op: 0, n1: 'Abc', n2: '9', ans: '', err: 'Number 1 is not a number' },
  { id: 'TC-VAL-002', op: 0, n1: '10', n2: 'xyz', ans: '', err: 'Number 2 is not a number' },
  { id: 'TC-CON-001', op: 4, n1: 'ab', n2: 'cd', ans: 'abcd', err: '' },
  { id: 'TC-INT-001', op: 3, n1: '5', n2: '2', ans: '2.5', err: '' },
];

for (let b = 0; b <= 8; b++) {
  for (const c of SINGLE) {
    test(`B${b} ${c.id}`, async ({ page }) => {
      await setup(page, b, c.op);
      await fillCalc(page, c.n1, c.n2);
      await expect(await answer(page)).toBe(c.ans);
      await expect(await error(page)).toBe(c.err);
    });
  }

  test(`B${b} TC-ADD-002 sequential`, async ({ page }) => {
    await setup(page, b, 0);
    await fillCalc(page, '5', '3');
    await expect(await answer(page)).toBe('8');
    await page.fill('#number1Field', '2', OPT);
    await page.click('#calculateButton', OPT);
    await page.waitForTimeout(WAIT);
    await expect(await answer(page)).toBe('5');
  });

  test(`B${b} TC-CON-002 add-vs-concat`, async ({ page }) => {
    await setup(page, b, 0);
    await fillCalc(page, '12', '34');
    await expect(await answer(page)).toBe('46');
    await page.selectOption('#selectOperationDropdown', '4', OPT);
    await page.click('#calculateButton', OPT);
    await page.waitForTimeout(WAIT);
    await expect(await answer(page)).toBe('1234');
  });

  test(`B${b} TC-INT-001 checked gives 2`, async ({ page }) => {
    await setup(page, b, 3);
    await fillCalc(page, '5', '2');
    await page.evaluate(() => {
      document.getElementById('integerSelect').checked = true;
      displayAnswer();
    });
    await expect(await answer(page)).toBe('2');
  });

  test(`B${b} TC-CLEAR-001 clears`, async ({ page }) => {
    await setup(page, b, 0);
    await fillCalc(page, '10', '9');
    await expect(page.locator('#clearButton')).toBeEnabled({ timeout: 3000 });
    await page.click('#clearButton', OPT);
    await expect(await answer(page)).toBe('');
  });

  test(`B${b} TC-DIV-003 recovers after div0`, async ({ page }) => {
    await setup(page, b, 3);
    await fillCalc(page, '10', '0');
    await expect(page.locator('#calculateButton')).toBeEnabled({ timeout: 3000 });
    await expect(page.locator('#clearButton')).toBeEnabled({ timeout: 3000 });
  });
}

test('B9 elements visible', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#selectBuild');
  await page.selectOption('#selectBuild', '9', OPT);
  await expect(page.locator('#number2Field')).toBeVisible();
  await expect(page.locator('#calculateButton')).toBeVisible();
});
