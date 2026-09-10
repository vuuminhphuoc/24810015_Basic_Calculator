# Test Run — Build 9 (mất element, không thực thi được test tính toán)

- SUT: `https://testsheepnz.github.io/BasicCalculator.html`
- Build: `9` (defect ẩn element trong `buildChanged()`)
- Ngày chạy: 2026-09-09
- Tester: `24810015`
- Test environment: `Chrome/Chromium headless 1280x900, Windows 11, Playwright 1.63`
- Spec: `tests/test-scripts/calc/matrix-sweep.spec.js`, test `B9 elements visible` (số liệu từ `tests/test-runs/raw/sweep.json`, Playwright JSON reporter, workers 1)

Lý do Blocked: ngay sau chọn build 9, `number2Field` và `calculateButton` bị `hidden+disabled` nên không thể nhập số 2 / bấm Calculate cho bất kỳ test tính toán nào (`tests/test-runs/raw/sweep.json`: `toBeVisible #number2Field` fail — `unexpected value "hidden"`).

| Test Case ID | Test title | Expected | Actual | Result | Related Bug |
|---|---|---|---|---|---|
| (check UI) | Ô Second number + nút Calculate hiện sau chọn build 9 | hiện + enabled | cả hai `hidden+disabled` (`tests/evidence/B9-ui.jpg`) | Fail | BUG-CALC-009 |
| TC-ADD-001 | Cộng 10+9 (Add) | ans=`19` | Không thực thi được (thiếu ô số 2 + nút Calculate) | Blocked | BUG-CALC-009 |
| TC-ADD-002 | Cộng tuần tự 5+3 rồi 2+3 | lần 1 ans=`8`, lần 2 ans=`5` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-SUB-001 | Trừ 10−9 (Sub) | ans=`1` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-SUB-002 | Trừ 6−2 (Sub) | ans=`4` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-MUL-001 | Nhân 10×9 (Mul) | ans=`90` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-DIV-001 | Chia 10/4 (Div, integer tắt) | ans=`2.5` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-DIV-002 | Chia cho 0 (10/0) | err=`Divide by zero error!` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-DIV-003 | Phục hồi UI sau lỗi chia 0 | 2 nút enabled lại | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-VAL-001 | Validate số ở ô 1 (Abc+9, Add) | err=`Number 1 is not a number` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-VAL-002 | Validate số ở ô 2 (10+xyz, Add) | err=`Number 2 is not a number` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-CON-001 | Nối chuỗi ab+cd (Concat) | ans=`abcd` | Không thực thi được (thiếu ô số 2 + nút Calculate) | Blocked | BUG-CALC-009 |
| TC-CON-002 | So sánh Add vs Concat (12+34) | Add `46`, Concat `1234` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-INT-001 (unchecked) | Chia 5/2, integer tắt | ans=`2.5` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-INT-001 (checked) | Chia 5/2, integer bật | ans=`2` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |
| TC-CLEAR-001 | Nút Clear xóa kết quả | Clear enabled, sau Clear ans=`` | Không thực thi được (cùng lý do) | Blocked | BUG-CALC-009 |

**Tổng kết: Pass: 0 / Fail: 1 / Blocked: 15 / Tổng: 16 (1 check UI chạy thật + 15 dòng TC bị chặn, gồm TC-INT-001 cả 2 biến thể).**

## Bugs phát hiện/xác nhận trên build này

- `BUG-CALC-009` — Ẩn `number2Field` + `calculateButton` ngay sau chọn build 9, toàn bộ test tính toán bị chặn ở bước nhập liệu. Evidence: `tests/evidence/B9-ui.jpg`.
