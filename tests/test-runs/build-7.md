# Test Run — Build 7 (LIVE 2026-09-09)

Phạm vi: TC tính 2 lần (defect dùng `answer` cũ thay `num1`).

| Test Case | Input | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-002 | 5+3 rồi 2+3 | 8 rồi 5 | 3 (0+3) rồi 6 (3+3) | Fail | BUG-CALC-007 |

Ngay lần đầu đã sai vì `num1=""` → 0.
Evidence: `tests/evidence/B7a-step1.jpg`, `B7b-step2.jpg`.
