import React from 'react';

const Popup = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">{item.name}</h2>
        <p>
          <span className="font-bold">Type:</span> {item.type}
        </p>
        <p>
          <span className="font-bold">Status:</span> {item.status}
        </p>
        <p>
          <span className="font-bold">Original Launch:</span>{' '}
          {item.original_launch}
        </p>
        {item.company && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Company:</h3>
            <p>
              <span className="font-bold">Name:</span> {item.company.name}
            </p>
            <p>
              <span className="font-bold">Founder:</span>{' '}
              {item.company.founder}
            </p>
            <p>
              <span className="font-bold">Founded:</span>{' '}
              {item.company.founded}
            </p>
            {/* Display additional company details */}
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
