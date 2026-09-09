# [BUG][Calc] Build 7 dùng answer cũ thay number1

## Found by Test Case
TC-ADD-002

## Requirement liên quan
FR-CALC-06

## Severity / Priority
Critical / P0 (kết quả sai dây chuyền)

## Environment
Build `7`

## Steps to reproduce
1. Tính `5+3` → `8`
2. Đổi First thành `2`, giữ `3`, tính lại

## Expected result
Lần 2 = `5`

## Actual result
`11` (lấy `answer=8` làm `num1`: `8+3`). JS: `if (selectedBuild==7) num1=answer`.

Labels: `type: bug`, `module: calc`, `severity: critical`
