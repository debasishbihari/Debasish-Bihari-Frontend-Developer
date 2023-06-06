import React, { useState, useContext } from 'react';
import { SpaceXContext } from '../context/SpaceXContext';

const SearchForm = () => {
  const { setSearchFilters } = useContext(SpaceXContext);

  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    setSearchFilters({
      status,
      originalLaunch,
      type,
    });
  };

  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex items-center">
        <label className="mr-2" htmlFor="status">
          Status:
        </label>
        <select
          id="status"
          className="border border-gray-300 rounded px-2 py-1"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          {/* Add more status options if needed */}
        </select>
      </div>

      <div className="flex items-center ml-4">
        <label className="mr-2" htmlFor="original-launch">
          Original Launch:
        </label>
        <input
          id="original-launch"
          type="text"
          className="border border-gray-300 rounded px-2 py-1"
          value={originalLaunch}
          onChange={(e) => setOriginalLaunch(e.target.value)}
        />
      </div>

      <div className="flex items-center ml-4">
        <label className="mr-2" htmlFor="type">
          Type:
        </label>
        <input
          id="type"
          type="text"
          className="border border-gray-300 rounded px-2 py-1"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
