import { saveAs } from 'file-saver';

export const downloadFile = (url: string, filename: string) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      saveAs(blob, filename);
    })
    .catch(error => console.error('File download error:', error));
}; 