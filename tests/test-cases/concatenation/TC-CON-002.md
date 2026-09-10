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

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/concatenation/concatenation.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
A = `46` (integer enabled), B = `1234` (integer hidden + disabled). Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-002

## Comments
Fail trên build 2 (BUG-CALC-002: đảo 2 mode → `10+9` ra `109`). Decision Table trên cùng input để 2 mode không thể tráo đổi mà vẫn qua.
