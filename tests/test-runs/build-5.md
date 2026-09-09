# Test Run — Build 5 (LIVE 2026-09-09)

Phạm vi: TC Clear (defect disable nút Clear trong `buildChanged()`).

| Test Case | Check | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-CLEAR-001 | trạng thái nút ngay sau chọn build | enabled | disabled=true | Fail | BUG-CALC-005 |

Nuance: một chu kỳ `calculate()` → `unlockCalculate()` mở lại nút, nên TC phải
assert ngay sau chọn build, trước khi bấm Calculate.
Evidence: `tests/evidence/B5-state.jpg`.
