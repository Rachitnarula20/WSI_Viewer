
import React from 'react';

const PatientModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} p-6 rounded-md shadow-lg w-1/3`}>
        <h2 className="text-xl font-bold mb-4">Patient Details</h2>
        <p><strong>Patient ID:</strong> 12345</p>
        <p><strong>Type:</strong> Blood</p>
        <p><strong>Additional Info:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button 
          onClick={onClose} 
          className={`${theme === 'light' ? 'bg-red-500' : 'bg-red-700'} text-white font-semibold py-2 px-4 rounded-md mt-4`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PatientModal;
