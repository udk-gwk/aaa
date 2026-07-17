import fs from 'fs';
const file = fs.readFileSync('src/content/volume-1/01-noise/index.tsx', 'utf8');
console.log(file.includes('headerImage: headerImg'));
