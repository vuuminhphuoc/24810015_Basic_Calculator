# [BUG][Calc] Prototype: lỗi chia 0 treo UI ở trạng thái Calculating

## Found by Test Case
TC-DIV-002, TC-DIV-003

## Requirement liên quan
FR-CALC-04 + FR-CALC-06

## Severity / Priority
Major / P1 (UI bricked tới khi reload: cả 2 nút disabled, spinner quay mãi)

## Environment
Build `Prototype` (lỗi có sẵn, không phải build cấy): `https://testsheepnz.github.io/BasicCalculator.html`

## Steps to reproduce
1. Nhập `10`, `0`, chọn `Divide`, bấm `Calculate`
2. Quan sát thông báo + 2 nút + spinner

## Expected result
Hiện `Divide by zero error!` và UI phục hồi (nút bấm lại được).

## Actual result
Hiện lỗi đúng, NHƯNG `calculatingForm` hiện mãi, `calculateButton` +
`clearButton` disabled vĩnh viễn. Code: nhánh `num2==0` trong `calculate()`
`return` mà không gọi `unlockCalculate()` (nhánh `isNaN` thì có gọi) —
trang khẳng định Prototype "works perfectly" nên đây là defect thật.

## Evidence
`tests/evidence/TC05-div0.jpg` (lỗi đỏ + spinner Calculating kẹt)

## Retest
Không fix được (SUT của người ta). → Open.

Labels: `type: bug`, `module: division`, `severity: major`, `found-by: test-case`
