# Index test case — BasicCalculator

Nguồn suy ra (không phải SRS chính thức): đoạn Instructions trên trang + hành vi `Prototype` (oracle) + JS `calculate()`, `displayAnswer()`, `clearAnswer()`, `setFieldStatus()`. Mỗi operation là 1 module theo quy ước `TC-[MODULE]-[NUMBER]`.

| ID | Module | Mô tả | Technique |
|---|---|---|---|
| TC-ADD-001 | addition | Add `10+9=19` | EP |
| TC-ADD-002 | addition | Tính 2 lần: `5+3=8` rồi `2+3=5` (bắt dùng answer cũ) | State-based |
| TC-SUB-001 | subtraction | Subtract `10-9=1` | EP |
| TC-SUB-002 | subtraction | `6-2=4` (op không giao hoán, bắt đảo toán hạng) | EP |
| TC-MUL-001 | multiplication | Multiply `10*9=90` | EP |
| TC-DIV-001 | division | Divide `10/4=2.5` unchecked | EP |
| TC-DIV-002 | division | Divide by zero → lỗi | EP invalid |
| TC-VAL-001 | input-validation | Number1 `Abc` → lỗi | EP invalid |
| TC-VAL-002 | input-validation | Number2 `xyz` → lỗi | EP invalid |
| TC-CON-001 | concatenation | Concat `ab+cd=abcd`, ẩn integer | Decision Table |
| TC-CON-002 | concatenation | `12+34`: Add=`46` vs Concat=`1234` | Decision Table |
| TC-INT-001 | integer-toggle | `5/2`: off=`2.5`, on=`2` | EP |
| TC-CLEAR-001 | clear | Clear xóa answer/error/uncheck | EP |

Quy ước mã: `TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa.
Playwright mirror: `tests/test-scripts/calc/calc.spec.js` (Prototype) + `builds.spec.js` (9 builds, `test.fail`).
