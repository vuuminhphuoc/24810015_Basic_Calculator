// One-shot ID swap TC-CALC-* -> per-module IDs. Run: node swap-ids.cjs. Delete after.
const fs = require('fs');
const path = require('path');

const MAP = {
  'TC-CALC-001': 'TC-ADD-001',
  'TC-CALC-012': 'TC-ADD-002',
  'TC-CALC-002': 'TC-SUB-001',
  'TC-CALC-011': 'TC-SUB-002',
  'TC-CALC-003': 'TC-MUL-001',
  'TC-CALC-004': 'TC-DIV-001',
  'TC-CALC-005': 'TC-DIV-002',
  'TC-CALC-006': 'TC-VAL-001',
  'TC-CALC-007': 'TC-VAL-002',
  'TC-CALC-008': 'TC-CON-001',
  'TC-CALC-009': 'TC-CON-002',
  'TC-CALC-010': 'TC-INT-001',
  'TC-CALC-013': 'TC-CLEAR-001',
  'TC-CALC-XXX': 'TC-<MODULE>-XXX',
};

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'node_modules' && e.name !== '.git') walk(p, out); }
    else if (/\.(md|js)$/.test(e.name)) out.push(p);
  }
  return out;
}

const roots = ['tests', '.github'].filter((d) => fs.existsSync(d));
const files = roots.flatMap((d) => walk(d, []));
let changedFiles = 0;
let total = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  let n = 0;
  for (const [a, b] of Object.entries(MAP)) {
    if (s.includes(a)) {
      // plain split/join: safe — no old ID is a substring of another old ID
      const c = s.split(a).length - 1;
      s = s.split(a).join(b);
      n += c;
    }
  }
  if (n > 0) {
    fs.writeFileSync(f, s);
    changedFiles++;
    total += n;
    console.log(`${n}x ${f}`);
  }
}
console.log(`SWAP_DONE files=${changedFiles} replacements=${total}`);
