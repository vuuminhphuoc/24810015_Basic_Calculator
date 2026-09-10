# TC-SUB-002: Phép trừ không giao hoán phát hiện đảo toán hạng

## Requirement ID
FR-CALC-01 (Subtract/Divide phân biệt thứ tự)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (dùng op không giao hoán)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`, Integers only = unchecked

## Test data
| First number | 6 |
| Second number | 2 |
| Operation | Subtract |

## Test steps
1. Nhập `6`, `2`, chọn `Subtract`
2. Bấm `Calculate`

## Expected result
Answer = `4`. (Nếu đảo thành `2-6` sẽ ra `-4` → sai.)

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/subtraction/subtraction.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = `4`. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-008

## Comments
Fail trên build 8 (BUG-CALC-008: đảo number1/number2 → ra `-4`). Cố tình dùng phép trừ không giao hoán để lỗi đảo toán hạng không thể ẩn mình.
