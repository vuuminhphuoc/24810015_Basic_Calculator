# Regression LIVE — Builds 1,2,6,8 (2026-09-09, headless Chromium)

Cùng script live như sprint-1. Mỗi dòng là Actual đo được, so với Expected Prototype.

| Build | TC | Expected | Actual live | Result | Bug |
|---|---|---|---|---|---|
| 1 (bỏ check số) | TC-CALC-006 Abc+9 | Number 1 is not a number | ans=NaN, err="" | Fail | BUG-CALC-001 |
| 2 (đảo Add/Concat) | TC-CALC-001 10+9 Add | 19 | 109 | Fail | BUG-CALC-002 |
| 6 (không check chia 0) | TC-CALC-005 10/0 | Divide by zero error! | ans=Infinity, err="" | Fail | BUG-CALC-006 |
| 8 (đảo số) | TC-CALC-011 6-2 | 4 | -4 | Fail | BUG-CALC-008 |

Các builds 3,4,5,7,9 đã phân tích từ JS (`setIfMathematical`, `setFieldStatus`, `buildChanged`, `num1=answer`, swap, hidden) — xem file cũ `sprint-1-regression-builds-1-9.md` trong git history nếu cần full 9 builds. Muốn tôi chạy nốt 3,4,5,7,9 live thì bảo.
