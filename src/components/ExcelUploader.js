// components/ExcelUploader.js
import React, { useState } from 'react';
import { excelToJson } from '../utils/excelToJson';

const ExcelUploader = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const data = await excelToJson(file);
        setJsonData(data); // Set the parsed JSON data
      } catch (error) {
        setError('Failed to parse Excel file');
      }
    }
  };

  return (
    <div>
      <h1>..Excel to Json Converter..</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {error && <p>{error}</p>}
      <div>
        <h3>Parsed Data:</h3>
        <pre>{jsonData ? JSON.stringify(jsonData, null, 2) : 'No data loaded'}</pre>
      </div>
    </div>
  );
};

export default ExcelUploader;
