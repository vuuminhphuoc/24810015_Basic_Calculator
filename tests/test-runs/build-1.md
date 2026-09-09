# Test Run — Build 1 (LIVE 2026-09-09)

Phạm vi: TC validate số (defect bỏ check `isNaN`). TC-VAL-002 cùng dòng code,
chưa chạy live trên build này.

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-VAL-001 | Abc+9 Add | Number 1 is not a number | ans=NaN, err="" | Fail | BUG-CALC-001 |

Evidence: `tests/evidence/B1-badn1.jpg`.
