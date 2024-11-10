import React from 'react';
import { downloadFile } from '../utils/download';

const ExampleComponent: React.FC = () => {
  const handleDownload = () => {
    downloadFile('https://example.com/file.pdf', 'downloaded-file.pdf');
  };

  return (
    <button onClick={handleDownload}>Download File</button>
  );
};

export default ExampleComponent; 