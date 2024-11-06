import React, { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { login, setLogin } = useContext(LoginContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (data.username === "user1" && data.password === "12345") {
      setLogin(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
