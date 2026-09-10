# Test Run — Build 2 (đảo Add↔Concat)

- SUT: `https://testsheepnz.github.io/BasicCalculator.html`
- Build: `2` (defect đảo 2 mode Add/Concat)
- Ngày chạy: 2026-09-09
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`
- Spec: `tests/test-scripts/calc/matrix-sweep.spec.js` (số liệu từ `tests/test-runs/raw/sweep.json`, Playwright JSON reporter, workers 1)

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-001 | Cộng 10+9 (Add) | ans=`19`, err=`` | ans=`109` (chạy nhầm sang Concat; `tests/test-runs/raw/sweep.json`: Expected `"19"` Received `"109"`) | Fail | BUG-CALC-002 |
| TC-ADD-002 | Cộng tuần tự 5+3 rồi 2+3 | lần 1 ans=`8`, lần 2 ans=`5` | bước 1 ans=`53` (nối chuỗi thay vì cộng; `tests/test-runs/raw/sweep.json`: Expected `"8"` Received `"53"`) | Fail | BUG-CALC-002 |
| TC-SUB-001 | Trừ 10−9 (Sub) | ans=`1` | như Expected | Pass |  |
| TC-SUB-002 | Trừ 6−2 (Sub) | ans=`4` | như Expected | Pass |  |
| TC-MUL-001 | Nhân 10×9 (Mul) | ans=`90` | như Expected | Pass |  |
| TC-DIV-001 | Chia 10/4 (Div, integer tắt) | ans=`2.5` | như Expected | Pass |  |
| TC-DIV-002 | Chia cho 0 (10/0) | ans=``, err=`Divide by zero error!` | như Expected | Pass |  |
| TC-DIV-003 | Phục hồi UI sau lỗi chia 0 | `calculateButton` + `clearButton` enabled lại | cả 2 nút vẫn `disabled` (`tests/test-runs/raw/sweep.json`: `toBeEnabled #calculateButton` fail) | Fail | BUG-CALC-010 |
| TC-VAL-001 | Validate số ở ô 1 (Abc+9, Add) | ans=``, err=`Number 1 is not a number` | ans=`Abc9`, không báo lỗi (mode Add bị đảo sang Concat nên mất check số; `tests/test-runs/raw/sweep.json`: Expected `""` Received `"Abc9"`) | Fail | BUG-CALC-002 |
| TC-VAL-002 | Validate số ở ô 2 (10+xyz, Add) | ans=``, err=`Number 2 is not a number` | ans=`10xyz`, không báo lỗi (cùng nguyên nhân đảo mode; `tests/test-runs/raw/sweep.json`: Expected `""` Received `"10xyz"`) | Fail | BUG-CALC-002 |
| TC-CON-001 | Nối chuỗi ab+cd (Concat) | ans=`abcd` | ans=`` (chạy nhầm sang Add nên báo lỗi số; `tests/test-runs/raw/sweep.json`: Expected `"abcd"` Received `""`) | Fail | BUG-CALC-002 |
| TC-CON-002 | So sánh Add vs Concat (12+34) | Add ans=`46`, Concat ans=`1234` | bước Add ans=`1234` (đảo mode; `tests/test-runs/raw/sweep.json`: Expected `"46"` Received `"1234"`) | Fail | BUG-CALC-002 |
| TC-INT-001 (unchecked) | Chia 5/2, integer tắt | ans=`2.5` | như Expected | Pass |  |
| TC-INT-001 (checked) | Chia 5/2, integer bật | ans=`2` | như Expected | Pass |  |
| TC-CLEAR-001 | Nút Clear xóa kết quả | Clear enabled, sau Clear ans=`` | như Expected | Pass |  |

**Tổng kết: Pass: 8 / Fail: 7 / Tổng: 15.**

## Bugs phát hiện/xác nhận trên build này

- `BUG-CALC-002` — Đảo Add↔Concat: `10+9` Add ra `109`; `ab+cd` Concat báo lỗi số; validate số mất tác dụng ở mode Add (`Abc9`, `10xyz`). Phát hiện bởi TC-ADD-001, TC-ADD-002, TC-CON-001, TC-CON-002 (trực tiếp) và TC-VAL-001, TC-VAL-002 (gián tiếp qua đảo mode). Evidence: `tests/evidence/B2-add.jpg`.
- `BUG-CALC-010` — Lỗi kế thừa từ Prototype (nhánh chia-0 thiếu `unlockCalculate`, UI kẹt). Xác nhận bởi TC-DIV-003 trên build này.
