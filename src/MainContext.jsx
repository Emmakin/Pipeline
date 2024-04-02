import React, { createContext, useContext, useState } from "react";
import useSessionStorage from "./modules/useSS";
const UserContext = createContext();

export const MainContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    id: "string",
    created_timestamp: 0,
    full_name: "Pipeliner",
    email: "string",
    phone_number: "string",
    image: "string",
  });
  const [auth, setAuth] = useState()
  const [resetEmail, setResetEmail] = useState()

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, resetEmail, setResetEmail, auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
