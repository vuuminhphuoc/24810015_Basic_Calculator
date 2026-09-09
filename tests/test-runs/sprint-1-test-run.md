# Sprint 1 Test Run — Prototype (LIVE, 2026-09-09)

SUT: `https://testsheepnz.github.io/BasicCalculator.html`, Build = `Prototype`.
Execute thật bằng headless Chromium: set `selectBuild`/`selectOperationDropdown`, nhập `number1Field`/`number2Field`, click `calculateButton`, đợi ~1.7s (do `randomTimeout`), đọc `numberAnswerField` + `errorMsgField`.

| Test Case ID | Input | Expected | Actual live | Result | Related Bug |
|---|---|---|---|---|---|
| TC-CALC-001 | 10+9 Add off | 19 | 19, err="" | Pass |  |
| TC-CALC-002 | 10-9 Sub | 1 | 1 | Pass |  |
| TC-CALC-003 | 10x9 Mul | 90 | 90 | Pass |  |
| TC-CALC-004 | 10/4 Div off | 2.5 | 2.5 | Pass |  |
| TC-CALC-005 | 10/0 Div | Divide by zero error! | Divide by zero error!, ans="" | Pass |  |
| TC-CALC-006 | Abc+9 Add | Number 1 is not a number | Number 1 is not a number | Pass |  |
| TC-CALC-007 | 10+xyz Add | Number 2 is not a number | Number 2 is not a number | Pass |  |
| TC-CALC-008 | ab+cd Concat | abcd, integer hidden+disabled | abcd, hidden=true disabled=true | Pass |  |
| TC-CALC-009 | 12+34 Add vs Concat | 46 vs 1234 | 46 (int enabled) / 1234 (int hidden+disabled) | Pass |  |
| TC-CALC-010 | 5/2 off/on | 2.5 / 2 | 2.5 / 2 | Pass |  |
| TC-CALC-011 | 6-2 Sub | 4 | 4 | Pass |  |
| TC-CALC-012 | 5+3 rồi 2+3 | 8 rồi 5 | 8 rồi 5 | Pass |  |
| TC-CALC-013 | Clear sau khi có KQ | ans="", err="", uncheck | ans="", err="", checked=false | Pass |  |

13/13 live trên Prototype đều Pass. Quy tắc: Result = Fail/Blocked → bắt buộc có Related Bug hoặc lý do.
