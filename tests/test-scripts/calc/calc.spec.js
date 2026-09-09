// TC-ADD-001..013 trên Build Prototype (oracle).
// Mirror của tests/test-cases/calc/*.md — mỗi test assert đúng Expected trong file TC.
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';
// OP: 0=Add 1=Subtract 2=Multiply 3=Divide 4=Concatenate

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0'); // Prototype
});

async function calc(page, { op, n1, n2, int = false }) {
  await page.selectOption('#selectOperationDropdown', String(op));
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  if (op !== 4) {
    await page.evaluate((v) => {
      document.getElementById('integerSelect').checked = v;
      displayAnswer();
    }, int);
  }
  await page.click('#calculateButton');
  await page.waitForTimeout(1800); // app randomTimeout <= 1000ms
}

const answer = (page) => page.inputValue('#numberAnswerField');
const error = async (page) => ((await page.textContent('#errorMsgField')) || '').trim();

test('TC-ADD-001 Add 10+9=19', async ({ page }) => {
  await calc(page, { op: 0, n1: '10', n2: '9' });
  await expect(await answer(page)).toBe('19');
});

test('TC-SUB-001 Subtract 10-9=1', async ({ page }) => {
  await calc(page, { op: 1, n1: '10', n2: '9' });
  await expect(await answer(page)).toBe('1');
});

test('TC-MUL-001 Multiply 10x9=90', async ({ page }) => {
  await calc(page, { op: 2, n1: '10', n2: '9' });
  await expect(await answer(page)).toBe('90');
});

test('TC-DIV-001 Divide 10/4=2.5 unchecked', async ({ page }) => {
  await calc(page, { op: 3, n1: '10', n2: '4' });
  await expect(await answer(page)).toBe('2.5');
});

test('TC-DIV-002 Divide by zero errors', async ({ page }) => {
  await calc(page, { op: 3, n1: '10', n2: '0' });
  await expect(await error(page)).toBe('Divide by zero error!');
});

test('TC-VAL-001 Bad Number1 errors', async ({ page }) => {
  await calc(page, { op: 0, n1: 'Abc', n2: '9' });
  await expect(await error(page)).toBe('Number 1 is not a number');
});

test('TC-VAL-002 Bad Number2 errors', async ({ page }) => {
  await calc(page, { op: 0, n1: '10', n2: 'xyz' });
  await expect(await error(page)).toBe('Number 2 is not a number');
});

test('TC-CON-001 Concatenate hides integer', async ({ page }) => {
  await calc(page, { op: 4, n1: 'ab', n2: 'cd' });
  await expect(await answer(page)).toBe('abcd');
  await expect(page.locator('#integerSelect')).toBeHidden();
});

test('TC-CON-002 Add=46 vs Concat=1234', async ({ page }) => {
  await calc(page, { op: 0, n1: '12', n2: '34' });
  await expect(await answer(page)).toBe('46');
  await calc(page, { op: 4, n1: '12', n2: '34' });
  await expect(await answer(page)).toBe('1234');
});

test('TC-INT-001 Integers only 2.5/2', async ({ page }) => {
  await calc(page, { op: 3, n1: '5', n2: '2', int: false });
  await expect(await answer(page)).toBe('2.5');
  await page.evaluate(() => {
    document.getElementById('integerSelect').checked = true;
    displayAnswer();
  });
  await expect(await answer(page)).toBe('2');
});

test('TC-SUB-002 Subtract 6-2=4', async ({ page }) => {
  await calc(page, { op: 1, n1: '6', n2: '2' });
  await expect(await answer(page)).toBe('4');
});

test('TC-ADD-002 Sequential uses fresh number1', async ({ page }) => {
  await calc(page, { op: 0, n1: '5', n2: '3' });
  await expect(await answer(page)).toBe('8');
  await page.fill('#number1Field', '2');
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
  await expect(await answer(page)).toBe('5');
});

test('TC-CLEAR-001 Clear wipes all', async ({ page }) => {
  await calc(page, { op: 0, n1: '10', n2: '9' });
  await page.click('#clearButton');
  await expect(await answer(page)).toBe('');
  await expect(await error(page)).toBe('');
  await expect(page.locator('#integerSelect')).not.toBeChecked();
});
