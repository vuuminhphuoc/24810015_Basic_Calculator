# Đặc tả yêu cầu — BasicCalculator (suy ra, không phải SRS chính thức)

Nguồn: đoạn Instructions trên trang `https://testsheepnz.github.io/BasicCalculator.html`
+ hành vi quan sát live của Build `Prototype` (lấy làm oracle) ngày 2026-09-09.
GUI: xem ảnh `tests/evidence/TC01-add.jpg` (toàn form).

## FR-CALC-01 — Bốn phép toán số học
Add / Subtract / Multiply / Divide với 2 toán hạng số. Trang kiểm tra input là số
khi chọn các phép này. Ví dụ: `10+9=19`, `10-9=1`, `10*9=90`, `10/4=2.5`.

## FR-CALC-02 — Concatenate chuỗi
Coi 2 ô nhập là chuỗi, nối lại, KHÔNG kiểm tra số. Ví dụ `ab+cd=abcd`, `12+34=1234`.

## FR-CALC-03 — Integers only
Checkbox chỉ dùng cho phép số học; khi check, đáp án bị cắt phần lẻ (`parseInt`:
`5/2 → 2`). Khi chọn Concatenate, checkbox bị ẩn + disabled.

## FR-CALC-04 — Chia cho 0
Báo lỗi nguyên văn `Divide by zero error!`, không tính toán.

## FR-CALC-05 — Validate số
First/Second không phải số khi làm toán số học → báo nguyên văn
`Number 1 is not a number` / `Number 2 is not a number`, không tính toán.

## FR-CALC-06 — Calculate / Clear / Answer
- `Calculate` tính từ đúng 2 ô nhập hiện tại, hiện đáp án ở ô Answer (readonly).
- `Clear` xóa đáp án + thông báo lỗi + bỏ check Integers only.
- Mỗi ô nhập `maxlength=10`.

## FR-CALC-07 — Chọn Build
Dropdown 10 mục: `Prototype` (đúng hoàn toàn, oracle) + builds `1–9`.
(Trang ghi builds 1–8 lỗi; quan sát live thấy build 9 cũng lỗi: ẩn Second number + Calculate.)

## Trace
FR-CALC-0X ↔ TC trong `tests/test-cases/index.md` ↔ Bug trong `tests/bugs-catalog.js`.
