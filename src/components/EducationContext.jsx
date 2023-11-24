import { createContext, useState } from 'react';

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [educationItems, setEducationItems] = useState([
    {
      schoolName: "London City University",
      degree: "Bachelor In computer Science",
      startDate: "08/2020",
      endDate: "04/2022",
      location: "London, UK",
    }
  ]);

  return (
    <EducationContext.Provider value={{ educationItems, setEducationItems }}>
      {children}
    </EducationContext.Provider>
  );
};