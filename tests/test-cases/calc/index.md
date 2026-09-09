# Index test case — BasicCalculator

Nguồn suy ra (không phải SRS chính thức): đoạn Instructions trên trang + hành vi `Prototype` (oracle) + JS `calculate()`, `displayAnswer()`, `clearAnswer()`, `setFieldStatus()`.

| ID | Requirement | Mô tả | Technique |
|---|---|---|---|
| TC-CALC-001 | FR-CALC-01 | Add `10+9=19` | EP |
| TC-CALC-002 | FR-CALC-01 | Subtract `10-9=1` | EP |
| TC-CALC-003 | FR-CALC-01 | Multiply `10*9=90` | EP |
| TC-CALC-004 | FR-CALC-01+03 | Divide `10/4=2.5` unchecked | EP |
| TC-CALC-005 | FR-CALC-04 | Divide by zero → lỗi | EP invalid |
| TC-CALC-006 | FR-CALC-05 | Number1 `Abc` → lỗi | EP invalid |
| TC-CALC-007 | FR-CALC-05 | Number2 `xyz` → lỗi | EP invalid |
| TC-CALC-008 | FR-CALC-02 | Concat `ab+cd=abcd`, ẩn integer | Decision Table |
| TC-CALC-009 | FR-CALC-01+02 | `12+34`: Add=`46` vs Concat=`1234` | Decision Table |
| TC-CALC-010 | FR-CALC-03 | `5/2`: off=`2.5`, on=`2` | EP |
| TC-CALC-011 | FR-CALC-01 | `6-2=4` (bắt đảo toán hạng) | EP |
| TC-CALC-012 | FR-CALC-06 | Tính 2 lần (bắt dùng answer cũ) | State-based |
| TC-CALC-013 | FR-CALC-06 | Clear xóa hết | EP |

Quy ước mã: `TC-CALC-[NUMBER]`, không tái dùng ID đã xóa.
