const fs = require('fs');
const path = require('path');
const html_to_pdf = require('html-pdf-node');

const htmlPath = path.join(__dirname, 'standalone.html');
const html = fs.readFileSync(htmlPath, 'utf8');

let options = { 
    format: 'A4',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true
};

let file = { content: html };

html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    const desktopPath = path.join('C:', 'Users', 'kv8n11', 'Desktop', 'PRP_Protocol_Final.pdf');
    fs.writeFileSync(desktopPath, pdfBuffer);
    console.log("Final PDF generated and saved to Desktop: " + desktopPath);
});
