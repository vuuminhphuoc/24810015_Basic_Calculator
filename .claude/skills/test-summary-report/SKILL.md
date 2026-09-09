---
name: test-summary-report
description: Tổng hợp báo cáo sprint gồm pass-fail-blocked, coverage, evidence và checklist chấm theo slide quản lý test case.
---

# Test Summary Report

## Nội dung (tests/test-summary/)
- Tổng TC, số dòng thực thi (TC × build), `Done/Open/Blocked/Chưa chạy`.
- Coverage: requirement nào đã test, bug nào còn mở, TC nào cần regression.
- Link evidence (`tests/evidence/index.md`), Playwright (`npx playwright test`), matrix.

## Checklist trước khi nộp
`tests/test-cases/` đủ template 7 mục; mã `TC-[MODULE]-[NUMBER]`; có test-run theo sprint;
bug có `Found by Test Case`; run ghi `Related Bug` khi fail; đủ labels
`type/module/result/severity/priority/status`; có board; bug chỉ close sau retest; có matrix.
