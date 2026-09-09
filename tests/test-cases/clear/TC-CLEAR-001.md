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

## Status / Related bugs
Not Run / BUG-CALC-005 (Build 5 disable Clear)
