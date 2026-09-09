# Evidence — ảnh chụp live trên SUT (2026-09-09, headless Chromium 1280x900)

Mỗi ảnh: chọn `selectBuild` + `selectOperationDropdown` thật, nhập 2 ô số thật, click `Calculate` thật, đợi ~1.7s rồi chụp vùng form.

## Prototype (Build = Prototype)

| File | Test Case | Nội dung ảnh |
|---|---|---|
| TC01-add.jpg | TC-ADD-001 | `10+9` Add → `19` |
| TC02-sub.jpg | TC-SUB-001 | `10-9` Sub → `1` |
| TC03-mul.jpg | TC-MUL-001 | `10*9` → `90` |
| TC04-div.jpg | TC-DIV-001 | `10/4` → `2.5` |
| TC05-div0.jpg | TC-DIV-002 | `10/0` → `Divide by zero error!` đỏ |
| TC06-badn1.jpg | TC-VAL-001 | `Abc+9` → `Number 1 is not a number` |
| TC07-badn2.jpg | TC-VAL-002 | `10+xyz` → `Number 2 is not a number` |
| TC08-concat.jpg | TC-CON-001 | `ab+cd` → `abcd`, integer bị ẩn |
| TC09a-add.jpg | TC-CON-002 | `12+34` Add → `46` |
| TC09b-concat.jpg | TC-CON-002 | `12+34` Concat → `1234` |
| TC10a-off.jpg | TC-INT-001 | `5/2` unchecked → `2.5` |
| TC10b-on.jpg | TC-INT-001 | `5/2` checked → `2` |
| TC11-sub62.jpg | TC-SUB-002 | `6-2` → `4` |
| TC12a-step1.jpg | TC-ADD-002 | lần 1 `5+3` → `8` |
| TC12b-step2.jpg | TC-ADD-002 | lần 2 `2+3` → `5` |
| TC13-clear.jpg | TC-CLEAR-001 | sau Clear: answer rỗng, uncheck |

## Builds lỗi (Fail live, đối chiếu `tests/bugs/`)

| File | Bug | Nội dung ảnh |
|---|---|---|
| B1-badn1.jpg | BUG-CALC-001 | Build 1 `Abc+9` → `NaN`, không báo lỗi |
| B2-add.jpg | BUG-CALC-002 | Build 2 `10+9` Add → `109` |
| B3-concat.jpg | BUG-CALC-003 | Build 3 `ab+cd` Concat → báo `not a number` |
| B4-div.jpg | BUG-CALC-004 | Build 4 checkbox integer bị `disabled` |
| B5-state.jpg | BUG-CALC-005 | Build 5 nút Clear `disabled` ngay sau chọn build |
| B6-div0.jpg | BUG-CALC-006 | Build 6 `10/0` → `Infinity`, không báo lỗi |
| B7a-step1.jpg | BUG-CALC-007 | Build 7 `5+3` → `3` (lấy answer rỗng = 0) |
| B7b-step2.jpg | BUG-CALC-007 | Build 7 `2+3` → `6` (dùng answer cũ 3) |
| B8-sub.jpg | BUG-CALC-008 | Build 8 `6-2` → `-4` (đảo toán hạng) |
| B9-ui.jpg | BUG-CALC-009 | Build 9 `number2Field` + `calculateButton` biến mất |
