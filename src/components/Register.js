import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.currentTarget;
    setformData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // using localstorage for store users
    
    window.localStorage.setItem("users", JSON.stringify(formData));
    setformData({});
    history.push("/login");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            value={formData["username"] || ""}
            required
            className="form-control-material"
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-input-material">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData["email"] || ""}
            required
            className="form-control-material"
            onChange={handleChange}
          />
          <label htmlFor="password">Email</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            value={formData["password"]}
            required
            className="form-control-material"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-ghost">
          Register
        </button>
        <Link
          to="/login"
          style={{
            color: "darkgoldenrod",
            textDecoration: "none",
            fontFamily: "sans-serif",
            cursor: "pointer",
          }}
        >
          login here
        </Link>
      </form>
    </>
  );
};

export default Register;
