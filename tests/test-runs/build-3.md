# Test Run — Build 3 (LIVE 2026-09-09)

Phạm vi: TC Concatenate (defect ép `isNumber=true`).

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-CON-001 | ab+cd Concat | abcd, integer ẩn | err="Number 1 is not a number", integer hiện+enabled | Fail | BUG-CALC-003 |

Evidence: `tests/evidence/B3-concat.jpg`.
