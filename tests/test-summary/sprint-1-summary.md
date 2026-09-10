# Sprint 1 Summary — BasicCalculator (2026-09-09, cập nhật sau recheck)

SUT: `https://testsheepnz.github.io/BasicCalculator.html`. Oracle: Build `Prototype`.

## Con số
- Test cases: 14 (`tests/test-cases/`, 8 modules) — index: `tests/test-cases/index.md`.
- Prototype live: 13/14 Pass. TC-DIV-003 Fail thật → BUG-CALC-010 (lỗi có sẵn trên Prototype).
- Playwright module suites (8 file mirror test-cases): 22 passed + 1 failed (DIV-003).
- Regression builds 1-9: 9/9 Fail đúng như `test.fail` (`calc/builds.spec.js`).
- Full sweep `calc/matrix-sweep.spec.js`: 136 lượt (15 tests × 9 builds + check B9) = 95 passed / 41 failed, mọi fail map về 10 bugs — xem `tests/test-runs/full-sweep.md` (raw: `sweep.json`).
- Bugs: 10 (`tests/bugs-catalog.js` CATALOG_OK + `node audit.cjs` AUDIT_OK).
- Matrix: `tests/traceability-matrix/version-online-with-bugs.md` (14 TC × bug, full ID).
- Evidence: 26 ảnh `tests/evidence/` + `tests/evidence/index.md`.

## Coverage
7/7 FR suy ra (FR-CALC-01..07) có TC. Mỗi Bug truy ngược được TC phát hiện.
Chi tiết dòng-chạy: `tests/test-runs/build-*.md` (mỗi Build 1 file) + `full-sweep.md`.

## Còn mở (trung thực)
- Bug = file md, chưa phải GitHub Issue; chưa có labels và Project board.
- Không có bản `version-fixed-*` vì SUT của người ta, không fix/retest được — matrix dừng ở `Ready for Retest`/`Open`.
