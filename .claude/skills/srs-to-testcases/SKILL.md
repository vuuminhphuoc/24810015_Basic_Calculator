---
name: srs-to-testcases
description: Skill 1/4 bắt buộc — phát sinh Test Cases từ Requirements (SRS) vào tests/test-cases/ theo template 12 mục chuẩn slide.
---

# Skill 1/4 bắt buộc — phát sinh Test Cases từ Requirements

> Ánh xạ 1-1 với yêu cầu 1 của giáo viên: **phát sinh Test Cases từ Requirements**.

Nguồn: `Slides/En/Test Case.pdf` (Test Case Essentials tr.7, Objective/Title tr.8, Vì sao phải viết test case tr.5).

## Input

File SRS/đặc tả (`SRS.md`, `requirements/`) hoặc URL trang SUT + ảnh GUI. Không có SRS chính thức thì ghi rõ Requirement là "suy ra", lấy hành vi đúng nhất (build Prototype) làm oracle.

## Vì sao phải viết test case (slide tr.5)

1. **Accountability** — rõ ai test gì, chịu trách nhiệm được.
2. **Reproducibility** — người khác chạy lại ra cùng kết quả.
3. **Tracking** — theo dõi tiến độ, biết case nào đã chạy/chưa chạy.
4. **Automation** — có test case mới tự động hóa được (đưa cho automation team).
5. **To find bugs** — thiết kế để tìm lỗi, không chỉ để "chạy cho xanh".
6. **To verify tests executed correctly** — xác minh test đã được thực thi đúng cách.
7. **To measure test coverage** — đo độ bao phủ so với requirements.

## Template test case 12 mục (bắt buộc — Test Case Essentials, slide tr.7)

Mỗi test case là 1 file `tests/test-cases/<module>/TC-<MOD>-NNN.md` với đúng cấu trúc sau.
Đọc skill này là đủ viết test case, không cần mở slide:

```markdown
# TC-XXX-NNN: <Objective/Title>

## Requirement ID
## Module / Test type / Technique
## Preconditions
## Test data
## Test steps
## Expected result
## Test environment
## Script
## Observed result
## Status
## Bug ID
## Comments
```

Giải thích từng mục:

1. **Tiêu đề `# TC-XXX-NNN: <Objective/Title>`** — gồm Test case ID + Objective/Title.
   **Objective/Title là trường quan trọng nhất** (slide tr.8): cho người đọc biết ngay
   test này kiểm tra gì; tên tốt giúp review dễ, dễ bàn giao cho người khác/automation team;
   nhiều khi đây là phần duy nhất được đọc. Viết dạng `Validate that...` (ví dụ
   `Validate that 6-2 gives 4`).
2. **Requirement ID** — truy vết tới SRS (ví dụ `FR-CALC-01`). Không có SRS chính thức thì
   ghi `Suy ra từ hành vi Prototype (oracle)`.
3. **Module / Test type / Technique** — module (addition, subtraction...), test type
   (Functional, UI...) và kỹ thuật thiết kế (EP, BVA, Decision Table, State-based).
4. **Preconditions** — điều kiện trước khi chạy: build nào (Prototype / 1–9), trạng thái
   checkbox (Integers only checked/unchecked), trang đã mở.
5. **Test data** — dữ liệu vào/ra/default cụ thể: giá trị nhập, phép tính, câu lỗi nguyên văn
   mong đợi. Không để người chạy tự tìm test data.
6. **Test steps** — các bước numbered, đủ chi tiết để người khác reproduce được, kèm bước
   verify cuối (đọc kết quả ở đâu).
7. **Expected result** — số chính xác hoặc câu lỗi nguyên văn, là căn cứ Pass/Fail.
8. **Test environment** — browser + version + OS + build (ví dụ
   `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63, build Prototype`).
9. **Script** — đường dẫn spec Playwright mirror (ví dụ
   `tests/test-scripts/calc/addition.spec.js`) hoặc pseudo-code nếu chưa automate.
10. **Observed result** — kết quả quan sát được khi chạy (do script đổ về, xem Skill 2).
    Lúc mới viết test case để trống hoặc ghi `Chưa chạy`.
11. **Status** — chỉ nhận đúng một trong 5 giá trị: `Pass` / `Fail` / `Blocked` / `Skipped` / `Not Run`.
12. **Bug ID** — điền khi Status là Fail (ví dụ `BUG-CALC-001`); Pass thì để `Không có`.
13. **Comments** — ghi chú thêm (trường hợp biên, nghi ngờ, cần retest...).

## Module

Mỗi feature là 1 thư mục con: `tests/test-cases/<module>/TC-<MOD>-NNN.md`.
Ví dụ calculator: `addition/`, `subtraction/`, `multiplication/`, `division/`,
`input-validation/`, `concatenation/`, `integer-toggle/`, `clear/`.

## Quy tắc ID

`TC-[MODULE]-[NUMBER]`, không tái dùng ID đã xóa, không đổi tên ID đang có.
Liệt kê tất cả vào `tests/test-cases/index.md` để chống trùng.

## Kỹ thuật thiết kế

- EP: mỗi invalid class 1 TC riêng, valid gộp lại.
- BVA: kiểm tra biên (ví dụ chia cho 0, số 0, số âm).
- Decision Table cho Operation × Integers-only.
- State-based: tính 2 lần liên tiếp để bắt lỗi dùng state cũ.
- Dùng phép không giao hoán (`6-2`) để bắt lỗi đảo toán hạng; invalid chữ (`Abc`) để bắt lỗi thiếu validate.

## Tiêu chí nhận

- Mỗi Requirement có ≥1 TC (đối chiếu bằng Traceability Matrix — Skill 4).
- Không có test case "xấu": thiếu test data, bước chung chung, thiếu bước verify Pass/Fail,
  test nhiều điều kiện trong 1 case, trùng lặp với case khác.
