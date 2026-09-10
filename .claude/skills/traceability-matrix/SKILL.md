---
name: traceability-matrix
description: Skill 4/4 bắt buộc — tạo Traceability Matrix truy vết Requirement - Test Case - Bug, kèm quy tắc đếm coverage.
---

# Skill 4/4 bắt buộc — tạo Traceability Matrix truy vết Requirement - Test Case - Bug

> Ánh xạ 1-1 với yêu cầu 4 của giáo viên: **tạo Traceability Matrix truy vết
> Requirement - Test Case - Bug**.

Nguồn: `Slides/En/Test Case.pdf` (To measure test coverage tr.5, Traceable tr.25) và
`Slides/En/Test report.pdf` (Defect Report trong Test Summary Report tr.17).

## Vị trí và cột

`tests/traceability-matrix/version-<ten>.md` (1 file/version: online còn lỗi, fixed...), cột:
`Requirement | Test Case | Build | Result | Bug Issue | Status`.
`Result`: Pass/Fail/Blocked/Skipped. `Status`: Done/Open/Ready for Retest/Blocked.
SUT nhiều build thì thêm cột `Build`; bản nộp gọn lấy status xấu nhất theo TC, bản full để ở test-runs.

## Quy tắc đếm coverage (bắt buộc, kiểm tra trước khi nhận)

1. Mọi Requirement có ≥1 TC — requirement nào không có TC là thiếu coverage.
2. Mọi dòng Fail có Bug — dòng `Result = Fail` mà không có Bug Issue là sai.
3. Mọi Bug xuất hiện ≥1 dòng — bug không được dòng nào trỏ tới là bug mồ côi
   (cross-check với số file `tests/bugs/`).
4. Tổng dòng = số TC × số build — bài này: 14 TC × 10 build (Prototype + 1–9).
   Đếm Done/Open/Blocked/Chưa chạy khớp tổng; thiếu dòng là thiếu coverage,
   thừa dòng là trùng lặp.

## Cách dùng

- Dòng nào `Result` xấu nhất của 1 TC (Fail > Blocked > Skipped > Pass) quyết định
  `Status` nộp gọn; chi tiết từng build xem file test-run tương ứng.
- Matrix là bằng chứng đo coverage (mục 7 của Skill 1) và đầu vào Defect Report
  của Test Summary Report.
