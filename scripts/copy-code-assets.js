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
const week8Demo = path.join(root, 'code', 'colab', 'Week8', 'Demo');
const week8Lab = path.join(root, 'code', 'colab', 'Week8', 'Lab');
const week9WebsiteDemo = path.join(root, 'code', 'colab', 'Week9', 'Website_Demo');
const week9Lab = path.join(root, 'code', 'colab', 'Week9', 'Lab');
const week10Markdown = path.join(root, 'code', 'colab', 'Week10', 'Markdown');
const publicWeek6 = path.join(root, 'public', 'code', 'colab', 'Week6', 'Lab_Instruction');
const publicWeek7 = path.join(root, 'public', 'code', 'colab', 'Week7', 'Lab_Instruction');
const publicWeek7Assignment = path.join(root, 'public', 'code', 'colab', 'Week7', 'Assignment');
const publicWeek8Demo = path.join(root, 'public', 'code', 'colab', 'Week8', 'Demo');
const publicWeek8Lab = path.join(root, 'public', 'code', 'colab', 'Week8', 'Lab');
const publicWeek9WebsiteDemo = path.join(root, 'public', 'code', 'colab', 'Week9', 'Website_Demo');
const publicWeek9Lab = path.join(root, 'public', 'code', 'colab', 'Week9', 'Lab');
const publicWeek10Markdown = path.join(root, 'public', 'code', 'colab', 'Week10', 'Markdown');

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
if (fs.existsSync(week8Demo)) {
  copyRecursive(week8Demo, publicWeek8Demo);
  console.log('  ✓ Week8 Demo (including Images)');
}
if (fs.existsSync(week8Lab)) {
  copyRecursive(week8Lab, publicWeek8Lab);
  console.log('  ✓ Week8 Lab (notebook)');
}
if (fs.existsSync(week9WebsiteDemo)) {
  copyRecursive(week9WebsiteDemo, publicWeek9WebsiteDemo);
  console.log('  ✓ Week9 Website_Demo (notebook + images)');
}
if (fs.existsSync(week9Lab)) {
  copyRecursive(week9Lab, publicWeek9Lab);
  console.log('  ✓ Week9 Lab (notebook to submit)');
}
if (fs.existsSync(week10Markdown)) {
  copyRecursive(week10Markdown, publicWeek10Markdown);
  console.log('  ✓ Week10 Markdown pack (project brief + resources + rubric)');
}
console.log('Done.');
