# [BUG][Calc] Build 6 không check chia 0

## Found by Test Case
TC-CALC-005

## Requirement liên quan
FR-CALC-04

## Severity / Priority
Major / P1

## Environment
Build `6`

## Steps to reproduce
1. Nhập `10`, `0`, `Divide`, Calculate

## Expected result
`Divide by zero error!`

## Actual result
Không lỗi, ra `Infinity`. JS: `if(num2==0 && selectedBuild != 6)` bỏ check.

Labels: `type: bug`, `module: calc`, `severity: major`
