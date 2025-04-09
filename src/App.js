// App.js
import React from 'react';
import ExcelUploader from './components/ExcelUploader';
import CSVUploader from './components/CSVUploader';
import YAMLUploader from './components/YAMLUploader';

const App = () => {
  return (
    <div>
      <h1>..Multi file uploading..</h1>
      <ExcelUploader />
      <CSVUploader />
      <YAMLUploader />
    </div>
  );
};

export default App;