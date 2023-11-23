import { createContext, useState } from 'react';

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [ExperienceItems, setExperienceItems] = useState([]);

  return (
    <ExperienceContext.Provider value={{ ExperienceItems, setExperienceItems }}>
      {children}
    </ExperienceContext.Provider>
  );
};