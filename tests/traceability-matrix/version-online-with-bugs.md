# Traceability Matrix — BasicCalculator

| Requirement (suy ra) | Test Case | Result (Prototype) | Bug Issue | Status |
|---|---|---|---|---|
| FR-CALC-01: Add/Sub/Mul/Div số học | TC-ADD-001, 002, 003, 004, 011 | Pass |  | Done |
| FR-CALC-02: Concatenate chuỗi | TC-CON-001, 009 | Pass |  | Done |
| FR-CALC-03: Integers only | TC-DIV-001, 010 | Pass | BUG-CALC-004 (Build 4) | Ready for Retest |
| FR-CALC-04: Chia 0 báo lỗi | TC-DIV-002 | Pass | BUG-CALC-006 (Build 6) | Ready for Retest |
| FR-CALC-05: Validate số | TC-VAL-001, 007 | Pass | BUG-CALC-001 (Build 1), BUG-CALC-003 (Build 3) | Ready for Retest |
| FR-CALC-06: Calculate/Clear/Answer | TC-ADD-002, 013 | Pass | BUG-CALC-005 (Build 5), BUG-CALC-007 (Build 7) | Ready for Retest |
| FR-CALC-07: Build selector | Toàn bộ (replay) | Pass trên Prototype | BUG-CALC-002, 008, 009 | Ready for Retest |

Coverage: mọi FR suy ra đều có ≥1 TC. Defect traceability: mỗi Bug truy ngược được TC phát hiện. Regression: chạy lại 13 TC khi fix.
