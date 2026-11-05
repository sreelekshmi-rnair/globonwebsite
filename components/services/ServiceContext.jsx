// ServiceContext.jsx
'use client';
import { createContext, useContext, useState } from 'react';

const ServiceContext = createContext({
  mainService: null,
  setMainService: () => {},
});

export function ServiceProvider({ children }) {
  const [mainService, setMainService] = useState(null);
  return (
    <ServiceContext.Provider value={{ mainService, setMainService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useService = () => useContext(ServiceContext);

