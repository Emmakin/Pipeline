import React, { createContext, useContext, useState } from "react";
import useSessionStorage from "./modules/useSS";
const UserContext = createContext();

export const MainContext = ({ children }) => {
  const [userDetails, setUserDetails] = useSessionStorage("userDetails", {});
  const [resetEmail, setResetEmail] = useState()

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, resetEmail, setResetEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
