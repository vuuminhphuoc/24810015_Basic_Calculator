# Test Run — Build 8 (đảo toán hạng number1/number2)

- SUT: `https://testsheepnz.github.io/BasicCalculator.html`
- Build: `8` (defect đảo toán hạng)
- Ngày chạy: 2026-09-09
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`
- Spec: `tests/test-scripts/calc/matrix-sweep.spec.js` (số liệu từ `tests/test-runs/raw/sweep.json`, Playwright JSON reporter, workers 1)

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-001 | Cộng 10+9 (Add) | ans=`19`, err=`` | như Expected (cộng có tính giao hoán nên không lộ defect) | Pass |  |
| TC-ADD-002 | Cộng tuần tự 5+3 rồi 2+3 | lần 1 ans=`8`, lần 2 ans=`5` | như Expected (cùng lý do giao hoán) | Pass |  |
| TC-SUB-001 | Trừ 10−9 (Sub) | ans=`1` | ans=`-1` (9−10; `tests/test-runs/raw/sweep.json`: Expected `"1"` Received `"-1"`) | Fail | BUG-CALC-008 |
| TC-SUB-002 | Trừ 6−2 (Sub) | ans=`4` | ans=`-4` (2−6; `tests/test-runs/raw/sweep.json`: Expected `"4"` Received `"-4"`) | Fail | BUG-CALC-008 |
| TC-MUL-001 | Nhân 10×9 (Mul) | ans=`90` | như Expected (nhân có tính giao hoán nên không lộ defect) | Pass |  |
| TC-DIV-001 | Chia 10/4 (Div, integer tắt) | ans=`2.5` | ans=`0.4` (4/10; `tests/test-runs/raw/sweep.json`: Expected `"2.5"` Received `"0.4"`) | Fail | BUG-CALC-008 |
| TC-DIV-002 | Chia cho 0 (10/0) | ans=``, err=`Divide by zero error!` | ans=`0`, err=`` (đảo thành 0/10 nên không vào nhánh chia-0; `tests/test-runs/raw/sweep.json`: Expected `""` Received `"0"`) | Fail | BUG-CALC-008 |
| TC-DIV-003 | Phục hồi UI sau lỗi chia 0 | `calculateButton` + `clearButton` enabled lại | như Expected (Pass vì build này không vào nhánh chia-0 nên không kẹt nút) | Pass |  |
| TC-VAL-001 | Validate số ở ô 1 (Abc+9, Add) | ans=``, err=`Number 1 is not a number` | ans=`` khớp, nhưng err=`Number 2 is not a number` (đảo ô nên báo nhầm ô; `tests/test-runs/raw/sweep.json`: Expected `"Number 1 is not a number"` Received `"Number 2 is not a number"`) | Fail | BUG-CALC-008 |
| TC-VAL-002 | Validate số ở ô 2 (10+xyz, Add) | ans=``, err=`Number 2 is not a number` | ans=`` khớp, nhưng err=`Number 1 is not a number` (báo nhầm ô; `tests/test-runs/raw/sweep.json` tương ứng) | Fail | BUG-CALC-008 |
| TC-CON-001 | Nối chuỗi ab+cd (Concat) | ans=`abcd` | ans=`cdab` (`tests/test-runs/raw/sweep.json`: Expected `"abcd"` Received `"cdab"`) | Fail | BUG-CALC-008 |
| TC-CON-002 | So sánh Add vs Concat (12+34) | Add ans=`46`, Concat ans=`1234` | bước Add `46` khớp (giao hoán), bước Concat ans=`3412` (`tests/test-runs/raw/sweep.json`: Expected `"1234"` Received `"3412"`) | Fail | BUG-CALC-008 |
| TC-INT-001 (unchecked) | Chia 5/2, integer tắt | ans=`2.5` | ans=`0.4` (2/5; `tests/test-runs/raw/sweep.json`: Expected `"2.5"` Received `"0.4"`) | Fail | BUG-CALC-008 |
| TC-INT-001 (checked) | Chia 5/2, integer bật | ans=`2` | ans=`0` (0.4 làm tròn xuống; `tests/test-runs/raw/sweep.json`: Expected `"2"` Received `"0"`) | Fail | BUG-CALC-008 |
| TC-CLEAR-001 | Nút Clear xóa kết quả | Clear enabled, sau Clear ans=`` | như Expected | Pass |  |

**Tổng kết: Pass: 5 / Fail: 10 / Tổng: 15.**

## Bugs phát hiện/xác nhận trên build này

- `BUG-CALC-008` — Đảo toán hạng: `6−2` ra `−4`, `10/4` ra `0.4`, `ab+cd` ra `cdab`, validate báo nhầm ô (`Abc+9` báo lỗi ô 2). Cả 10 ô fail theo cùng cơ chế. Evidence: `tests/evidence/B8-sub.jpg`.
