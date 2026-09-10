# [BUG][Calc] Build 2 đảo Add và Concatenate

## 1. Bug ID
BUG-CALC-002

## 2. Function name
Add / Concatenate

## 3. Problem summary
Kiểm thử phép `10 + 9` với Operation `Add`: hệ thống trả về `109` thay vì `19` như đặc tả (đồng thời `Concatenate` trả về kết quả số thay vì chuỗi).

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `2`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `2`.
2. Nhập First number `10`, Second number `9`, tại `selectOperationDropdown` chọn `Add`.
3. Click `Calculate`, đợi ~1.7s.
4. Lặp lại với First number `ab`, Second number `cd`, Operation `Concatenate`.

Expected result: `Add` trả về `19`; `Concatenate` với `ab + cd` trả về `abcd`.
Actual result: `Add` trả về `109` (cộng chuỗi thay vì cộng số); `Concatenate` trả về kết quả số (code JS hoán đổi `selection 0↔4` khi `selectedBuild == 2`).
Evidence: `tests/evidence/B2-add.jpg` (Build 2, `10+9` Add → `109`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
Critical — cần sửa ngay hoặc trong 01 ngày vì phép Add là nghiệp vụ lõi, sai kết quả trên diện rộng (3 test case fail).

## 10. Severity
Serious (weight 5) — hai chức năng tính toán chính cho kết quả sai hoàn toàn so với đặc tả.

Found by Test Case: TC-ADD-001, TC-CON-001, TC-CON-002

Labels: `type: bug`, `module: addition, concatenation`, `severity: serious`, `priority: critical`, `status: new`, `found-by: test-case`
