# TC-CALC-008: Concatenate chuỗi, không check số, ẩn Integers only

## Requirement ID
FR-CALC-02 (Concatenate coi input là string)

## Module / Test type / Technique
Calc / Functional / Decision Table (Operation=Concatenate → isNumber=false)

## Preconditions
- Mở BasicCalculator, Build = `Prototype`

## Test data
| First number | ab |
| Second number | cd |
| Operation | Concatenate |

## Test steps
1. Nhập `ab`, `cd`, chọn `Concatenate`
2. Kiểm tra `integerSelect` + `intSelectionLabel` bị hidden/disabled
3. Bấm `Calculate`

## Expected result
Answer = `abcd`, không lỗi, checkbox Integers only bị ẩn.

## Status / Related bugs
Not Run / BUG-CALC-002 (Build 2 đảo Add/Concat), BUG-CALC-003 (Build 3 luôn coi là số)
