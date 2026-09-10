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

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/addition/addition.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Lần 1 = `8`, lần 2 = `5`. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-007

## Comments
Fail trên build 7 (BUG-CALC-007: dùng `answer` cũ thay `number1` ở lần tính thứ 2). Thiết kế state-based: tính 2 lần liên tiếp trên cùng trang để bắt lỗi dùng state cũ.
