import fs from 'fs';
import path from 'path';

const rules = [
  { regex: /\bbg-white\b/g, replace: 'bg-[#050B14]/80 backdrop-blur-xl border border-[#00F0FF]/20' },
  { regex: /\bbg-gray-50\b/g, replace: 'bg-white/5' },
  { regex: /\btext-gray-900\b/g, replace: 'text-white' },
  { regex: /\btext-gray-700\b/g, replace: 'text-gray-200' },
  { regex: /\btext-gray-600\b/g, replace: 'text-gray-300' },
  { regex: /\btext-gray-500\b/g, replace: 'text-[#00F0FF]/70' },
  { regex: /\btext-gray-400\b/g, replace: 'text-[#00F0FF]/50' },
  { regex: /\bborder-gray-100\b/g, replace: 'border-[#00F0FF]/20' },
  { regex: /\bborder-gray-200\b/g, replace: 'border-[#00F0FF]/30' },
  { regex: /\bborder-gray-300\b/g, replace: 'border-[#00F0FF]/40' },
  { regex: /\bbg-gray-100\b/g, replace: 'bg-white/10' },
  { regex: /\bdivide-gray-100\b/g, replace: 'divide-white/10' },
  { regex: /\btext-indigo-600\b/g, replace: 'text-[#00F0FF]' },
];

const dirs = ['src/components/portal', 'src/components/ui'];

for (const dir of dirs) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.js') && file !== 'LoginForm.js' && file !== 'PortalShell.js') {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf-8');
      let changed = false;
      for (const rule of rules) {
        if (rule.regex.test(content)) {
          content = content.replace(rule.regex, rule.replace);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(filePath, content);
        console.log('Updated', filePath);
      }
    }
  }
}
