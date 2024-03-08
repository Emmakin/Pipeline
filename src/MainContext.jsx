import React, { createContext, useContext, useState } from "react";
const UserContext = createContext();

export const MainContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState();

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
