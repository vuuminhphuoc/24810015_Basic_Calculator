# [BUG][Calc] Build 9 ẩn number2 và nút Calculate

## Found by Test Case
Check UI Build 9 (mở rộng từ mọi TC cần 2 ô nhập)

## Requirement liên quan
FR-CALC-07

## Severity / Priority
Critical / P0 (mất chức năng)

## Environment
Build `9`

## Steps to reproduce
1. Chọn Build `9`

## Expected result
Đầy đủ ô nhập + nút bấm như Prototype

## Actual result
`number2Field` + `calculateButton` bị `hidden+disabled` (trong `buildChanged()`).

Labels: `type: bug`, `module: calc`, `severity: critical`
