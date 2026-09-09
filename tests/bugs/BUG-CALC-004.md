# [BUG][Calc] Build 4 khóa Integers only

## Found by Test Case
TC-DIV-001, TC-INT-001

## Requirement liên quan
FR-CALC-03

## Severity / Priority
Major / P1

## Environment
Build `4`

## Steps to reproduce
1. Nhập `10`, `4`, `Divide`, để unchecked, Calculate

## Expected result
`2.5`

## Actual result
`2` (luôn `parseInt`). `setFieldStatus()`: Build 4 disable + checked checkbox khi `isNumber`.

Labels: `type: bug`, `module: calc`, `severity: major`
