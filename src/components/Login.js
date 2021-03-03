import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  let setUser;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // set localstorage data into local state
    const localStorageData = JSON.parse(window.localStorage.getItem("users"));

    if (
      formData.username === localStorageData.username &&
      formData.password === localStorageData.password
    ) {
      history.push("/dashbord");
    } else {
      alert("Username & Password is wrong !!");
    }
  };

  return (
    <>
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autoComplete="off"
            value={formData["username"]}
            onChange={handleChange}
            required
            className="form-control-material"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autoComplete="off"
            value={formData["password"]}
            onChange={handleChange}
            required
            className="form-control-material"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" onClick={handleLogin} className="btn btn-ghost">
          Login
        </button>
        <Link
          to="/register"
          style={{
            color: "darkgoldenrod",
            textDecoration: "none",
            fontFamily: "sans-serif",
            cursor: "pointer",
          }}
        >
          Register for new user
        </Link>
      </form>
    </>
  );
};

export default Login;
