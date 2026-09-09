# [BUG][Calc] Build 5 disable nút Clear

## Found by Test Case
TC-CALC-013

## Requirement liên quan
FR-CALC-06

## Severity / Priority
Minor / P2 (mất chức năng phụ nhưng vi phạm `clearAnswer()`)

## Environment
Build `5`

## Steps to reproduce
1. Calculate ra kết quả bất kỳ
2. Bấm `Clear`

## Expected result
Xóa answer/error/uncheck

## Actual result
`clearButton.disabled=true` (trong `buildChanged()`), không bấm được.

Labels: `type: bug`, `module: calc`, `severity: minor`
