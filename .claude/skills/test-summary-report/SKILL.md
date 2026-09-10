---
name: test-summary-report
description: Skill bổ sung (ngoài 4 skill bắt buộc) — tổng hợp Test Summary Report cho bài Website NodeJS theo cấu trúc slide Test report.
---

# Skill BỔ SUNG (ngoài 4 skill bắt buộc) — Test Summary Report cho bài Website NodeJS

> Đây KHÔNG phải 1 trong 4 skill bắt buộc của giáo viên. Skill bổ sung này chỉ dùng
> cho bài **Website NodeJS** (không dùng cho bài Basic Calculator).

Nguồn: `Slides/En/Test report.pdf` (Test summary report tr.17–20).

## Cấu trúc Test Summary Report (slide tr.17)

Báo cáo `tests/test-summary/` gồm đúng 4 phần:

1. **Summary** — tóm tắt hoạt động test: phạm vi, môi trường, tổng TC, tổng dòng thực thi
   (TC × build), số `Done/Open/Blocked/Chưa chạy`.
2. **Test Case result report** — kết quả test case: pass-fail-blocked theo module/build,
   coverage (requirement nào đã test, TC nào cần regression), link evidence
   (`tests/evidence/index.md`), Playwright (`npx playwright test`), matrix (Skill 4).
3. **Defect Report** — thống kê defect, gồm 3 bảng:
   - **Statistics bug/defect by functions** (slide tr.18): đếm bug theo chức năng
     (Login, Logout, Account list, Add account, Delete account...).
   - **Statistics by Defect Type** (slide tr.19): đếm theo loại defect
     (Business logic, Coding logic, Coding standard, Data-Database integrity,
     Design issue, Feature missing, Functionality, Performance, Security...).
   - **Statistics by Defect Severity** (slide tr.20): đếm theo Severity kèm trọng số.
4. **Open point** — điểm còn mở: bug chưa fix, TC chưa chạy, rủi ro, việc cần làm tiếp.

## Thống kê defect có trọng số W.def (slide tr.12 + tr.19)

Trọng số Severity: Fatal = 10, Serious = 5, Medium = 3, Cosmetic = 1.

```text
W.def = Fatal×10 + Serious×5 + Medium×3 + Cosmetic×1
```

Mỗi dòng bảng Defect Type ghi `Fatal | Serious | Medium | Cosmetic | Total (W.def) | %`,
cột `%` = W.def dòng đó / tổng W.def. Ví dụ slide: Business logic
`1 | 9 | 332 | 31 | 1082 | 58.7%`.

## Checklist trước khi nộp

`tests/test-cases/` đủ template 12 mục (Skill 1); mã `TC-[MODULE]-[NUMBER]`; có test-run theo sprint;
bug có `Found by Test Case`; run ghi `Related Bug` khi fail; đủ labels
`type/module/result/severity/priority/status`; có board; bug chỉ close sau retest; có matrix.
