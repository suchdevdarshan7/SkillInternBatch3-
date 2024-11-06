import React, { useState } from "react";
import Products from "./Components/Products";
import Login from "./Components/Login";
import { LoginContext } from "./Context/LoginContext";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <LoginContext.Provider value={{ login, setLogin }}>
        {login ? <Products>I am the child</Products> : <Login />}
      </LoginContext.Provider>
    </div>
  );
};

export default App;
