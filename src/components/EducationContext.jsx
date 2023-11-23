import { createContext, useState } from 'react';

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [educationItems, setEducationItems] = useState([]);

  return (
    <EducationContext.Provider value={{ educationItems, setEducationItems }}>
      {children}
    </EducationContext.Provider>
  );
};