# Sprint 1 Test Run — Prototype (LIVE, 2026-09-09)

SUT: `https://testsheepnz.github.io/BasicCalculator.html`, Build = `Prototype`.
Execute thật bằng headless Chromium: set `selectBuild`/`selectOperationDropdown`, nhập `number1Field`/`number2Field`, click `calculateButton`, đợi ~1.7s (do `randomTimeout`), đọc `numberAnswerField` + `errorMsgField`.

| Test Case ID | Input | Expected | Actual live | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-001 | 10+9 Add off | 19 | 19, err="" | Pass |  |
| TC-SUB-001 | 10-9 Sub | 1 | 1 | Pass |  |
| TC-MUL-001 | 10x9 Mul | 90 | 90 | Pass |  |
| TC-DIV-001 | 10/4 Div off | 2.5 | 2.5 | Pass |  |
| TC-DIV-002 | 10/0 Div | Divide by zero error! | Divide by zero error!, ans="" | Pass |  |
| TC-VAL-001 | Abc+9 Add | Number 1 is not a number | Number 1 is not a number | Pass |  |
| TC-VAL-002 | 10+xyz Add | Number 2 is not a number | Number 2 is not a number | Pass |  |
| TC-CON-001 | ab+cd Concat | abcd, integer hidden+disabled | abcd, hidden=true disabled=true | Pass |  |
| TC-CON-002 | 12+34 Add vs Concat | 46 vs 1234 | 46 (int enabled) / 1234 (int hidden+disabled) | Pass |  |
| TC-INT-001 | 5/2 off/on | 2.5 / 2 | 2.5 / 2 | Pass |  |
| TC-SUB-002 | 6-2 Sub | 4 | 4 | Pass |  |
| TC-ADD-002 | 5+3 rồi 2+3 | 8 rồi 5 | 8 rồi 5 | Pass |  |
| TC-CLEAR-001 | Clear sau khi có KQ | ans="", err="", uncheck | ans="", err="", checked=false | Pass |  |

13/13 live trên Prototype đều Pass. Quy tắc: Result = Fail/Blocked → bắt buộc có Related Bug hoặc lý do.
