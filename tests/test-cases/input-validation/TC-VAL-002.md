# TC-VAL-002: Second number không phải số phải báo lỗi

## Requirement ID
FR-CALC-05

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | 10 |
| Second number | xyz |
| Operation | Add |

## Test steps
1. Nhập `10`, `xyz`, chọn `Add`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Number 2 is not a number`

## Status / Related bugs
Not Run / BUG-CALC-001 (Build 1 bỏ check số)
