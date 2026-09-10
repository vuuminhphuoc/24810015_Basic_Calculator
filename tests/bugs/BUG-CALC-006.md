# [BUG][Calc] Build 6 không check chia 0

## 1. Bug ID
BUG-CALC-006

## 2. Function name
Divide

## 3. Problem summary
Kiểm thử phép `10 / 0` với Operation `Divide`: hệ thống trả về `Infinity` thay vì báo `Divide by zero error!` như đặc tả.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `6`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `6`.
2. Nhập First number `10`, Second number `0`, tại `selectOperationDropdown` chọn `Divide`.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ô answer hiển thị `Divide by zero error!`.
Actual result: ô answer hiển thị `Infinity`, không có thông báo lỗi (code JS chỉ kiểm tra `num2 == 0` khi `selectedBuild != 6`).
Evidence: `tests/evidence/B6-div0.jpg` (Build 6, `10/0` → `Infinity`, không báo lỗi).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì phép chia cho 0 là case chuẩn của tính năng Divide, kết quả `Infinity` gây hiểu lầm.

## 10. Severity
Serious (weight 5) — nhánh xử lý lỗi của tính năng chính bị bỏ qua, kết quả sai so với đặc tả.

Found by Test Case: TC-DIV-002

Labels: `type: bug`, `module: division`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
