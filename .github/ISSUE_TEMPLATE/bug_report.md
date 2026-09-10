---
name: Bug Report
about: Dùng khi Test Case fail — bug phải truy ngược được Test Case (theo slide Test report p.5–12)
title: "[BUG][Calc] "
labels: ["type: bug"]
---

# Bug report — 10 trường bắt buộc (đúng thứ tự, mỗi trường một heading `## <số>. <tên trường>`)

## 1. Bug ID
`BUG-CALC-XXX` (lấy từ `tests/bugs-catalog.js`, không tự đặt mã mới).

## 2. Function name
Tên chức năng SUT: Add / Subtract / Multiply / Divide / Concatenate / Integers only / Clear / Build selection / Input validation.

## 3. Problem summary
1 câu = mục tiêu kiểm thử + actual vs expected. Không dùng tính từ cảm tính, phải có số đo cụ thể.

## 4. How to reproduce it
Các bước đánh số + Expected result + Actual result + dòng `Evidence:` trỏ ảnh có thật trong `tests/evidence/`. Ghi rõ environment: URL + build + browser/version + OS.

```md
1. Tại `selectBuild` chọn Build `X`.
2. Nhập First number `...`, Second number `...`, chọn Operation `...`.
3. Click `Calculate`, đợi ~1.7s.

Expected result: ...
Actual result: ...
Evidence: `tests/evidence/<file>.jpg`
```

## 5. Reported by
`24810015`

## 6. Date
`YYYY-MM-DD` (ngày chạy test, ví dụ `2026-09-09`).

## 7. Assign to
`Dev team (SUT bên thứ ba — không sửa được)`

## 8. Status
`New / In-progress / Fixed / Closed / Reopened / Rejected / Deferred / Duplicate`. Giữ `New` nếu SUT bên thứ ba chưa sửa được + ghi 1 dòng giải thích.

## 9. Priority
`Critical` (sửa ngay hoặc trong 01 ngày) / `High` (02–04 ngày) / `Medium` (05–08 ngày) / `Low` (sửa sau) + 1 câu lý do.

## 10. Severity
`Fatal` (weight 10: crash, mất dữ liệu, mất chức năng hoàn toàn) / `Serious` (weight 5: hỏng tính năng chính) / `Medium` (weight 3: lệch nhẹ so với đặc tả) / `Cosmetic` (weight 1: ảnh hưởng rất nhỏ) + 1 câu lý do.

---

## Bug Report Characteristics (slide Test report)
Written, Numbered, Simple, Understandable, Reproducible, Legible, Non-judgmental.

## Ví dụ câu xấu → câu tốt
- ❌ `"It does not work!"` → ✅ `"Error 404: Access denied"` (nêu mã lỗi và nội dung cụ thể thay vì cảm tính).
- ❌ `"System is really slow"` → ✅ `"System does not respond after 3s"` (dùng số đo thời gian thay vì tính từ mơ hồ).
- ❌ `"Calculate bị sai, rất tệ"` → ✅ `"Add 10+9 trả về 109, expected 19 trên Build 2"` (input + actual + expected cụ thể).

## Cuối file (bắt buộc cho audit)
```md
Found by Test Case: TC-<MODULE>-XXX
Labels: `type: bug`, `module: ...`, `severity: ...`, `priority: ...`, `status: new`, `found-by: test-case`
```
