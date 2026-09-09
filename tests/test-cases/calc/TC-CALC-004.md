# TC-CALC-004: Chia ra số lẻ, không check Integers only

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

## Status / Related bugs
Not Run / None
