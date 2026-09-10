# Test Summary Report — Basic Calculator

Cấu trúc theo `Slides/En/Test report.pdf`: Summary → Test Case result report → Defect Report → Open point.

## 1. Summary

- SUT: `https://testsheepnz.github.io/BasicCalculator.html` (10 build: `Prototype` + `1..9`).
- Oracle: Build `Prototype`. Test basis: `requirements/BasicCalculator-SRS.md` (FR-CALC-01..07, suy ra từ Instructions + hành vi Prototype).
- Tester: `24810015`. Ngày chạy: `2026-09-09`.
- Test environment: Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63, workers 1.
- Kỹ thuật thiết kế: Equivalence Partitioning, Decision Table, State-based.
- Phạm vi: Functional testing trên 8 module (addition, subtraction, multiplication, division, input-validation, concatenation, integer-toggle, clear) + build selection.
- Ngoài phạm vi: performance, security, cross-browser (chỉ chạy Chromium).

## 2. Test Case result report

| Chỉ số | Giá trị |
|---|---|
| Test case thiết kế | 14 (`tests/test-cases/`, 8 module) |
| Test case thực thi trên Prototype | 14/14 |
| Prototype: Pass / Fail | 13 / 1 (`TC-DIV-003` → BUG-CALC-010) |
| Tổng lượt thực thi (14 TC × 10 build, sweep) | 136 lượt — 95 passed / 41 failed |
| Script tự động | 10 file spec (`tests/test-scripts/`), raw log `tests/test-runs/raw/sweep.json` |

Pass/Fail theo build (chi tiết từng TC ở `tests/test-runs/build-*.md`):

| Build | Pass | Fail | Bug xác nhận |
|---|---|---|---|
| Prototype | 14 | 1 | BUG-CALC-010 |
| 1 | 12 | 3 | BUG-CALC-001 |
| 2 | 8 | 7 | BUG-CALC-002 |
| 3 | 13 | 2 | BUG-CALC-003 |
| 4 | 12 | 3 | BUG-CALC-004 |
| 5 | 14 | 1 | BUG-CALC-005 |
| 6 | 14 | 1 | BUG-CALC-006 |
| 7 | 3 | 12 | BUG-CALC-007 |
| 8 | 5 | 10 | BUG-CALC-008 |
| 9 | 0 | 1 (14 TC Blocked) | BUG-CALC-009 |

## 3. Defect Report

Tổng: 10 defect, tất cả đang `New` (SUT của bên thứ ba, tester không có quyền fix nên không chuyển được sang `Fixed`/`Closed`).

### Thống kê theo Severity (trọng số theo slide: Fatal 10, Serious 5, Medium 3, Cosmetic 1)

| Severity | Weight | Số defect | W.def |
|---|---|---|---|
| Fatal | 10 | 1 | 10 |
| Serious | 5 | 8 | 40 |
| Medium | 3 | 1 | 3 |
| Cosmetic | 1 | 0 | 0 |
| **Tổng** | | **10** | **53** |

### Thống kê theo Priority

| Priority | Số defect | Bug ID |
|---|---|---|
| Critical | 3 | BUG-CALC-002, 007, 009 |
| High | 6 | BUG-CALC-001, 003, 004, 006, 008, 010 |
| Medium | 1 | BUG-CALC-005 |
| Low | 0 | — |

### Thống kê theo Function name (module)

| Function | Số defect | Bug ID |
|---|---|---|
| Input validation | 1 | BUG-CALC-001 |
| Add / Concatenate | 1 | BUG-CALC-002 |
| Concatenate | 1 | BUG-CALC-003 |
| Integers only | 1 | BUG-CALC-004 |
| Clear | 1 | BUG-CALC-005 |
| Divide | 2 | BUG-CALC-006, BUG-CALC-010 |
| Add (state) | 1 | BUG-CALC-007 |
| Subtract | 1 | BUG-CALC-008 |
| Build selection | 1 | BUG-CALC-009 |

### Defect đáng chú ý

`BUG-CALC-010` là defect duy nhất nằm trên chính Build `Prototype` — build mà trang tự nhận "works perfectly": nhánh chia-0 trong `calculate()` `return` mà không gọi `unlockCalculate()`, khiến `calculateButton` và `clearButton` kẹt `disabled` cho tới khi tải lại trang. 9 bug còn lại là lỗi cấy sẵn trong build 1–9.

## 4. Open point

- 10/10 defect còn `New`, chưa có bản fix để retest → không có `version-fixed` của traceability matrix.
- Chưa chuyển bug sang GitHub Issues, chưa gắn labels và Project board (mới lưu dạng file Markdown trong `tests/bugs/`).
- Chỉ chạy trên Chromium headless; chưa kiểm thử cross-browser, chưa kiểm thử performance/security.
- Một quan sát chưa đủ căn cứ để mở bug: ô nhập để trống bị coi là số `0` — Instructions không nói rõ nên chưa có oracle để kết luận đúng/sai.

## Truy vết nhanh

- Test case: `tests/test-cases/index.md`
- Test run theo từng build: `tests/test-runs/build-*.md`, tổng hợp `tests/test-runs/full-sweep.md`
- Bug: `tests/bugs/`, catalog `tests/bugs-catalog.js`
- Matrix: `tests/traceability-matrix/version-online-with-bugs.md`
- Evidence: `tests/evidence/index.md` (26 ảnh chụp live)
- Tự kiểm tra nhất quán: `npm run audit`
