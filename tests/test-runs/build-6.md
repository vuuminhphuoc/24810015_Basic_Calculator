# Test Run — Build 6 (LIVE 2026-09-09)

Phạm vi: TC chia 0 (defect bỏ check `num2==0`).

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-DIV-002 | 10/0 Divide | Divide by zero error! | ans=Infinity, err="" | Fail | BUG-CALC-006 |

Evidence: `tests/evidence/B6-div0.jpg`.
