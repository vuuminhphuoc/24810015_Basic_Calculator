---
name: testrun-bug-report
description: Skill 3/4 bắt buộc — tạo file Test Run cho từng Build (ghi kết quả Pass/Fail/Blocked/Skipped) và báo cáo Bugs theo 10 trường chuẩn slide.
---

# Skill 3/4 bắt buộc — tạo Test Run cho từng Build, thực thi, ghi nhận kết quả và báo cáo Bugs

> Ánh xạ 1-1 với yêu cầu 3 của giáo viên: **tạo các file Test Run, mỗi file gồm các
> test case cho từng Build, thực thi, ghi nhận kết quả và báo cáo Bugs**.

Nguồn: `Slides/En/Test report.pdf` (Bug Report Essentials tr.5, Priority tr.11, Severity tr.12, Characteristics tr.13, Bad Bug Report tr.15–16).

## A. Test Run — 1 file cho 1 build

- Mỗi build 1 file: `tests/test-runs/build-N.md` (Prototype = `build-0-prototype.md`).
  Không gộp nhiều build vào 1 file; SUT nhiều biến thể (build/môi trường):
  1 dòng = 1 TC × 1 build. Header mỗi file: SUT, Build, ngày chạy, Tester,
  Test environment, spec đã dùng.
- Bảng test case đầy đủ mọi TC (14 TC trong bài này), cột:

  `| Test Case ID | Test title | Expected | Actual | Result | Related Bug |`

  `Actual` phải là giá trị đo được thật (lấy từ raw log `tests/test-runs/raw/sweep.json`),
  không viết lại Expected.

- Cột `Result` chỉ nhận đúng một trong 4 giá trị: `Pass` / `Fail` / `Blocked` / `Skipped`.
  (`Not Run` chỉ dùng trong file test case chưa chạy, không dùng trong test run đã thực thi.)
  `Fail`/`Blocked` bắt buộc có Related Bug hoặc lý do cụ thể.
- Cuối mỗi file test run phải có mục `## Bugs` liệt kê các bug phát hiện trong build đó
  (Bug ID + Problem summary 1 dòng + link tới file `tests/bugs/BUG-CALC-NNN.md`).
- Link 2 chiều (bắt buộc): Bug ghi `Found by TC-XXX` + Test Run ghi `Related Bug` +
  file TC cập nhật `Observed result`/`Status`/`Bug ID` + PR fix (nếu có) ghi `Fixes #N`.
  Bug chỉ close khi retest pass + comment kết quả.

## B. Bug Report — 10 trường bắt buộc, đúng thứ tự (slide tr.5)

Đọc skill này là đủ viết bug report, không cần mở slide. Mỗi bug là 1 file
`tests/bugs/BUG-CALC-NNN.md` (đồng thời là GitHub Issue theo template
`.github/ISSUE_TEMPLATE/bug_report.md`) với đúng 10 trường sau:

1. **Bug ID** — mã duy nhất, khác với Test case ID. Quy ước: `BUG-CALC-[NUMBER]`,
   không đổi tên/xóa ID đang có.
2. **Function name** — chức năng chứa bug (ví dụ `Addition`, `Division`, `Clear`,
   `Concatenation`, `Integer toggle`...).
3. **Problem summary** — tóm tắt vấn đề = **Test Objective + Actual result (so với
   Expected result)** (slide tr.8). Ví dụ: `Phép trừ 6-2 trên build 4 trả về -4
   thay vì 2 như mong đợi`.
4. **How to reproduce it** — các bước tái hiện chi tiết kèm ảnh minh chứng để developer
   reproduce được = **Test steps + Expected result + Actual result** (slide tr.9):
   ghi thao tác bàn phím/chuột, giá trị nhập, thứ tự click, điểm đọc kết quả
   (`#numberAnswerField`, `#errorMsgField`), ảnh trong `tests/evidence/`.
5. **Reported by** — `24810015`.
6. **Date** — `2026-09-09` (ngày chạy sweep chính thức).
7. **Assign to** — `Dev team (SUT bên thứ ba — không sửa được)`.
8. **Status** — Bug Life Cycle, chỉ nhận một trong:
   `New` / `In-progress` / `Fixed` / `Closed` / `Reopened` / `Rejected` / `Deferred` / `Duplicate`.
   Luồng chuẩn: `New` → `In-progress` → `Fixed` → `Closed`; fail khi retest thì `Reopened`.
9. **Priority** — mức độ khẩn cấp của việc sửa (slide tr.11):

   | Priority | Thời hạn sửa | Mô tả |
   |---|---|---|
   | Critical | sửa ngay hoặc trong 01 ngày | có thể gây thiệt hại lớn cho sản phẩm |
   | High | 02–04 ngày | ảnh hưởng tính năng chính |
   | Medium | 05–08 ngày | lệch nhẹ so với đặc tả |
   | Low | sửa sau | ảnh hưởng rất nhỏ tới vận hành sản phẩm |

10. **Severity** — mức độ ảnh hưởng tới ứng dụng (slide tr.12):

    | Severity | Weight (trọng số) | Mô tả |
    |---|---|---|
    | Fatal | 10 | hỏng nặng: system crash, lost data |
    | Serious | 5 | hỏng tính năng chính (ví dụ user xóa comment mà không cần login) |
    | Medium | 3 | lệch nhẹ so với đặc tả (ví dụ GUI hiển thị sai trên mobile) |
    | Cosmetic | 1 | ảnh hưởng rất nhỏ (ví dụ sai tab order, thiếu default focus, thiếu shortcut...) |

- Kèm theo 10 trường: `Environment` cụ thể (URL + build + browser/OS, ví dụ
  `https://testsheepnz.github.io/BasicCalculator.html, build 4, Chrome/Chromium headless
  1280x900, Windows 11, Playwright 1.63`), `Found by Test Case` (TC nào phát hiện),
  `Requirement liên quan`, `Evidence` (ảnh `tests/evidence/`, log).
- `Severity` nói về **impact**, `Priority` nói về **urgency** — hai trục độc lập
  (bug Cosmetic vẫn có thể Priority High nếu sếp yêu cầu sửa gấp và ngược lại).

## C. 7 đặc tính của bug report tốt (slide tr.13)

**Written, Numbered, Simple, Understandable, Reproducible, Legible, Non-judgmental.**

- Viết ra (không báo miệng), đánh số, đơn giản, dễ hiểu, tái hiện được, dễ đọc,
  không phán xét.
- **Non-judgmental**: cấm dùng tính từ cảm tính/phán xét, phải dùng số đo và nêu rõ
  environment cụ thể (browser + version + OS + build).

## D. Các bug report xấu cần tránh (slide tr.15–16)

1. Không file bug ở đâu cả (`Isn't filed at all`).
2. Báo qua email thay vì hệ thống tracking (`Is filed via email`).
3. Không có thông tin cụ thể: `It does not work!` → phải viết
   `Error 404: Access denied`.
4. Chỉ báo symptom, không cho cách reproduce: `I just clicked and it crashes` →
   phải viết `Error 404: Page not found when clicking the Export button`.
5. Environment mơ hồ: `Windows` → phải viết `Windows 7, Google Chrome 20.0.1132.47m`
   (bài này: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63, build N`).
6. Dùng tính từ thay vì con số: `System is really slow` → phải viết
   `System does not response after 3s...`.
7. Dùng lời phán xét: `Error message is stupid` → phải viết `Error message is unclear`.
