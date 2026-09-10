# [BUG][Calc] Build 7 dùng answer cũ thay number1

## 1. Bug ID
BUG-CALC-007

## 2. Function name
Add

## 3. Problem summary
Kiểm thử tính liên tiếp 2 lần (`5+3` rồi `2+3`) với Operation `Add`: lần 1 trả về `3` thay vì `8`, lần 2 trả về `6` thay vì `5` do hệ thống dùng answer cũ làm `number1`.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `7`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `7`.
2. Nhập First number `5`, Second number `3`, chọn `Add`, click `Calculate`, đợi ~1.7s, ghi kết quả lần 1.
3. Đổi First number thành `2`, giữ Second number `3`, click `Calculate`, đợi ~1.7s, ghi kết quả lần 2.

Expected result: lần 1 = `8`, lần 2 = `5`.
Actual result: lần 1 = `3` (lấy answer rỗng = 0 làm `num1`: `0+3`); lần 2 = `6` (lấy answer cũ `3` làm `num1`: `3+3`) — code JS gán `num1 = answer` khi `selectedBuild == 7`.
Evidence: `tests/evidence/B7a-step1.jpg` (lần 1 `5+3` → `3`); `tests/evidence/B7b-step2.jpg` (lần 2 `2+3` → `6`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
Critical — cần sửa ngay hoặc trong 01 ngày vì mọi phép tính sau lần đầu đều sai dây chuyền, không có workaround.

## 10. Severity
Serious (weight 5) — kết quả tính năng chính sai và lỗi lan truyền qua các lần tính tiếp theo.

Found by Test Case: TC-ADD-002

Labels: `type: bug`, `module: addition`, `severity: serious`, `priority: critical`, `status: new`, `found-by: test-case`
