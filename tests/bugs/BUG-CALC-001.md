# [BUG][Calc] Build 1 không validate số

## 1. Bug ID
BUG-CALC-001

## 2. Function name
Input validation (Add)

## 3. Problem summary
Kiểm thử nhập First number = `Abc`, Second number = `9` với Operation `Add`: hệ thống trả về `NaN` thay vì báo `Number 1 is not a number` như đặc tả.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `1`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `1`.
2. Nhập First number `Abc`, Second number `9`, tại `selectOperationDropdown` chọn `Add`.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ô answer hiển thị `Number 1 is not a number`.
Actual result: ô answer hiển thị `NaN`, không có thông báo lỗi (code JS bỏ qua nhánh `isNaN(num1)` khi `selectedBuild == 1`).
Evidence: `tests/evidence/B1-badn1.jpg` (Build 1, `Abc+9` → `NaN`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì nhập liệu không hợp lệ là đường dùng thường xuyên, kết quả `NaN` gây hiểu lầm cho người dùng.

## 10. Severity
Serious (weight 5) — kiểm tra dữ liệu đầu vào của tính năng chính bị vô hiệu hóa, kết quả tính toán sai so với đặc tả.

Found by Test Case: TC-VAL-001, TC-VAL-002

Labels: `type: bug`, `module: input-validation`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
