import React, { useState } from 'react';

const LeftPanel = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for RBC, WBC, and Platelets
  const rbcData = [
    { type: 'Angled Cells', count: 222, percentage: '67%' },
    { type: 'Borderline Ovalocytes', count: 50, percentage: '20%' },
    { type: 'Burr Cells', count: 87, percentage: '34%' },
    { type: 'Fragmented Cells', count: 2, percentage: '0.12%' },
  ];

  const wbcData = [
    { type: 'Basophil', count: 222, percentage: '67%' },
    { type: 'Eosinophil', count: 50, percentage: '20%' },
    { type: 'Lymphocyte', count: 87, percentage: '34%' },
    { type: 'Monocyte', count: 2, percentage: '0.12%' },
  ];

  const plateletsData = [
    { type: 'Count', count: 222, percentage: '-' },
  ];

  // Filter data based on search term
  const filterData = (data) => {
    return data.filter(item =>
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-4 rounded-lg shadow-lg`}>
      <h2 className="text-xl font-bold mb-4 text-center">Finding Details</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search findings..."
        className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} w-full p-2 mb-4 border rounded-md text-black focus:outline-none`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* RBC Table */}
      <div className="mb-6">
        <h3 className={`${theme === 'light' ? 'bg-green-100 text-black' : 'bg-green-700 text-white'} p-2 rounded-t-md font-semibold`}>RBC</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 font-semibold">Type</th>
              <th className="border-b p-2 font-semibold">Count</th>
              <th className="border-b p-2 font-semibold">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filterData(rbcData).map((item, index) => (
              <tr key={index} className={`${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}>
                <td className="border-b p-2">{item.type}</td>
                <td className="border-b p-2 text-center">{item.count}</td>
                <td className="border-b p-2 text-center">{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* WBC Table */}
      <div className="mb-6">
        <h3 className={`${theme === 'light' ? 'bg-blue-100 text-black' : 'bg-blue-700 text-white'} p-2 rounded-t-md font-semibold`}>WBC</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 font-semibold">Type</th>
              <th className="border-b p-2 font-semibold">Count</th>
              <th className="border-b p-2 font-semibold">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filterData(wbcData).map((item, index) => (
              <tr key={index} className={`${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}>
                <td className="border-b p-2">{item.type}</td>
                <td className="border-b p-2 text-center">{item.count}</td>
                <td className="border-b p-2 text-center">{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Platelets Table */}
      <div>
        <h3 className={`${theme === 'light' ? 'bg-purple-100 text-black' : 'bg-purple-700 text-white'} p-2 rounded-t-md font-semibold`}>Platelets</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 font-semibold">Type</th>
              <th className="border-b p-2 font-semibold">Count</th>
              <th className="border-b p-2 font-semibold">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filterData(plateletsData).map((item, index) => (
              <tr key={index} className={`${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}>
                <td className="border-b p-2">{item.type}</td>
                <td className="border-b p-2 text-center">{item.count}</td>
                <td className="border-b p-2 text-center">{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftPanel;
