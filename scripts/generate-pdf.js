import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read markdown
const mdFile = fs.readFileSync(path.join(__dirname, '../public/rulebook.md'), 'utf-8');

const doc = new PDFDocument({ margin: 50 });
const outputPath = path.join(__dirname, '../public/RuleBook.pdf');
doc.pipe(fs.createWriteStream(outputPath));

const lines = mdFile.split('\n');

lines.forEach(line => {
    line = line.trim();
    if (!line) {
        doc.moveDown(0.5);
        return;
    }

    if (line.startsWith('# ')) {
        doc.fontSize(24).font('Helvetica-Bold').text(line.replace('# ', '').replace(/\*\*/g, ''), { align: 'center' });
        doc.moveDown(1);
    } else if (line.startsWith('## ')) {
        doc.fontSize(18).font('Helvetica-Bold').fillColor('#1a365d').text(line.replace('## ', '').replace(/\*\*/g, ''));
        doc.moveDown(0.5);
    } else if (line.startsWith('### ')) {
        doc.fontSize(14).font('Helvetica-Bold').fillColor('#2d3748').text(line.replace('### ', '').replace(/\*\*/g, ''));
        doc.moveDown(0.5);
    } else if (line.startsWith('- ')) {
        // Handle bold markdown
        let text = line.replace('- ', '');
        doc.fontSize(11).font('Helvetica').fillColor('black').text(`• ${text.replace(/\*\*/g, '')}`, { indent: 15 });
    } else if (line === '---') {
        doc.moveDown(1);
        doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#e2e8f0').stroke();
        doc.moveDown(1);
    } else {
        doc.fontSize(11).font('Helvetica').fillColor('black').text(line.replace(/\*\*/g, ''));
    }
});

doc.end();
console.log(`Successfully generated PDF at ${outputPath}`);
