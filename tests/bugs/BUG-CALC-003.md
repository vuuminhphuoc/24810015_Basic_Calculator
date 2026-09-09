# [BUG][Calc] Build 3 luôn coi Concatenate là số

## Found by Test Case
TC-CON-001

## Requirement liên quan
FR-CALC-02

## Severity / Priority
Major / P1

## Environment
Build `3`

## Steps to reproduce
1. Nhập `ab`, `cd`, chọn `Concatenate`, Calculate

## Expected result
`abcd`, không lỗi

## Actual result
`Number 1 is not a number`. JS `setIfMathematical()`: Build 3 ép `isNumber=true`.

Labels: `type: bug`, `module: calc`, `severity: major`
