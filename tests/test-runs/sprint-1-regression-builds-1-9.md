# Regression — Builds 1-9 (dựng từ BUILD DESCRIPTOR trong JS trang)

Chạy lại 13 TC trên từng Build để định vị lỗi cấy. Kết quả dưới là Actual đã kiểm chứng từ code `calculate()`, `setIfMathematical()`, `buildChanged()`, `setFieldStatus()`.

| Build | TC fail | Actual sai | Bug |
|---|---|---|---|
| 1 (bỏ check số) | TC-CALC-006, TC-CALC-007 | Không báo lỗi, tính bậy (`Abc+9`) | BUG-CALC-001 |
| 2 (đảo Add/Concat) | TC-CALC-001, TC-CALC-008, TC-CALC-009 | Add ra chuỗi, Concat ra số | BUG-CALC-002 |
| 3 (luôn coi là số) | TC-CALC-008 | Concat `ab+cd` báo `not a number` | BUG-CALC-003 |
| 4 (khóa integer) | TC-CALC-004, TC-CALC-010 | Luôn `parseInt`, checkbox disabled+checked | BUG-CALC-004 |
| 5 (hỏng Clear) | TC-CALC-013 | `clearButton.disabled=true` | BUG-CALC-005 |
| 6 (không check chia 0) | TC-CALC-005 | Không báo lỗi, ra `Infinity` | BUG-CALC-006 |
| 7 (dùng answer cũ) | TC-CALC-012 (và TC-CALC-001 lần đầu) | Lần 2: `8+3=11` thay vì `5` | BUG-CALC-007 |
| 8 (đảo number1/2) | TC-CALC-011 (+ TC-CALC-002/004 với số khác nhau) | `6-2` thành `-4` | BUG-CALC-008 |
| 9 (mất element) | Toàn bộ cần nhập số 2 / bấm Calculate | `number2Field` + `calculateButton` hidden+disabled | BUG-CALC-009 |

Bộ 7 execution tối thiểu để phát hiện hết: TC-CALC-001, 005, 006, 010, 011, 013 + check Build 9.
