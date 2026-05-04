const fs = require('fs');
const path = require('path');
const html_to_pdf = require('html-pdf-node');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace relative path with absolute for the image
const bgPath = 'file:///' + path.join(__dirname, 'background.png').replace(/\\/g, '/');
html = html.replace("background.png", bgPath);

let options = { 
    format: 'A4',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true
};

let file = { content: html };

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync(path.join(__dirname, 'PRP_Protocol_Ferrari.pdf'), pdfBuffer);
    console.log("PDF generated successfully: PRP_Protocol_Ferrari.pdf");
});
