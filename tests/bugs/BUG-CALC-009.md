# [BUG][Calc] Build 9 ẩn number2 và nút Calculate

## Found by Test Case
TC-CLEAR-001 (phát hiện khi thực hiện flow TC này: không có ô Second number và nút Calculate để chạy)

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

## Evidence
`tests/evidence/B9-ui.jpg`

Labels: `type: bug`, `module: build-selection`, `severity: critical`
