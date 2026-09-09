# Test Run — Build 8 (LIVE 2026-09-09)

Phạm vi: TC phép không giao hoán (defect swap `num1/num2`).

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-SUB-002 | 6-2 Subtract | 4 | -4 | Fail | BUG-CALC-008 |

Add/Multiply không lộ lỗi này vì giao hoán — lý do dùng Subtract.
Evidence: `tests/evidence/B8-sub.jpg`.
