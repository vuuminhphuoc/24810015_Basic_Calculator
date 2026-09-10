# TC-VAL-002: Second number không phải số phải báo lỗi

## Requirement ID
FR-CALC-05

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | 10 |
| Second number | xyz |
| Operation | Add |

## Test steps
1. Nhập `10`, `xyz`, chọn `Add`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Number 2 is not a number`

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/input-validation/input-validation.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
`errorMsgField` = `Number 2 is not a number`. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-001

## Comments
Fail trên build 1 (BUG-CALC-001: bỏ check số → ra `NaN`, không báo lỗi). Đối xứng với TC-VAL-001 để phủ cả 2 ô nhập.
