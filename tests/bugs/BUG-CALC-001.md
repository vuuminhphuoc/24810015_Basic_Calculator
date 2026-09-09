# [BUG][Calc] Build 1 không validate số

## Found by Test Case
TC-CALC-006, TC-CALC-007

## Requirement liên quan
FR-CALC-05

## Severity / Priority
Major / P1

## Environment
Build `1`, BasicCalculator

## Steps to reproduce
1. Nhập First `Abc`, Second `9`, Operation `Add`
2. Bấm `Calculate`

## Expected result
`Number 1 is not a number`

## Actual result
Không báo lỗi, tính bậy (JS bỏ qua `isNaN` khi `selectedBuild==1`).

## Evidence
Code: `if(isNaN(num1) && isNumber && selectedBuild != 1)` — Build 1 skip check.

Labels: `type: bug`, `module: calc`, `severity: major`, `found-by: test-case`
Liên kết ngược: test-run ghi `Fail, Related Bug=BUG-CALC-001`.
