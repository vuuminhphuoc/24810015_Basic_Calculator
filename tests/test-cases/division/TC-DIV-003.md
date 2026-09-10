# TC-DIV-003: UI phục hồi sau lỗi chia 0

## Requirement ID
FR-CALC-04 + FR-CALC-06 (sau lỗi, app phải dùng tiếp được)

## Module / Test type / Technique
Calc / Functional / State-based (trạng thái lock/unlock của `calculate()`)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`
- Tải lại trang (trạng thái sạch)

## Test data
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập `10`, `0`, chọn `Divide`
2. Bấm `Calculate`, đợi 2s
3. Kiểm tra `calculateButton`/`clearButton` có bấm lại được không

## Expected result
Báo `Divide by zero error!` và 2 nút enabled lại.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/division/division.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Cả 2 nút vẫn disabled, spinner kẹt ở "Calculating". Không khớp Expected result.

## Status
Fail

## Bug ID
BUG-CALC-010

## Comments
Fail ngay trên Prototype: nhánh chia-0 trong `calculate()` return mà không gọi `unlockCalculate()`. TC state-based kiểm tra khả năng phục hồi sau lỗi — là TC duy nhất Fail trên oracle.
