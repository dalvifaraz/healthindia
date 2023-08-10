import React from 'react';

const Download = ({ data }) => {
  const handleDownload = () => {
    const content = `
      Name: ${data.name}
      Phone Number: ${data.phoneNumber}
      Gender: ${data.gender}
      Age: ${data.age}
    `;
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default Download;
