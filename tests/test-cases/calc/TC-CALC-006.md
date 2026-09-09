# TC-CALC-006: First number không phải số phải báo lỗi

## Requirement ID
FR-CALC-05 (validation khi Operation số học)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning (invalid)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | Abc |
| Second number | 9 |
| Operation | Add |

## Test steps
1. Nhập `Abc`, `9`, chọn `Add`
2. Bấm `Calculate`

## Expected result
`errorMsgField` = `Number 1 is not a number`

## Status / Related bugs
Not Run / BUG-CALC-001 (Build 1 bỏ check số)
