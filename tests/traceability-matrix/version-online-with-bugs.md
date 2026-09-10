# Traceability Matrix — BasicCalculator

Oracle: Build `Prototype`, trừ TC-DIV-003 (Fail ngay cả trên Prototype → BUG-CALC-010).

| Requirement (suy ra) | Test Case | Result (Prototype) | Bug Issue | Status |
|---|---|---|---|---|
| FR-CALC-01: Add/Sub/Mul/Div số học | TC-ADD-001 | Pass |  | Done |
| FR-CALC-01 | TC-SUB-001 | Pass |  | Done |
| FR-CALC-01 | TC-SUB-002 | Pass | BUG-CALC-008 (Build 8) | Ready for Retest |
| FR-CALC-01 | TC-MUL-001 | Pass |  | Done |
| FR-CALC-01 + 03 | TC-DIV-001 | Pass | BUG-CALC-004 (Build 4) | Ready for Retest |
| FR-CALC-02: Concatenate chuỗi | TC-CON-001 | Pass | BUG-CALC-002 (Build 2), BUG-CALC-003 (Build 3) | Ready for Retest |
| FR-CALC-01 + 02 | TC-CON-002 | Pass | BUG-CALC-002 (Build 2) | Ready for Retest |
| FR-CALC-03: Integers only | TC-INT-001 | Pass | BUG-CALC-004 (Build 4) | Ready for Retest |
| FR-CALC-04: Chia 0 báo lỗi | TC-DIV-002 | Pass | BUG-CALC-006 (Build 6), BUG-CALC-010 (Prototype) | Ready for Retest |
| FR-CALC-04 + 06: UI phục hồi sau lỗi | TC-DIV-003 | Fail | BUG-CALC-010 (Prototype) | Open |
| FR-CALC-05: Validate số | TC-VAL-001 | Pass | BUG-CALC-001 (Build 1) | Ready for Retest |
| FR-CALC-05: Validate số | TC-VAL-002 | Pass | BUG-CALC-001 (Build 1) | Ready for Retest |
| FR-CALC-06: Calculate/Clear/Answer | TC-ADD-002 | Pass | BUG-CALC-007 (Build 7) | Ready for Retest |
| FR-CALC-06 | TC-CLEAR-001 | Pass | BUG-CALC-005 (Build 5), BUG-CALC-009 (Build 9) | Ready for Retest |
| FR-CALC-07: Build selector | replay toàn bộ | Pass trên Prototype | BUG-CALC-002, 008, 009 | Ready for Retest |

Coverage: 7/7 FR có TC; 14 TC (13 Pass + 1 Fail thật); 10 bugs đều truy ngược được TC.
Full sweep tự động: `tests/test-scripts/calc/matrix-sweep.spec.js` (14 TC × builds 0–8 + check Build 9).
