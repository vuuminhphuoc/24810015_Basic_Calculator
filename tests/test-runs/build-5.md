# Test Run — Build 5 (hỏng Clear)

- SUT: `https://testsheepnz.github.io/BasicCalculator.html`
- Build: `5` (defect disable nút Clear trong `buildChanged()`)
- Ngày chạy: 2026-09-09
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`
- Spec: `tests/test-scripts/calc/matrix-sweep.spec.js` (số liệu từ `tests/test-runs/raw/sweep.json`, Playwright JSON reporter, workers 1)

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| TC-ADD-001 | Cộng 10+9 (Add) | ans=`19`, err=`` | như Expected | Pass |  |
| TC-ADD-002 | Cộng tuần tự 5+3 rồi 2+3 | lần 1 ans=`8`, lần 2 ans=`5` | như Expected | Pass |  |
| TC-SUB-001 | Trừ 10−9 (Sub) | ans=`1` | như Expected | Pass |  |
| TC-SUB-002 | Trừ 6−2 (Sub) | ans=`4` | như Expected | Pass |  |
| TC-MUL-001 | Nhân 10×9 (Mul) | ans=`90` | như Expected | Pass |  |
| TC-DIV-001 | Chia 10/4 (Div, integer tắt) | ans=`2.5` | như Expected | Pass |  |
| TC-DIV-002 | Chia cho 0 (10/0) | ans=``, err=`Divide by zero error!` | như Expected | Pass |  |
| TC-DIV-003 | Phục hồi UI sau lỗi chia 0 | `calculateButton` + `clearButton` enabled lại | cả 2 nút vẫn `disabled` (`tests/test-runs/raw/sweep.json`: `toBeEnabled #calculateButton` fail) | Fail | BUG-CALC-010 |
| TC-VAL-001 | Validate số ở ô 1 (Abc+9, Add) | ans=``, err=`Number 1 is not a number` | như Expected | Pass |  |
| TC-VAL-002 | Validate số ở ô 2 (10+xyz, Add) | ans=``, err=`Number 2 is not a number` | như Expected | Pass |  |
| TC-CON-001 | Nối chuỗi ab+cd (Concat) | ans=`abcd` | như Expected | Pass |  |
| TC-CON-002 | So sánh Add vs Concat (12+34) | Add ans=`46`, Concat ans=`1234` | như Expected | Pass |  |
| TC-INT-001 (unchecked) | Chia 5/2, integer tắt | ans=`2.5` | như Expected | Pass |  |
| TC-INT-001 (checked) | Chia 5/2, integer bật | ans=`2` | như Expected | Pass |  |
| TC-CLEAR-001 | Nút Clear xóa kết quả | Clear enabled, sau Clear ans=`` | Pass trong sweep (nuance bên dưới) | Pass |  |

**Tổng kết: Pass: 14 / Fail: 1 / Tổng: 15.**

## Bugs phát hiện/xác nhận trên build này

- `BUG-CALC-010` — Lỗi kế thừa từ Prototype (nhánh chia-0 thiếu `unlockCalculate`, UI kẹt). Xác nhận bởi TC-DIV-003 trong sweep.
- `BUG-CALC-005` — Nút Clear bị `disabled=true` ngay sau chọn build (trong `buildChanged()`). Sweep TC-CLEAR-001 vẫn Pass vì spec assert nút Clear sau một chu kỳ `calculate()` → `unlockCalculate()` đã mở lại nút; muốn bắt defect này phải assert trạng thái nút ngay sau chọn build, trước khi bấm Calculate. Evidence: `tests/evidence/B5-state.jpg`.

Nuance trung thực: TC-CLEAR-001 của sweep không bắt được BUG-CALC-005 do thứ tự assert; defect là có thật ở user-path (vừa chọn build, chưa bấm gì đã thấy nút Clear mờ).
