# TC-CLEAR-001: Nút Clear xóa answer, lỗi và uncheck

## Requirement ID
FR-CALC-06 (`clearAnswer()`: answer="", error="", unchecked)

## Module / Test type / Technique
Calc / Functional / Equivalence Partitioning

## Preconditions
- Mở BasicCalculator, Build = `Prototype`
- Đã có kết quả trong Answer (chạy TC-ADD-001 trước)

## Test data
Không cần dữ liệu mới.

## Test steps
1. Sau khi Calculate có Answer
2. Bấm `Clear`

## Expected result
`numberAnswerField` = rỗng, `errorMsgField` = rỗng, `integerSelect` unchecked.

## Test environment
Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63; Build = Prototype (oracle).

## Script
- `tests/test-scripts/clear/clear.spec.js`
- `tests/test-scripts/calc/matrix-sweep.spec.js` (full sweep 10 build)

## Observed result
Answer = rỗng, error = rỗng, `integerSelect` unchecked. Khớp Expected result.

## Status
Pass

## Bug ID
BUG-CALC-005

## Comments
Fail trên build 5 (BUG-CALC-005: nút Clear disabled ngay sau chọn build). Thiết kế chạy sau TC-ADD-001 để luôn có state mà xóa.
