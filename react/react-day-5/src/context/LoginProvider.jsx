import React, { createContext, useState } from "react";

export const LoginContext = createContext(undefined);
const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
