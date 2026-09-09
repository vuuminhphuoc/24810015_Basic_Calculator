# [BUG][Calc] Build 2 đảo Add và Concatenate

## Found by Test Case
TC-CALC-001, TC-CALC-008, TC-CALC-009

## Requirement liên quan
FR-CALC-01 + FR-CALC-02

## Severity / Priority
Critical / P0 (sai nghiệp vụ lõi)

## Environment
Build `2`

## Steps to reproduce
1. Nhập `10`, `9`, `Add`, Calculate → expect `19`
2. Nhập `ab`, `cd`, `Concatenate` → expect `abcd`

## Expected result
`19` và `abcd`

## Actual result
Add ra chuỗi (`109`), Concat ra số. JS: `if (selectedBuild==2)` hoán `selection 0↔4`.

## Evidence
Đoạn hoán selection trong `calculate()`.

Labels: `type: bug`, `module: calc`, `severity: critical`
