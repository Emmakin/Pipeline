import React, { createContext, useContext, useState } from "react";
import useSessionStorage from "./modules/useSS";
const UserContext = createContext();

export const MainContext = ({ children }) => {
  const [userDetails, setUserDetails] = useSessionStorage("userDetails", {});

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
