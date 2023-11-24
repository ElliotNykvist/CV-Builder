import { createContext, useState } from 'react';

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [ExperienceItems, setExperienceItems] = useState([
    {
      companyName: "Microsoft",
      position: "Front End Developer",
      description: "My position involved crafting dynamic and aesthetically captivating user interfaces that effectively engaged our diverse clientele, contributing to Microsoft's advancement in the ever-evolving digital realm.",
      sDate: "08/2020",
      eDate: "Present",
      elocation: "London, UK",
    },
  ]);

  return (
    <ExperienceContext.Provider value={{ ExperienceItems, setExperienceItems }}>
      {children}
    </ExperienceContext.Provider>
  );
};