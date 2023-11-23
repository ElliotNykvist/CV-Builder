import { createContext, useState } from 'react';

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    fname: 'Brandon Parker',
    email: 'example@gmail.com',
    tel: '+44 3560 5566 5566',
    address: 'London, UK',
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}