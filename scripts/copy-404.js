import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const html404Path = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Add redirect script before closing body tag
  // This script handles GitHub Pages 404 redirects for SPAs
  const redirectScript = `
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        } else {
          // Redirect to index.html with path in query string
          var pathSegmentsToKeep = 1;
          var basePath = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/');
          var path = l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/');
          var search = l.search ? '&' + l.search.slice(1) : '';
          var redirectPath = basePath + '/?/' + path.replace(/&/g, '~and~') + search.replace(/&/g, '~and~') + l.hash;
          l.replace(redirectPath);
        }
      }(window.location))
    </script>
  `;
  
  // Insert script before closing body tag
  content = content.replace('</body>', redirectScript + '</body>');
  
  fs.writeFileSync(html404Path, content);
  console.log('✓ Created 404.html from index.html');
} else {
  console.error('✗ index.html not found in dist folder');
  process.exit(1);
}

