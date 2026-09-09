# Traceability Matrix — BasicCalculator

| Requirement (suy ra) | Test Case | Result (Prototype) | Bug Issue | Status |
|---|---|---|---|---|
| FR-CALC-01: Add/Sub/Mul/Div số học | TC-CALC-001, 002, 003, 004, 011 | Pass |  | Done |
| FR-CALC-02: Concatenate chuỗi | TC-CALC-008, 009 | Pass |  | Done |
| FR-CALC-03: Integers only | TC-CALC-004, 010 | Pass | BUG-CALC-004 (Build 4) | Ready for Retest |
| FR-CALC-04: Chia 0 báo lỗi | TC-CALC-005 | Pass | BUG-CALC-006 (Build 6) | Ready for Retest |
| FR-CALC-05: Validate số | TC-CALC-006, 007 | Pass | BUG-CALC-001 (Build 1), BUG-CALC-003 (Build 3) | Ready for Retest |
| FR-CALC-06: Calculate/Clear/Answer | TC-CALC-012, 013 | Pass | BUG-CALC-005 (Build 5), BUG-CALC-007 (Build 7) | Ready for Retest |
| FR-CALC-07: Build selector | Toàn bộ (replay) | Pass trên Prototype | BUG-CALC-002, 008, 009 | Ready for Retest |

Coverage: mọi FR suy ra đều có ≥1 TC. Defect traceability: mỗi Bug truy ngược được TC phát hiện. Regression: chạy lại 13 TC khi fix.
