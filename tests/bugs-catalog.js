// Bugs catalog — nguồn chân lý duy nhất cho Bug ID.
// Mỗi defect đã live-verify trên SUT ngày 2026-09-09 (headless Chromium).
// Matrix và test-run đối chiếu vào đây: mọi dòng Fail phải có Bug,
// mọi Bug phải xuất hiện ≥1 dòng (xem skill traceability-matrix).
// Thang severity (theo slide Test report): Fatal (weight 10) / Serious (weight 5) / Medium (weight 3) / Cosmetic (weight 1).
// Chạy: node tests/bugs-catalog.js  → kiểm tra file bug tồn tại + in bảng.
const fs = require('fs');
const path = require('path');

const SEVERITY_WEIGHT = { Fatal: 10, Serious: 5, Medium: 3, Cosmetic: 1 };

const BUGS = [
  { id: 'BUG-CALC-001', build: 1, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-VAL-001', 'TC-VAL-002'], symptom: 'Bỏ check số: Abc+9 ra NaN, không báo lỗi' },
  { id: 'BUG-CALC-002', build: 2, severity: 'Serious', weight: 5, priority: 'Critical', foundBy: ['TC-ADD-001', 'TC-CON-001', 'TC-CON-002'], symptom: 'Đảo Add↔Concat: 10+9 ra 109' },
  { id: 'BUG-CALC-003', build: 3, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-CON-001'], symptom: 'Luôn coi là số: Concat ab+cd báo not a number' },
  { id: 'BUG-CALC-004', build: 4, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-DIV-001', 'TC-INT-001'], symptom: 'Khóa integer: checkbox disabled' },
  { id: 'BUG-CALC-005', build: 5, severity: 'Medium', weight: 3, priority: 'Medium', foundBy: ['TC-CLEAR-001'], symptom: 'Nút Clear disabled ngay sau chọn build' },
  { id: 'BUG-CALC-006', build: 6, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-DIV-002'], symptom: 'Không check chia 0: 10/0 ra Infinity' },
  { id: 'BUG-CALC-007', build: 7, severity: 'Serious', weight: 5, priority: 'Critical', foundBy: ['TC-ADD-002'], symptom: 'Dùng answer cũ thay number1: 5+3→3, 2+3→6' },
  { id: 'BUG-CALC-008', build: 8, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-SUB-002'], symptom: 'Đảo toán hạng: 6-2 ra -4' },
  { id: 'BUG-CALC-009', build: 9, severity: 'Fatal', weight: 10, priority: 'Critical', foundBy: ['TC-CLEAR-001'], symptom: 'Ẩn number2Field + calculateButton' },
  { id: 'BUG-CALC-010', build: 0, severity: 'Serious', weight: 5, priority: 'High', foundBy: ['TC-DIV-002', 'TC-DIV-003'], symptom: 'Prototype: nhánh chia-0 thiếu unlockCalculate, UI kẹt Calculating' },
];

if (require.main === module) {
  const dir = path.join(__dirname, 'bugs');
  let ok = true;
  for (const b of BUGS) {
    const f = path.join(dir, `${b.id}.md`);
    if (!fs.existsSync(f)) { console.error(`MISSING FILE: ${f}`); ok = false; continue; }
    const body = fs.readFileSync(f, 'utf8');
    for (const tc of b.foundBy) {
      if (!body.includes(tc)) { console.error(`${b.id}: thiếu link ${tc} trong file bug`); ok = false; }
    }
    if (b.weight !== SEVERITY_WEIGHT[b.severity]) { console.error(`${b.id}: weight ${b.weight} không khớp severity ${b.severity}`); ok = false; }
  }
  console.log(`bugs: ${BUGS.length}, builds lỗi: ${new Set(BUGS.map((b) => b.build)).size}`);
  const wDef = BUGS.reduce((s, b) => s + b.weight, 0);
  const bySev = {};
  for (const b of BUGS) bySev[b.severity] = (bySev[b.severity] || 0) + 1;
  console.log(`W.def (weighted defect): ${wDef}`);
  console.log(`Severity: ${Object.entries(bySev).map(([k, v]) => `${k}=${v}`).join(', ')}`);
  console.table(BUGS.map((b) => ({ id: b.id, build: b.build, severity: b.severity, weight: b.weight, priority: b.priority, foundBy: b.foundBy.join(', ') })));
  console.log(ok ? 'CATALOG_OK' : 'CATALOG_FAIL');
  process.exit(ok ? 0 : 1);
}

module.exports = { BUGS };
