# TC-VAL-001: First number không phải số phải báo lỗi

## Requirement ID
FR-CALC-05 (validation khi Operation số học)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | Abc |
| Second number | 9 |
| Operation | Add |

## Test steps
1. Nhập `Abc`, `9`, chọn `Add`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Number 1 is not a number`

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/input-validation/input-validation.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
`errorMsgField` = `Number 1 is not a number`. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-001

## Comments
Fail trên build 1 (BUG-CALC-001: bỏ check số → `Abc+9` ra `NaN`, không báo lỗi). Lớp invalid của EP cho ô Number 1.
