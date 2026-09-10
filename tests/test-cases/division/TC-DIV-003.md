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

## Status / Related bugs
Fail / BUG-CALC-010 (nhánh chia-0 `return` thiếu `unlockCalculate()`)
