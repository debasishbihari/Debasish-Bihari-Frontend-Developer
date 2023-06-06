import React, { createContext, useState } from 'react';

export const SpaceXContext = createContext();

export const SpaceXProvider = ({ children }) => {
  const [searchFilters, setSearchFilters] = useState({
    status: '',
    originalLaunch: '',
    type: '',
  });

  return (
    <SpaceXContext.Provider value={{ searchFilters, setSearchFilters }}>
      {children}
    </SpaceXContext.Provider>
  );
};
