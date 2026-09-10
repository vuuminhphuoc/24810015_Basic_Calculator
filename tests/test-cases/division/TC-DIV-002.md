# TC-DIV-002: Chia cho 0 phải báo lỗi

## Requirement ID
FR-CALC-04 (Divide by zero)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid class riêng)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập `10`, `0`, chọn `Divide`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Divide by zero error!`

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/division/division.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
`errorMsgField` = `Divide by zero error!`, Answer = rỗng. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-006

## Comments
Fail trên build 6 (BUG-CALC-006: không check chia 0 → ra `Infinity`). Lưu ý: ngay sau lỗi này UI kẹt ở "Calculating" — xem TC-DIV-003 / BUG-CALC-010.
