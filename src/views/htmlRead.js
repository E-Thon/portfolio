import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function getHtmlEntries() {
    const pagesDir = path.resolve(__dirname, "../../src/pages");
    const entries = {};
    
    // Read all files in the directory
    const files = fs.readdirSync(pagesDir);
    
    // Filter out HTML files
    const htmlFiles = files.filter((file) => file.endsWith(".html"));
    
    // Create entries for each HTML file
    htmlFiles.forEach((file) => {
        const name = path.basename(file, ".html");
        entries[name] = path.resolve(pagesDir, file);
    });
    console.log(entries);
    
    
    return entries;
}