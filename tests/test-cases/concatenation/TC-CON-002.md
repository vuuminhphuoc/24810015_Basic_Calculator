# TC-CON-002: Phân biệt Add số vs Concatenate chuỗi

## Requirement ID
FR-CALC-01 + FR-CALC-02

## Module / Test type / Technique
Calc / Functional / Decision Table

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| Case A | 12 + 34, Add |
| Case B | 12 + 34, Concatenate |

## Test steps
1. Nhập `12`, `34`, chọn `Add`, Calculate → ghi kết quả
2. Đổi Operation `Concatenate`, Calculate lại

## Expected result
A = `46`, B = `1234`. Hai mode khác nhau rõ rệt.

## Status / Related bugs
Not Run / BUG-CALC-002 (Build 2 đảo 2 mode này)
