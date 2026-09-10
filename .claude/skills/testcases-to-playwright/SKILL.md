---
name: testcases-to-playwright
description: Skill 2/4 bắt buộc — phát sinh Test Scripts Playwright từ Test Cases, gồm spec mirror từng module và spec sweep chạy mọi TC trên mọi build.
---

# Skill 2/4 bắt buộc — phát sinh Test Scripts từ Test Cases

> Ánh xạ 1-1 với yêu cầu 2 của giáo viên: **phát sinh Test Scripts từ Test Cases**.

Nguồn: `Slides/En/Test Case.pdf` (Test Case Essentials tr.7 — mục `Script`; Test Procedure & Script tr.16).

## Nguyên tắc mirror

- **Mỗi module test case có 1 spec mirror cùng tên module:**
  `tests/test-cases/<module>/` ↔ `tests/test-scripts/<module>/<module>.spec.js`.
  Ví dụ: `tests/test-cases/addition/` ↔ `tests/test-scripts/addition/addition.spec.js`.
- Mỗi TC là 1 `test()` đặt tên đúng ID + Objective (ví dụ
  `test('TC-ADD-001: 2+3 gives 5', ...)`), assert đúng `Expected result` trong file TC.
- **Phải có 1 spec sweep chạy mọi TC trên mọi build:**
  `tests/test-scripts/calc/matrix-sweep.spec.js` — lặp mọi TC × mọi build
  (Prototype + builds 1–9 qua dropdown `selectBuild`), là nguồn số liệu
  `sweep.json` (95 passed / 41 failed / 136 total).

## Cấu trúc Playwright đang dùng

`tests/test-scripts/<module>/<module>.spec.js`, thêm `builds.spec.js` cho hồi quy.
Config: `testDir: tests/test-scripts`, `workers: 1` (SUT ngoài), `timeout: 60000`, reporter `list`.

## Suite Prototype (phải xanh)

Assert đúng Expected trong file TC: dùng `selectOption`/`fill`/`click` thật
(đừng set JS trực tiếp, để `onchange` chạy), đợi app xong (`waitForTimeout` theo app),
đọc `inputValue('#numberAnswerField')` + `textContent('#errorMsgField')`.

## Suite builds lỗi (xanh nhờ test.fail)

Mỗi build lỗi là 1 `test.fail()` assert oracle Prototype trên build đó, comment `BUG-XXX` tương ứng.
Build fix xong test sẽ "unexpected pass" (đỏ) — đúng semantics, lúc đó bỏ `test.fail`.

## Script phải ghi được Observed result

Script không chỉ assert mà còn phải xuất dữ liệu để đổ ngược vào mục
`Observed result` của test case (Skill 1):

- Đọc giá trị thật sau mỗi bước: `inputValue('#numberAnswerField')`,
  `textContent('#errorMsgField')`, trạng thái kẹt `Calculating` nếu có.
- Reporter JSON (`sweep.json`) lưu actual values; khi viết file test-run thì copy
  actual vào cột Note và cập nhật `Observed result` + `Status` trong file TC tương ứng.
- Quy ước: TC chưa được sweep chạy thì `Observed result` ghi `Chưa chạy`,
  `Status` là `Not Run`.

## Chạy và ghi nhận

`npx playwright test` → dán tóm tắt pass/fail vào file test-run của sprint.
KHÔNG chạy full sweep khi không cần (mất ~8 phút và gọi ra internet thật);
dùng `sweep.json` có sẵn làm số liệu chính thức.
