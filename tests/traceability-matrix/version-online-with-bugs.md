# Traceability Matrix — BasicCalculator (Requirement ↔ Test Case ↔ Bug)

Nguồn số liệu: `tests/test-runs/build-*.md` (thực thi thật, `tests/test-runs/raw/sweep.json`), `tests/bugs-catalog.js`.
Oracle: Build `Prototype`. Cột `Result` là kết quả trên Prototype; cột `Bug (build)` là bug mà TC đó phát hiện trên build tương ứng.

## Bảng truy vết

| Requirement | Test Case | Result (Prototype) | Bug Issue (build phát hiện) | Status |
|---|---|---|---|---|
| FR-CALC-01: Add/Sub/Mul/Div số học | TC-ADD-001 | Pass | BUG-CALC-002 (B2), BUG-CALC-007 (B7) | Open |
| FR-CALC-01 | TC-SUB-001 | Pass | BUG-CALC-007 (B7), BUG-CALC-008 (B8) | Open |
| FR-CALC-01 | TC-SUB-002 | Pass | BUG-CALC-008 (B8) | Open |
| FR-CALC-01 | TC-MUL-001 | Pass | BUG-CALC-007 (B7) | Open |
| FR-CALC-01 + FR-CALC-03 | TC-DIV-001 | Pass | BUG-CALC-004 (B4), BUG-CALC-008 (B8) | Open |
| FR-CALC-02: Concatenate chuỗi | TC-CON-001 | Pass | BUG-CALC-002 (B2), BUG-CALC-003 (B3) | Open |
| FR-CALC-01 + FR-CALC-02 | TC-CON-002 | Pass | BUG-CALC-002 (B2) | Open |
| FR-CALC-03: Integers only | TC-INT-001 | Pass | BUG-CALC-004 (B4) | Open |
| FR-CALC-04: Chia 0 báo lỗi | TC-DIV-002 | Pass | BUG-CALC-006 (B6) | Open |
| FR-CALC-04 + FR-CALC-06: UI phục hồi sau lỗi | TC-DIV-003 | **Fail** | BUG-CALC-010 (Prototype) | Open |
| FR-CALC-05: Validate số | TC-VAL-001 | Pass | BUG-CALC-001 (B1) | Open |
| FR-CALC-05: Validate số | TC-VAL-002 | Pass | BUG-CALC-001 (B1) | Open |
| FR-CALC-06: Calculate dùng đúng input | TC-ADD-002 | Pass | BUG-CALC-007 (B7) | Open |
| FR-CALC-06: Clear | TC-CLEAR-001 | Pass | BUG-CALC-005 (B5), BUG-CALC-009 (B9) | Open |
| FR-CALC-07: Build selector | toàn bộ 14 TC replay trên 10 build | Pass trên Prototype (trừ TC-DIV-003) | BUG-CALC-001..009 | Open |

## Kiểm tra tính đầy đủ (quy tắc trong skill `traceability-matrix`)

| Quy tắc | Kết quả |
|---|---|
| Mọi Requirement có ≥1 Test Case | Đạt — FR-CALC-01..07 đều có TC |
| Mọi dòng Fail có Bug | Đạt — TC-DIV-003 → BUG-CALC-010 |
| Mọi Bug xuất hiện ≥1 dòng | Đạt — 10/10 bug đều có mặt |
| Tổng lượt chạy = số TC × số build | 14 TC × 10 build; sweep thực thi 136 lượt (15 test Playwright × 9 build + 1 check Build 9, do TC-INT-001 tách 2 test: unchecked/checked) |

## Trạng thái bug

Toàn bộ 10 bug ở trạng thái `New`: SUT `testsheepnz.github.io` là trang của bên thứ ba, tester không có quyền sửa nên không thể chuyển sang `Fixed`/`Closed`. Vì vậy project này chỉ có một phiên bản matrix (`version-online-with-bugs`), không có bản `version-fixed`.
