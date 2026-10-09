const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-white': 'bg-[#0a0a0a]',
  'bg-gray-50': 'bg-[#03040B]',
  'text-gray-900': 'text-white',
  'text-gray-800': 'text-white/90',
  'text-gray-700': 'text-white/80',
  'text-gray-600': 'text-[#8b93b0]',
  'text-gray-500': 'text-[#8b93b0]/80',
  'border-gray-100': 'border-white/10',
  'border-gray-200': 'border-white/15',
  'border-gray-300': 'border-white/20',
  'bg-indigo-50': 'bg-[#7B2CBF]/10',
  'bg-indigo-100': 'bg-[#7B2CBF]/20',
  'text-indigo-600': 'text-[#00F0FF]',
  'text-indigo-700': 'text-[#00F0FF]',
  'border-indigo-600': 'border-[#00F0FF]',
  'focus:ring-indigo-600': 'focus:ring-[#00F0FF]',
  'bg-indigo-600': 'bg-[#7B2CBF]',
  'hover:bg-indigo-700': 'hover:bg-[#5b3fd6]',
  'bg-gray-900': 'bg-white/10',
  'bg-gray-800': 'bg-white/5',
  'hover:bg-gray-800': 'hover:bg-white/10',
  'hover:bg-gray-50': 'hover:bg-white/5',
  'bg-gradient-to-br from-indigo-50 to-white': 'bg-[#03040B] noise',
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.js') && fullPath.includes('src\\app\\(site)')) {
      // Don't touch the home page, we already customized it deeply
      if (fullPath.endsWith('src\\app\\(site)\\page.js')) continue;

      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Perform simple replacements
      for (const [search, replace] of Object.entries(replacements)) {
        content = content.split(search).join(replace);
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated theme classes in: ${fullPath}`);
    }
  }
}

const targetDir = path.join(__dirname, 'src', 'app', '(site)');
processDirectory(targetDir);
