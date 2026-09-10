# Test Run — Build 7 (dùng answer cũ thay number1)

- SUT: `https://testsheepnz.github.io/BasicCalculator.html`
- Build: `7` (defect dùng answer cũ thay `number1`)
- Ngày chạy: 2026-09-09
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`
- Spec: `tests/test-scripts/calc/matrix-sweep.spec.js` (số liệu từ `tests/test-runs/raw/sweep.json`, Playwright JSON reporter, workers 1)

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-001 | Cộng 10+9 (Add) | ans=`19`, err=`` | ans=`9` (`number1` bị thay bằng answer cũ rỗng = 0, tức 0+9; `tests/test-runs/raw/sweep.json`: Expected `"19"` Received `"9"`) | Fail | BUG-CALC-007 |
| TC-ADD-002 | Cộng tuần tự 5+3 rồi 2+3 | lần 1 ans=`8`, lần 2 ans=`5` | bước 1 ans=`3` (0+3 thay vì 5+3; `tests/test-runs/raw/sweep.json`: Expected `"8"` Received `"3"`) | Fail | BUG-CALC-007 |
| TC-SUB-001 | Trừ 10−9 (Sub) | ans=`1` | ans=`-9` (0−9; `tests/test-runs/raw/sweep.json`: Expected `"1"` Received `"-9"`) | Fail | BUG-CALC-007 |
| TC-SUB-002 | Trừ 6−2 (Sub) | ans=`4` | ans=`-2` (0−2; `tests/test-runs/raw/sweep.json`: Expected `"4"` Received `"-2"`) | Fail | BUG-CALC-007 |
| TC-MUL-001 | Nhân 10×9 (Mul) | ans=`90` | ans=`0` (0×9; `tests/test-runs/raw/sweep.json`: Expected `"90"` Received `"0"`) | Fail | BUG-CALC-007 |
| TC-DIV-001 | Chia 10/4 (Div, integer tắt) | ans=`2.5` | ans=`0` (0/4; `tests/test-runs/raw/sweep.json`: Expected `"2.5"` Received `"0"`) | Fail | BUG-CALC-007 |
| TC-DIV-002 | Chia cho 0 (10/0) | ans=``, err=`Divide by zero error!` | như Expected (nhánh check `number2 == 0` vẫn bắt lỗi, ans không bị ghi đè) | Pass |  |
| TC-DIV-003 | Phục hồi UI sau lỗi chia 0 | `calculateButton` + `clearButton` enabled lại | cả 2 nút vẫn `disabled` — nhánh chia-0 (vẫn tới được vì check theo `number2`) thiếu `unlock` như Prototype (`tests/test-runs/raw/sweep.json`: `toBeEnabled #calculateButton` fail) | Fail | BUG-CALC-010 |
| TC-VAL-001 | Validate số ở ô 1 (Abc+9, Add) | ans=``, err=`Number 1 is not a number` | ans=`9` (number1 bị thay bằng 0 nên qua mặt check số; `tests/test-runs/raw/sweep.json`: Expected `""` Received `"9"`) | Fail | BUG-CALC-007 |
| TC-VAL-002 | Validate số ở ô 2 (10+xyz, Add) | ans=``, err=`Number 2 is not a number` | như Expected (number2=`xyz` vẫn bị bắt lỗi dù number1 đã bị thay) | Pass |  |
| TC-CON-001 | Nối chuỗi ab+cd (Concat) | ans=`abcd` | ans=`cd` (toán hạng 1 thành chuỗi rỗng; `tests/test-runs/raw/sweep.json`: Expected `"abcd"` Received `"cd"`) | Fail | BUG-CALC-007 |
| TC-CON-002 | So sánh Add vs Concat (12+34) | Add ans=`46`, Concat ans=`1234` | bước Add ans=`34` (0+34 thay vì 12+34; `tests/test-runs/raw/sweep.json`: Expected `"46"` Received `"34"`) | Fail | BUG-CALC-007 |
| TC-INT-001 (unchecked) | Chia 5/2, integer tắt | ans=`2.5` | ans=`0` (0/2; `tests/test-runs/raw/sweep.json`: Expected `"2.5"` Received `"0"`) | Fail | BUG-CALC-007 |
| TC-INT-001 (checked) | Chia 5/2, integer bật | ans=`2` | ans=`0`; `tests/test-runs/raw/sweep.json`: Expected `"2"` Received `"0"` | Fail | BUG-CALC-007 |
| TC-CLEAR-001 | Nút Clear xóa kết quả | Clear enabled, sau Clear ans=`` | như Expected | Pass |  |

**Tổng kết: Pass: 3 / Fail: 12 / Tổng: 15.**

## Bugs phát hiện/xác nhận trên build này

- `BUG-CALC-007` — Dùng answer cũ thay `number1`: ngay lần tính đầu trên trang mới đã sai (`5+3` ra `3` vì answer rỗng = 0), lần sau dùng answer cũ (`3+3=6`). 11/12 ô fail theo cùng cơ chế. Evidence: `tests/evidence/B7a-step1.jpg`, `tests/evidence/B7b-step2.jpg`.
- `BUG-CALC-010` — Lỗi kế thừa từ Prototype: nhánh chia-0 vẫn tới được (check theo `number2`) và thiếu `unlockCalculate` nên kẹt nút. Xác nhận bởi TC-DIV-003 trên build này.
