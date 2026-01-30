const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

const csvFilePath = path.join(__dirname, 'test_results.csv');
const xlsxFilePath = path.join(__dirname, 'test_results.xlsx');

try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');

    const workbook = XLSX.read(csvData, { type: 'string' });
    XLSX.writeFile(workbook, xlsxFilePath);

    console.log(`Successfully converted ${csvFilePath} to ${xlsxFilePath}`);
} catch (error) {
    console.error('Error converting CSV to XLSX:', error);
}
