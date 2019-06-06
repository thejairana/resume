import React from 'react';
import './App.css';
import Resume1 from './resumes/format-1/index';
import html2pdf from 'html2pdf.js';

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        var element = document.getElementById('resume');
        var opt = {
          filename: 'myfile.pdf',
          html2canvas: { scale: 2.5 },
          jsPDF: { format: 'a4' }
        };
        html2pdf(element, opt);
      }}>Print</button>
      <Resume1 />
    </div>
  );
}

export default App;
