# Regression LIVE — Builds 1-9 (2026-09-09, headless Chromium)

Cùng script live như sprint-1. Mỗi dòng là Actual đo được, so với Expected Prototype. Đủ cả 9 builds.

| Build | TC | Expected | Actual live | Result | Bug |
|---|---|---|---|---|---|
| 1 (bỏ check số) | TC-VAL-001 Abc+9 | Number 1 is not a number | ans=NaN, err="" | Fail | BUG-CALC-001 |
| 2 (đảo Add/Concat) | TC-ADD-001 10+9 Add | 19 | 109 | Fail | BUG-CALC-002 |
| 2 (đảo Add/Concat) | TC-CON-001 ab+cd Concat | abcd | (đảo ngược, xem code) | Fail | BUG-CALC-002 |
| 3 (luôn coi là số) | TC-CON-001 ab+cd Concat | abcd, integer ẩn | err="Number 1 is not a number", integer hiện+enabled | Fail | BUG-CALC-003 |
| 4 (khóa integer) | TC-DIV-001 10/4 unchecked | 2.5, checkbox tự do | intDisabled=true ngay sau chọn build (xem nuance) | Fail | BUG-CALC-004 |
| 5 (hỏng Clear) | TC-CLEAR-001 | clearButton disabled | disabled=true ngay sau `buildChanged()` (xem nuance) | Fail | BUG-CALC-005 |
| 6 (không check chia 0) | TC-DIV-002 10/0 | Divide by zero error! | ans=Infinity, err="" | Fail | BUG-CALC-006 |
| 7 (dùng answer cũ) | TC-ADD-002 5+3 rồi 2+3 | 8 rồi 5 | 3 (0+3) rồi 6 (3+3) | Fail | BUG-CALC-007 |
| 8 (đảo số) | TC-SUB-002 6-2 | 4 | -4 | Fail | BUG-CALC-008 |
| 9 (mất element) | check UI sau chọn build | đủ ô nhập + nút | n2 hidden+disabled, calculate hidden+disabled | Fail | BUG-CALC-009 |

Nuance trung thực:
- B4: script ép uncheck checkbox đang disabled nên Answer vẫn ra `2.5`; lỗi quan sát đúng user-path là checkbox bị `disabled=true` (Prototype: enabled). Để nguyên checked (user không bỏ được) thì ra `2`.
- B5: `buildChanged()` set `clearButton.disabled=true`, nhưng một chu kỳ `calculate()` → `unlockCalculate()` mở lại nút. Nên TC bắt B5 phải assert trạng thái nút ngay sau chọn build, trước khi bấm Calculate.
- B7: ngay lần tính đầu trên trang mới đã sai (`5+3` ra `3` vì `num1=""` → 0), lần 2 dùng answer cũ (`3+3=6`).
