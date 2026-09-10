# [BUG][Calc] Build 4 khóa Integers only

## 1. Bug ID
BUG-CALC-004

## 2. Function name
Integers only (Divide)

## 3. Problem summary
Kiểm thử phép `10 / 4` với Operation `Divide` khi checkbox Integers only để unchecked: hệ thống trả về `2` thay vì `2.5` như đặc tả.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `4`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `4`.
2. Nhập First number `10`, Second number `4`, tại `selectOperationDropdown` chọn `Divide`, giữ checkbox Integers only ở trạng thái unchecked.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ô answer hiển thị `2.5`, checkbox vẫn chỉnh được (enabled, unchecked).
Actual result: ô answer hiển thị `2` (luôn `parseInt`); checkbox bị `disabled` và ép checked (code JS trong `setFieldStatus()` khóa checkbox khi Build 4 và `isNumber`).
Evidence: `tests/evidence/B4-div.jpg` (Build 4, checkbox integer bị `disabled`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì kết quả phép chia bị làm tròn sai trên mọi input thập phân.

## 10. Severity
Serious (weight 5) — tùy chọn Integers only của tính năng chính bị vô hiệu hóa, kết quả tính toán sai (`2.5` thành `2`).

Found by Test Case: TC-DIV-001, TC-INT-001

Labels: `type: bug`, `module: integer-toggle`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
