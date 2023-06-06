import React from 'react';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <SearchForm />
      <DataGrid />
    </div>
  );
};

export default App;
