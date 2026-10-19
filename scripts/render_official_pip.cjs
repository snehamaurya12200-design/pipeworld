const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = '/ms-playwright/chromium_headless_shell-1247/chrome-headless-shell-linux64/chrome-headless-shell';

function renderSvgFileToPng(svgPath, outputPath, width, height, isOpaque = false, bgColor = '#fffaf2') {
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const tmpHtml = `/tmp/render_svg_${Date.now()}_${Math.random().toString(36).substring(7)}.html`;
  
  fs.writeFileSync(tmpHtml, `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            width: ${width}px;
            height: ${height}px;
            background: ${isOpaque ? bgColor : 'transparent'};
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          svg {
            width: 100%;
            height: 100%;
            display: block;
          }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `);

  try {
    const bgParam = isOpaque ? `--default-background-color=${bgColor.replace('#','')}` : '--default-background-color=00000000';
    execSync(`${chromePath} --headless --no-sandbox --disable-gpu --screenshot=${outputPath} --window-size=${width},${height} ${bgParam} file://${tmpHtml}`, { stdio: 'pipe' });
    console.log(`Rendered ${outputPath} (${width}x${height}) - size: ${fs.statSync(outputPath).size} bytes`);
  } finally {
    try { fs.unlinkSync(tmpHtml); } catch (e) {}
  }
}

const assetsDir = path.resolve(__dirname, '../public/assets');

console.log('Rendering official Pip character artwork matching uploaded reference...');

// 1. Transparent character on cloud (for avatar, cards, windows)
renderSvgFileToPng(
  path.join(assetsDir, 'pip_official_character.svg'),
  path.join(assetsDir, 'pip-waving-cloud.png'),
  512,
  512,
  false
);

// 2. Avatar cloud aliases
fs.copyFileSync(path.join(assetsDir, 'pip-waving-cloud.png'), path.join(assetsDir, 'pip_avatar_cloud.png'));
fs.copyFileSync(path.join(assetsDir, 'pip-waving-cloud.png'), path.join(assetsDir, 'pip_avatar_cloud.jpg'));

// 3. Full Portrait matching the uploaded image (Pip on cloud + sleeping crescent moon + stars + cream parchment background)
renderSvgFileToPng(
  path.join(assetsDir, 'pip_portrait_full.svg'),
  path.join(assetsDir, 'pip_portrait.png'),
  512,
  768,
  true,
  '#fdf6ec'
);
fs.copyFileSync(path.join(assetsDir, 'pip_portrait.png'), path.join(assetsDir, 'pip_portrait.jpg'));

// 4. Also render dream lantern, lullaby box, and sleeping moon
renderSvgFileToPng(
  path.join(assetsDir, 'pip_dream_lantern.svg'),
  path.join(assetsDir, 'pip_dream_lantern.png'),
  384,
  384,
  false
);
fs.copyFileSync(path.join(assetsDir, 'pip_dream_lantern.png'), path.join(assetsDir, 'pip_dream_lantern.jpg'));

renderSvgFileToPng(
  path.join(assetsDir, 'pip_lullaby_box.svg'),
  path.join(assetsDir, 'pip_lullaby_box.png'),
  384,
  384,
  false
);
fs.copyFileSync(path.join(assetsDir, 'pip_lullaby_box.png'), path.join(assetsDir, 'pip_lullaby_box.jpg'));

renderSvgFileToPng(
  path.join(assetsDir, 'sleeping_moon.svg'),
  path.join(assetsDir, 'sleeping_moon.png'),
  384,
  384,
  false
);

console.log('All official Pip character assets rendered successfully!');
