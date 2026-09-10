# Index test case — BasicCalculator

Nguồn suy ra (không phải SRS chính thức): đoạn Instructions trên trang + hành vi `Prototype` (oracle) + JS `calculate()`, `displayAnswer()`, `clearAnswer()`, `setFieldStatus()`. Mỗi operation là 1 module theo quy ước `TC-[MODULE]-[NUMBER]`.

| ID | Module | Mô tả | Technique | Status | Bug ID |
|---|---|---|---|---|---|
| TC-ADD-001 | addition | Add `10+9=19` | EP | Pass | None |
| TC-ADD-002 | addition | Tính 2 lần: `5+3=8` rồi `2+3=5` (bắt dùng answer cũ) | State-based | Pass | BUG-CALC-007 |
| TC-SUB-001 | subtraction | Subtract `10-9=1` | EP | Pass | None |
| TC-SUB-002 | subtraction | `6-2=4` (op không giao hoán, bắt đảo toán hạng) | EP | Pass | BUG-CALC-008 |
| TC-MUL-001 | multiplication | Multiply `10*9=90` | EP | Pass | None |
| TC-DIV-001 | division | Divide `10/4=2.5` unchecked | EP | Pass | None |
| TC-DIV-002 | division | Divide by zero → lỗi (nhưng UI kẹt) | EP invalid | Pass | BUG-CALC-006 |
| TC-DIV-003 | division | UI phục hồi sau lỗi chia 0 (Fail cả Prototype) | State-based | Fail | BUG-CALC-010 |
| TC-VAL-001 | input-validation | Number1 `Abc` → lỗi | EP invalid | Pass | BUG-CALC-001 |
| TC-VAL-002 | input-validation | Number2 `xyz` → lỗi | EP invalid | Pass | BUG-CALC-001 |
| TC-CON-001 | concatenation | Concat `ab+cd=abcd`, ẩn integer | Decision Table | Pass | BUG-CALC-002, BUG-CALC-003 |
| TC-CON-002 | concatenation | `12+34`: Add=`46` vs Concat=`1234` | Decision Table | Pass | BUG-CALC-002 |
| TC-INT-001 | integer-toggle | `5/2`: off=`2.5`, on=`2` | EP | Pass | BUG-CALC-004 |
| TC-CLEAR-001 | clear | Clear xóa answer/error/uncheck | EP | Pass | BUG-CALC-005 |

14 TC (13 Pass, 1 Fail). Quy ước mã: `TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa.
Kết quả đo trên Prototype (oracle), Build = Prototype, ngày 2026-09-09 — chi tiết ở `tests/test-runs/build-0-prototype.md`.
Playwright mirror: `tests/test-scripts/<module>/*.spec.js` (Prototype) + `calc/builds.spec.js` (9 builds, `test.fail`) + `calc/matrix-sweep.spec.js` (full sweep).
