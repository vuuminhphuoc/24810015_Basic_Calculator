# Test Run — Build 4 (LIVE 2026-09-09)

Phạm vi: TC số lẻ + integer (defect khóa integer: `disabled+checked`).

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-DIV-001 | 10/4 unchecked | 2.5, checkbox tự do | intDisabled=true ngay sau chọn build | Fail | BUG-CALC-004 |

Nuance: script ép uncheck checkbox đang disabled nên Answer vẫn `2.5`;
user-path thật không bỏ check được (để nguyên thì ra `2`).
Evidence: `tests/evidence/B4-div.jpg`.
