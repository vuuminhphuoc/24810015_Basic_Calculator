# TC-INT-001: Integers only cắt phần lẻ

## Requirement ID
FR-CALC-03 (`displayAnswer()` dùng `parseInt` khi checked)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | 5 |
| Second number | 2 |
| Operation | Divide |

## Test steps
1. Nhập `5`, `2`, chọn `Divide`, để unchecked, Calculate → ghi kết quả
2. Check `Integers only` (onchange tự `displayAnswer()`), ghi kết quả

## Expected result
Unchecked = `2.5`, checked = `2`.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/integer-toggle/integer-toggle.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Unchecked = `2.5`, checked = `2`. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-004

## Comments
Fail trên build 4 (BUG-CALC-004: khóa integer, checkbox checked + disabled). Dùng `5/2` để on/off cho 2 kết quả khác nhau rõ rệt.
