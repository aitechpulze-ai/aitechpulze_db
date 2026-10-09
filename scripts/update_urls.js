const fs = require('fs');
let content = fs.readFileSync('src/content/work.js', 'utf8');

const urls = {
  'hcmc-health-centre': 'https://hcmc-health-centre.netlify.app/',
  'student-placement-portal': 'https://student-placement-portal.netlify.app/',
  'leaf-disease-classifier': 'https://leaf-disease-classifier.netlify.app/',
  'stress-detection-ai': 'https://aistressdetection.netlify.app/',
  'asl-translator': 'https://asl-sign-recognization.netlify.app/'
};

for (const [slug, url] of Object.entries(urls)) {
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?url:\\s*)null`, 'g');
  content = content.replace(regex, `$1"${url}"`);
}

fs.writeFileSync('src/content/work.js', content);
console.log('URLs updated!');
