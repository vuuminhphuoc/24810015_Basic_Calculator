# Full Sweep — 14 TC × builds 0–8 + check Build 9 (Playwright, JSON log: sweep.json)

Spec: `tests/test-scripts/calc/matrix-sweep.spec.js`. Assert oracle Prototype cho mọi ô.
Ngày chạy: 2026-09-09, workers 1, `expect timeout 2000ms`.
Kết quả: **95 passed / 41 failed / 0 flaky / 136 total**.

| Build | Pass | Fail | Fail là |
|---|---|---|---|
| B0 Prototype | 14 | 1 | TC-DIV-003 → BUG-CALC-010 |
| B1 | 12 | 3 | TC-VAL-001, TC-VAL-002 → BUG-CALC-001; TC-DIV-003 → BUG-CALC-010 |
| B2 | 8 | 7 | TC-ADD-001, TC-CON-001, TC-CON-002, TC-ADD-002 → BUG-CALC-002; TC-VAL-001/002 (Add bị đảo thành Concat nên mất check số); TC-DIV-003 → BUG-CALC-010 |
| B3 | 13 | 2 | TC-CON-001 → BUG-CALC-003; TC-DIV-003 → BUG-CALC-010 |
| B4 | 12 | 3 | TC-DIV-001, TC-INT-001 → BUG-CALC-004; TC-DIV-003 → BUG-CALC-010 |
| B5 | 14 | 1 | TC-DIV-003 → BUG-CALC-010 (TC-CLEAR-001 pass vì chu kỳ calculate mở lại nút — xem nuance ở `build-5.md`) |
| B6 | 14 | 1 | TC-DIV-002 → BUG-CALC-006 (TC-DIV-003 pass vì nhánh Infinity có unlock) |
| B7 | 3 | 12 | hàng loạt → BUG-CALC-007 (pass: TC-DIV-002, TC-VAL-002, TC-CLEAR-001) |
| B8 | 5 | 10 | SUB/DIV/VAL/CON/INT → BUG-CALC-008 (pass: ADD-001, MUL-001, ADD-002, CLEAR-001, DIV-003) |
| B9 | 0 | 1 | UI ẩn → BUG-CALC-009 |

Mọi fail đều map được về 1 trong 10 bugs đã biết, không có fail lạ.
Raw log: `sweep.json` (cùng thư mục repo, không nộp zip).
