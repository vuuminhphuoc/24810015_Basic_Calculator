# TC-DIV-002: Chia cho 0 phải báo lỗi

## Requirement ID
FR-CALC-04 (Divide by zero)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid class riêng)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập `10`, `0`, chọn `Divide`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Divide by zero error!`

## Status / Related bugs
Not Run / BUG-CALC-006 (Build 6 không check chia 0)
