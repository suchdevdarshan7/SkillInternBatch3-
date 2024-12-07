import React, { useContext } from "react";
import LoginProvider, { LoginContext } from "./context/LoginProvider";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

const App = () => {
  const { loggedIn } = useContext(LoginContext);

  return <div>{loggedIn ? <Products /> : <Login />}</div>;
};

export default App;
