const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'background.png');
const base64Img = fs.readFileSync(imgPath).toString('base64');
const dataUrl = `data:image/png;base64,${base64Img}`;

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace background image URL with base64 Data URL
html = html.replace("url('background.png')", `url('${dataUrl}')`);

// Also fix the hero height and padding if it looked weird
html = html.replace("height: 400px;", "height: 350px;");

fs.writeFileSync(path.join(__dirname, 'standalone.html'), html);
console.log("Standalone HTML created with embedded image.");
