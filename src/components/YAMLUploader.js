// components/YAMLUploader.js
import React, { useState } from 'react';
import * as yaml from 'js-yaml';

const YAMLUploader = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const yamlText = e.target.result;
        const json = yaml.load(yamlText);
        setJsonData(json);
        console.log("Parsed YAML -> JSON:", json);
      } catch (error) {
        console.error("Error parsing YAML:", error);
        alert("Invalid YAML file.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h1>..YAML to JSON Converter..</h1>
      <input type="file" accept=".yaml,.yml" onChange={handleFileUpload} />
      <h3>Parsed data:</h3>
      {jsonData ? (
        <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      ) : (
        <p style={{ marginTop: "10px" }}>No data loaded</p>
      )}
    </div>
  );
};

export default YAMLUploader;
