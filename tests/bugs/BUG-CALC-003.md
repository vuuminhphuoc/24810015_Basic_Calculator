# [BUG][Calc] Build 3 luôn coi Concatenate là số

## 1. Bug ID
BUG-CALC-003

## 2. Function name
Concatenate

## 3. Problem summary
Kiểm thử nối chuỗi First = `ab`, Second = `cd` với Operation `Concatenate`: hệ thống báo `Number 1 is not a number` thay vì trả về `abcd` như đặc tả.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `3`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `3`.
2. Nhập First number `ab`, Second number `cd`, tại `selectOperationDropdown` chọn `Concatenate`.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ô answer hiển thị `abcd`, không có thông báo lỗi.
Actual result: ô answer báo `Number 1 is not a number` (code JS trong `setIfMathematical()` ép `isNumber = true` khi Build 3 nên chuỗi vẫn bị kiểm tra số).
Evidence: `tests/evidence/B3-concat.jpg` (Build 3, `ab+cd` Concat → báo `not a number`).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì chức năng Concatenate mất hoàn toàn trên Build 3.

## 10. Severity
Serious (weight 5) — chức năng chính Concatenate không dùng được, kết quả sai so với đặc tả.

Found by Test Case: TC-CON-001

Labels: `type: bug`, `module: concatenation`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
