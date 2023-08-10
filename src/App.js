import './App.css';
import PDF from './Components/PDF';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserData from './Components/UserData';
import React from 'react';
import html2pdf from 'html2pdf.js';
function App() {
  const [userData, setUserData] = React.useState(null);

  const handleSubmit = (data) => {
    setUserData(data);
  };

  console.log(userData);

  const printableRef = React.useRef();

  const handleDownloadPDF = () => {
    const element = printableRef.current;
    const opt = {
      margin: 10,
      filename: 'your_document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="App">
      {userData ? (
        <>
          <div ref={printableRef}>
            <PDF formData={userData} />
          </div>
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </>
      ) : (
        <UserData onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
