# TC-SUB-001: Trừ hai số hợp lệ

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning

## Preconditions
- Mở BasicCalculator, Build = `Prototype`, Integers only = unchecked

## Test data
| First number | 10 |
| Second number | 9 |
| Operation | Subtract |

## Test steps
1. Nhập `10`, `9`, chọn `Subtract`
2. Bấm `Calculate`

## Expected result
Answer = `1`, không lỗi.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/subtraction/subtraction.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = `1`, không lỗi. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
TC baseline cho phép Subtract. Case bắt đảo toán hạng nằm ở TC-SUB-002 (dùng cặp không giao hoán `6-2`).
