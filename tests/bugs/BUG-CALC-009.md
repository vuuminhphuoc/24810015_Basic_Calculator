# [BUG][Calc] Build 9 ẩn number2 và nút Calculate

## 1. Bug ID
BUG-CALC-009

## 2. Function name
Build selection

## 3. Problem summary
Kiểm thử chọn Build `9` rồi thực hiện flow TC-CLEAR-001: `number2Field` và `calculateButton` biến mất nên không nhập số thứ hai và không bấm Calculate được như Prototype.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `9`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `9`.
2. Quan sát form: ô Second number (`number2Field`) và nút `Calculate` (`calculateButton`).
3. Thử nhập 2 số và click `Calculate`.

Expected result: form đầy đủ 2 ô nhập và nút `Calculate` như Prototype, tính toán bình thường.
Actual result: `number2Field` và `calculateButton` bị `hidden + disabled` (code JS trong `buildChanged()` khi Build 9), không thể thực hiện bất kỳ phép tính nào.
Evidence: `tests/evidence/B9-ui.jpg` (Build 9, `number2Field` + `calculateButton` biến mất).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
Critical — cần sửa ngay hoặc trong 01 ngày vì toàn bộ chức năng tính toán tê liệt trên Build 9.

## 10. Severity
Fatal (weight 10) — mất hoàn toàn khả năng sử dụng: không nhập được số thứ hai và không bấm được Calculate, tính năng chính hỏng nặng.

Found by Test Case: TC-CLEAR-001

Labels: `type: bug`, `module: build-selection`, `severity: fatal`, `priority: critical`, `status: new`, `found-by: test-case`
