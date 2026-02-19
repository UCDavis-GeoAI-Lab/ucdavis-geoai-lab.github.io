/**
 * Copy code/colab assets (Week 6 & 7 lab images, markdown, etc.) into public/code/colab
 * so they are included in the Vite build and work on GitHub Pages.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = process.cwd();

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  Skip (missing): ${path.relative(root, src)}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('~$')) continue; // skip temp files
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const week6Lab = path.join(root, 'code', 'colab', 'Week6', 'Lab_Instruction');
const week7Lab = path.join(root, 'code', 'colab', 'Week7', 'Lab_Instruction');
const week7Assignment = path.join(root, 'code', 'colab', 'Week7', 'Assignment');
const publicWeek6 = path.join(root, 'public', 'code', 'colab', 'Week6', 'Lab_Instruction');
const publicWeek7 = path.join(root, 'public', 'code', 'colab', 'Week7', 'Lab_Instruction');
const publicWeek7Assignment = path.join(root, 'public', 'code', 'colab', 'Week7', 'Assignment');

console.log('Copying code/colab assets to public/ for build...');
if (fs.existsSync(week6Lab)) {
  copyRecursive(week6Lab, publicWeek6);
  console.log('  ✓ Week6 Lab_Instruction');
}
if (fs.existsSync(week7Lab)) {
  copyRecursive(week7Lab, publicWeek7);
  console.log('  ✓ Week7 Lab_Instruction');
}
if (fs.existsSync(week7Assignment)) {
  copyRecursive(week7Assignment, publicWeek7Assignment);
  console.log('  ✓ Week7 Assignment');
}
console.log('Done.');
