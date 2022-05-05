import React from 'react';
import './App.css';
import Resume1 from './resumes/format-1/index';
import html2pdf from 'html2pdf.js';

class App extends React.Component {

  downloadPdf() {
    console.log('---------');
    var element = document.getElementById('resume');
    var opt = {
      filename: 'jay-kumar-resume.pdf',
      html2canvas: { scale: 2.5 },
      jsPDF: { format: 'a4' }
    };
    html2pdf(element, opt);
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <br />
            <button onClick={this.downloadPdf} className="btn btn-success">
              <i className="fa fa-download"></i> <span>Download</span>
            </button>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <Resume1 />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
