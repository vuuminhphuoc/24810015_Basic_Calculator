# [BUG][Calc] Prototype: lỗi chia 0 treo UI ở trạng thái Calculating

## 1. Bug ID
BUG-CALC-010

## 2. Function name
Divide

## 3. Problem summary
Kiểm thử phép `10 / 0` với Operation `Divide` trên Build Prototype: thông báo `Divide by zero error!` hiện đúng nhưng UI kẹt ở trạng thái `Calculating`, 2 nút bấm bị disabled vĩnh viễn thay vì phục hồi như các nhánh lỗi khác.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `Prototype`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn `Prototype`.
2. Nhập First number `10`, Second number `0`, tại `selectOperationDropdown` chọn `Divide`.
3. Click `Calculate`, đợi ~1.7s, quan sát thông báo lỗi, 2 nút bấm và spinner `calculatingForm`.

Expected result: hiện `Divide by zero error!` và UI phục hồi (2 nút bấm lại được, spinner ẩn).
Actual result: hiện lỗi đúng, nhưng `calculatingForm` hiện mãi, `calculateButton` + `clearButton` disabled vĩnh viễn tới khi reload (code JS: nhánh `num2 == 0` trong `calculate()` dùng `return` mà không gọi `unlockCalculate()`, trong khi nhánh `isNaN` có gọi).
Evidence: `tests/evidence/TC05-div0.jpg` (Prototype, `10/0` → lỗi đỏ `Divide by zero error!`, spinner `Calculating` kẹt).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
High — cần sửa trong 02–04 ngày vì sau 1 lần chia 0, người dùng không thao tác tiếp được nếu không reload trang.

## 10. Severity
Serious (weight 5) — UI của tính năng chính bị khóa sau lỗi (không crash, không mất dữ liệu nên chưa tới Fatal), sai so với hành vi của các nhánh lỗi khác.

Found by Test Case: TC-DIV-002, TC-DIV-003

Labels: `type: bug`, `module: division`, `severity: serious`, `priority: high`, `status: new`, `found-by: test-case`
