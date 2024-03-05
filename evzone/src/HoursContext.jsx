import React, { createContext, useContext, useState } from 'react';

const HoursContext = createContext();

export const useHours = () => useContext(HoursContext);

export const HoursProvider = ({ children }) => {
  const [hours, setHours] = useState(0);

  return (
    <HoursContext.Provider value={{ hours, setHours }}>
      {children}
    </HoursContext.Provider>
  );
};
