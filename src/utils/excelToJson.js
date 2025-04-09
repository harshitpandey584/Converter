// utils/excelToJson.js
import * as XLSX from 'xlsx';

// Function to read the Excel file and convert to JSON
export const excelToJson = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const ab = e.target.result;
      const workbook = XLSX.read(ab, { type: 'array' });
      const sheetNames = workbook.SheetNames;

      // Convert first sheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
      resolve(jsonData);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Read file as array buffer
    reader.readAsArrayBuffer(file);
  });
};
