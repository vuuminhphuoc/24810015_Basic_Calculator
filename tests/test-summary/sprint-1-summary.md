# Sprint 1 Summary — BasicCalculator (2026-09-09)

SUT: `https://testsheepnz.github.io/BasicCalculator.html`. Oracle: Build `Prototype`.

## Con số
- Test cases: 13 (`tests/test-cases/`, 8 modules) — index: `tests/test-cases/index.md`.
- Prototype live: 13/13 Pass (Playwright `calc.spec.js` 13 passed + 16 ảnh `tests/evidence/`).
- Regression builds 1-9: 9/9 Fail đúng như `test.fail` (`builds.spec.js` 9 expected-fail + 10 ảnh).
- Playwright tổng: 22 passed (`npx playwright test`, 1 worker).
- Bugs: 9 (`tests/bugs-catalog.js` + `tests/bugs/BUG-CALC-001..009`).
- Matrix: `tests/traceability-matrix/version-online-with-bugs.md` (bản online còn lỗi).

## Coverage
Mọi FR suy ra (FR-CALC-01..07) có ≥1 TC. Mỗi Bug truy ngược được TC phát hiện.
Chi tiết dòng-chạy: `tests/test-runs/sprint-1-test-run.md`, `sprint-1-regression-live.md`.

## Còn mở (trung thực)
- Bug = file md, chưa phải GitHub Issue; chưa có labels và Project board.
- Không có bản `version-fixed-*` vì SUT của người ta, không fix/retest được — matrix dừng ở `Ready for Retest`.
