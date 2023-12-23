import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const BarcodeScanner = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  }

  const handleError = (error) => {
    console.error(error);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
      />
      {scannedData && (
        <a href={scannedData} target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
      )}
    </div>
  );
};

export default BarcodeScanner;
