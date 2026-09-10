// TC-CON-001, TC-CON-002 trên Build Prototype (oracle).
const { test, expect } = require('@playwright/test');

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector('#calculateButton');
  await page.selectOption('#selectBuild', '0');
});

async function run(page, op, n1, n2) {
  await page.selectOption('#selectOperationDropdown', String(op));
  await page.fill('#number1Field', n1);
  await page.fill('#number2Field', n2);
  await page.click('#calculateButton');
  await page.waitForTimeout(1800);
}

test('TC-CON-001 Concatenate hides integer', async ({ page }) => {
  await run(page, 4, 'ab', 'cd');
  await expect(await page.inputValue('#numberAnswerField')).toBe('abcd');
  await expect(page.locator('#integerSelect')).toBeHidden();
});

test('TC-CON-002 Add=46 vs Concat=1234', async ({ page }) => {
  await run(page, 0, '12', '34');
  await expect(await page.inputValue('#numberAnswerField')).toBe('46');
  await run(page, 4, '12', '34');
  await expect(await page.inputValue('#numberAnswerField')).toBe('1234');
});
