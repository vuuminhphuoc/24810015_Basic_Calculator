# [BUG][Calc] Build 5 disable nút Clear

## 1. Bug ID
BUG-CALC-005

## 2. Function name
Clear

## 3. Problem summary
Kiểm thử chức năng Clear sau khi tính ra kết quả: nút `Clear` ở trạng thái `disabled` nên không xóa được answer/error như đặc tả của `clearAnswer()`.

## 4. How to reproduce it
Environment: `https://testsheepnz.github.io/BasicCalculator.html`, Build `5`, Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63.

1. Tại `selectBuild` chọn Build `5`.
2. Nhập 2 số bất kỳ, chọn Operation `Add`, click `Calculate`, đợi ~1.7s để có kết quả.
3. Quan sát và click nút `Clear`.

Expected result: nút `Clear` ở trạng thái enabled; sau khi click thì answer rỗng, error rỗng, checkbox uncheck.
Actual result: nút `Clear` bị `disabled` ngay sau khi chọn build (code JS trong `buildChanged()` gán `clearButton.disabled = true`), không click được.
Evidence: `tests/evidence/B5-state.jpg` (Build 5, nút Clear `disabled` ngay sau chọn build).

## 5. Reported by
24810015

## 6. Date
2026-09-09

## 7. Assign to
Dev team (SUT bên thứ ba — không sửa được)

## 8. Status
New — SUT là trang của bên thứ ba (`testsheepnz.github.io`), tester không có quyền sửa code nên bug giữ trạng thái New cho tới khi chủ trang khắc phục.

## 9. Priority
Medium — sửa trong 05–08 ngày vì chức năng Clear là chức năng phụ, người dùng có workaround là reload trang.

## 10. Severity
Medium (weight 3) — trạng thái control sai so với đặc tả, chức năng phụ mất nhưng các phép tính vẫn đúng.

Found by Test Case: TC-CLEAR-001

Labels: `type: bug`, `module: clear`, `severity: medium`, `priority: medium`, `status: new`, `found-by: test-case`
