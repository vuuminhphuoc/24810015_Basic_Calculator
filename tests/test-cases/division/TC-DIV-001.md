# TC-DIV-001: Chia ra số lẻ, không check Integers only

## Requirement ID
FR-CALC-01 + FR-CALC-03 (Integers only toggle)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning

## Preconditions
- Mở BasicCalculator, Build = `Prototype`, Integers only = unchecked

## Test data
| First number | 10 |
| Second number | 4 |
| Operation | Divide |

## Test steps
1. Nhập `10`, `4`, chọn `Divide`, để unchecked
2. Bấm `Calculate`

## Expected result
Answer = `2.5`, không lỗi.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/division/division.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = `2.5`, không lỗi. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
Dùng phép chia ra số lẻ để kiểm tra hiển thị thập phân khi unchecked; cặp đối chứng với TC-INT-001 (checked → `2`).
