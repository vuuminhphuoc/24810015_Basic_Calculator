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

## Status / Related bugs
Not Run / BUG-CALC-008 (Build 8 đảo number1/number2)
