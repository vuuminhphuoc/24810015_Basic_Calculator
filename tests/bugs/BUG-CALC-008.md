# [BUG][Calc] Build 8 đảo number1 và number2

## 1. Bug ID
BUG-CALC-008

## 2. Function name
Subtract

## 3. Problem summary
Kiểm thử phép `6 - 2` với Operation `Subtract`: hệ thống trả về `-4` thay vì `4` như đặc tả do đảo thứ tự 2 toán hạng.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `8`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `8`.
2. Nhập First number `6`, Second number `2`, tại `selectOperationDropdown` chọn `Subtract`.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ô answer hiển thị `4`.
Actual result: ô answer hiển thị `-4` (tính `2-6`; code JS hoán đổi `num1/num2` khi `selectedBuild == 8`; lỗi chỉ lộ với phép không giao hoán như Subtract/Divide).
Evidence: `tests/evidence/B8-sub.jpg` (Build 8, `6-2` → `-4`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì phép trừ cho kết quả sai dấu, người dùng không phát hiện nếu không đối chiếu.

## 10. Severity
Serious (weight 5) — thứ tự toán hạng của tính năng chính bị đảo, kết quả sai so với đặc tả.

Found by Test Case: TC-SUB-002

Labels: `type: bug`, `module: subtraction`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
