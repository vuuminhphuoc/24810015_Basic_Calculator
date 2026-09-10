# TC-ADD-001: Cộng hai số hợp lệ

## Requirement ID
FR-CALC-01 (suy ra từ Instructions: add/subtract/divide/multiply + check numerical values; Prototype làm oracle)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning

## Preconditions
- Mở `https://testsheepnz.github.io/BasicCalculator.html`
- Build = `Prototype`
- Integers only = unchecked

## Test data
| First number | 10 |
| Second number | 9 |
| Operation | Add |

## Test steps
1. Nhập First number `10`
2. Nhập Second number `9`
3. Chọn Operation `Add`
4. Bấm `Calculate`

## Expected result
Answer = `19`, không có thông báo lỗi.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/addition/addition.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = `19`, `errorMsgField` = rỗng. Khớp Expected result.

## Status
Pass

## Bug ID
None

## Comments
TC baseline cho lớp hợp lệ của phép Add. Cặp đối chứng với TC-CON-002 để phát hiện đảo Add↔Concatenate.
