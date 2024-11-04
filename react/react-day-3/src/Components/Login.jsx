import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/products");

    console.log(loginData);
  }

  return (
    <div>
      <Navbar />

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="password"
              required
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>

          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
