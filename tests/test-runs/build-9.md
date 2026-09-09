# Test Run — Build 9 (LIVE 2026-09-09)

Phạm vi: check UI sau chọn build (defect ẩn element trong `buildChanged()`).

| Test Case | Check | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-CLEAR-001 (flow) | Second number + Calculate sau chọn build 9 | hiện + enabled | hidden+disabled cả hai | Fail | BUG-CALC-009 |

Evidence: `tests/evidence/B9-ui.jpg`.
