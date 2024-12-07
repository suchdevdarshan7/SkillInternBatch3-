import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginProvider";
import "../css/Login.css";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (userData.username === "user1" && userData.password === "password") {
      setLoggedIn(true);
    } else {
      alert("Wrong creditials");
    }
  }

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_container-form">
        <div>
          <input
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            className="login_container-input"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="login_container-input"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" className="login_container-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
