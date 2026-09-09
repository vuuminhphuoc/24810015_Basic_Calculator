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

## Status / Related bugs
Not Run / BUG-CALC-004 (Build 4 khóa integer: checked+disabled)
