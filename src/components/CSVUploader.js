// components/CSVUploader.js
import React, { useState } from 'react';
import { csvToJson } from '../utils/csvToJson';

const CSVUploader = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const data = await csvToJson(file);
        setJsonData(data); // Set the parsed CSV data as JSON
      } catch (error) {
        setError('Failed to parse CSV file');
      }
    }
  };

  return (
    <div>
      <h1>..CSV to Json Converter..</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <p>{error}</p>}
      <div>
        <h3>Parsed Data:</h3>
        <pre>{jsonData ? JSON.stringify(jsonData, null, 2) : 'No data loaded'}</pre>
      </div>
    </div>
  );
};

export default CSVUploader;
