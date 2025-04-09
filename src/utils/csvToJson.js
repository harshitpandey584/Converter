// utils/csvToJson.js
import Papa from 'papaparse';

// Function to parse the CSV file and convert it to JSON
export const csvToJson = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      // Parse the CSV text using PapaParse
      Papa.parse(text, {
        complete: (result) => {
          resolve(result.data);  // Return parsed data as JSON
        },
        header: true, // Treat the first row as headers
        skipEmptyLines: true, // Skip empty lines
      });
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Read the file as text
    reader.readAsText(file);
  });
};
