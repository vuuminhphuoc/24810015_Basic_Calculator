# TC-ADD-002: Tính 2 lần liên tiếp, lần 2 phải dùng number1 mới

## Requirement ID
FR-CALC-06 (Calculate dùng đúng 2 ô nhập hiện tại)

## Module / Test type / Technique
Calc / Functional / State-based (giá trị `answer` toàn cục)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`, Integers only = unchecked

## Test data
| Lần 1 | 5 + 3, Add |
| Lần 2 | 2 + 3, Add |

## Test steps
1. Nhập `5`, `3`, Add, Calculate → expect `8`
2. Đổi First number thành `2` (giữ `3`), Add, Calculate lại

## Expected result
Lần 1 = `8`, lần 2 = `5`.

## Status / Related bugs
Not Run / BUG-CALC-007 (Build 7 dùng `answer` cũ thay `num1`: lần 2 ra `8+3=11`)
