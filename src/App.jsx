import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import MainViewer from './components/MainViewer';
import LeftPanel from './components/LeftPanel';
import PatientModal from './components/PatientModal';

const App = () => {
  const pdfRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const downloadPDF = async () => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const input = pdfRef.current;

    if (input) {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('report.pdf');
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white'} flex flex-col h-screen p-4`}>
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-2 mb-4">
        <button className="text-xl font-bold flex items-center space-x-2">
          <span>⬅</span> <span>Back</span>
        </button>
        <div className="text-lg font-semibold">{new Date().toLocaleString()}</div>
        <button
          onClick={toggleTheme}
          className={`py-1 px-4 rounded-md ${theme === 'light' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} transition duration-200`}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>

      <div className="flex flex-row flex-grow" ref={pdfRef}>
        {/* Left Panel */}
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} w-1/3 p-4 border rounded-md shadow-md`}>
          <LeftPanel theme={theme} />
        </div>

        {/* Main Viewer */}
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} flex-1 flex flex-col items-center p-4 border rounded-md shadow-md ml-4`}>
          <h2 className="text-center font-semibold mb-2 text-xl">WSI Zoomed IN View</h2>
          <MainViewer className="flex-grow mb-4 w-full border rounded-md" />

          <div className="flex justify-between items-center w-full mt-4 space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`${theme === 'light' ? 'bg-gray-700 text-white' : 'bg-gray-500 text-white'} font-semibold py-2 px-4 rounded-md shadow-md transition duration-200`}
            >
              View Patient Details
            </button>
            <button
              onClick={downloadPDF}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 hover:bg-blue-600"
            >
              Report
            </button>
          </div>
        </div>
      </div>

      <PatientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme={theme} />
    </div>
  );
};

export default App;
