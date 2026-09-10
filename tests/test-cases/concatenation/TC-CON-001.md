# TC-CON-001: Concatenate chuỗi, không check số, ẩn Integers only

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

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/concatenation/concatenation.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = `abcd`, không lỗi, checkbox hidden + disabled. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-002, BUG-CALC-003

## Comments
Fail trên build 2 (BUG-CALC-002: đảo Add/Concat) và build 3 (BUG-CALC-003: luôn coi là số → báo not a number). Dùng input chữ để ép nhánh string.
