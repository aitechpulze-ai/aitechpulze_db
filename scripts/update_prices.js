const fs = require('fs');
let content = fs.readFileSync('src/content/services.js', 'utf8');

const newPrices = {
  'ai-development': 'From ₹3,000',
  'machine-learning': 'From ₹3,000',
  'web-development': 'From ₹1,500',
  'mobile-app-development': 'From ₹5,000',
  'saas-development': 'From ₹8,000',
  'cloud-solutions': 'From ₹2,500',
  'data-analytics': 'From ₹1,500',
  'custom-software': 'From ₹4,000',
  'digital-transformation': 'From ₹5,000'
};

for (const [slug, price] of Object.entries(newPrices)) {
  const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?price:\\s*")[^"]*(")`, 'g');
  content = content.replace(regex, `$1${price}$2`);
  
  const regex2 = new RegExp(`(price:\\s*")[^"]*("[\\s\\S]*?slug:\\s*"${slug}")`, 'g');
  content = content.replace(regex2, `$1${price}$2`);
}

fs.writeFileSync('src/content/services.js', content);
console.log('Prices updated successfully!');
