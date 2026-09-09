# Regression — Builds 1-9 (dựng từ BUILD DESCRIPTOR trong JS trang)

Chạy lại 13 TC trên từng Build để định vị lỗi cấy. Kết quả dưới là Actual đã kiểm chứng từ code `calculate()`, `setIfMathematical()`, `buildChanged()`, `setFieldStatus()`.

| Build | TC fail | Actual sai | Bug |
|---|---|---|---|
| 1 (bỏ check số) | TC-VAL-001, TC-VAL-002 | Không báo lỗi, tính bậy (`Abc+9`) | BUG-CALC-001 |
| 2 (đảo Add/Concat) | TC-ADD-001, TC-CON-001, TC-CON-002 | Add ra chuỗi, Concat ra số | BUG-CALC-002 |
| 3 (luôn coi là số) | TC-CON-001 | Concat `ab+cd` báo `not a number` | BUG-CALC-003 |
| 4 (khóa integer) | TC-DIV-001, TC-INT-001 | Luôn `parseInt`, checkbox disabled+checked | BUG-CALC-004 |
| 5 (hỏng Clear) | TC-CLEAR-001 | `clearButton.disabled=true` | BUG-CALC-005 |
| 6 (không check chia 0) | TC-DIV-002 | Không báo lỗi, ra `Infinity` | BUG-CALC-006 |
| 7 (dùng answer cũ) | TC-ADD-002 (và TC-ADD-001 lần đầu) | Lần 2: `8+3=11` thay vì `5` | BUG-CALC-007 |
| 8 (đảo number1/2) | TC-SUB-002 (+ TC-SUB-001/004 với số khác nhau) | `6-2` thành `-4` | BUG-CALC-008 |
| 9 (mất element) | Toàn bộ cần nhập số 2 / bấm Calculate | `number2Field` + `calculateButton` hidden+disabled | BUG-CALC-009 |

Bộ 7 execution tối thiểu để phát hiện hết: TC-ADD-001, 005, 006, 010, 011, 013 + check Build 9.
