# Test Run — Build 0 Prototype (oracle, LIVE 2026-09-09)

SUT: `https://testsheepnz.github.io/BasicCalculator.html`. Mỗi TC chạy thật
(select + fill + click Calculate + đợi 1.7s). Evidence: `tests/evidence/TC*.jpg`.

| Test Case | Input | Expected | Actual | Result |
|---|---|---|---|---|
| TC-ADD-001 | 10+9 Add | 19 | 19 | Pass |
| TC-ADD-002 | 5+3 rồi 2+3 | 8 rồi 5 | 8 rồi 5 | Pass |
| TC-SUB-001 | 10-9 | 1 | 1 | Pass |
| TC-SUB-002 | 6-2 | 4 | 4 | Pass |
| TC-MUL-001 | 10x9 | 90 | 90 | Pass |
| TC-DIV-001 | 10/4 unchecked | 2.5 | 2.5 | Pass |
| TC-DIV-002 | 10/0 | Divide by zero error! | Divide by zero error! | Pass |
| TC-VAL-001 | Abc+9 Add | Number 1 is not a number | Number 1 is not a number | Pass |
| TC-VAL-002 | 10+xyz Add | Number 2 is not a number | Number 2 is not a number | Pass |
| TC-CON-001 | ab+cd Concat | abcd, integer ẩn | abcd, hidden+disabled | Pass |
| TC-CON-002 | 12+34 Add/Concat | 46 / 1234 | 46 / 1234 | Pass |
| TC-INT-001 | 5/2 off/on | 2.5 / 2 | 2.5 / 2 | Pass |
| TC-CLEAR-001 | Clear | rỗng + uncheck | rỗng + uncheck | Pass |

13/13 Pass. Không sinh bug.
