import React, { useState, useEffect,useContext } from 'react';
import SpaceXAPI from './SpaceXAPI';
import Popup from './Popup';
import { SpaceXContext } from '../context/SpaceXContext';

const DataGrid = () => {
  const { searchFilters } = useContext(SpaceXContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const rockets = await SpaceXAPI.getRockets();
      const capsules = await SpaceXAPI.getCapsules();
      const landpads = await SpaceXAPI.getLandpads();
      const launches = await SpaceXAPI.getLaunches();

      const allData = [...rockets, ...capsules, ...landpads, ...launches];
      setData(allData);
      setIsLoading(false);
    } catch (error) {
      setError('Failed to fetch data');
      setIsLoading(false);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Original Launch</th>
            {/* Add more table headers for additional data types */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.type}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
              <td className="py-2 px-4 border-b">{item.original_launch}</td>
              {/* Add more table cells for additional data types */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {selectedItem && <Popup item={selectedItem} onClose={handlePopupClose} />}
    </div>
  );
};

export default DataGrid;
