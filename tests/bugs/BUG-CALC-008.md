# [BUG][Calc] Build 8 đảo number1 và number2

## Found by Test Case
TC-SUB-002 (TC-SUB-001 với số khác nhau cũng bắt được)

## Requirement liên quan
FR-CALC-01

## Severity / Priority
Major / P1 (Add/Mul che lỗi vì giao hoán, Sub/Div lộ)

## Environment
Build `8`

## Steps to reproduce
1. Nhập `6`, `2`, `Subtract`, Calculate

## Expected result
`4`

## Actual result
`-4` (đảo thành `2-6`). JS: swap `num1/num2` khi `selectedBuild==8`.

## Evidence
Chỉ dùng op không giao hoán mới bắt được — lý do TC-SUB-002 dùng Subtract.

Labels: `type: bug`, `module: subtraction`, `severity: major`
