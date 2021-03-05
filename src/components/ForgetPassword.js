import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

const ForgetPassword = () => {
  const history = useHistory();
  
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    // set localstorage data into local state
    const localStorageData = JSON.parse(window.localStorage.getItem("users"));

    // set new password
    const newPass = {username:localStorageData.username, email:localStorageData.email,password:formData.newPassword}
    window.localStorage.setItem("users", JSON.stringify(newPass));

    if (
      formData.oldPassword === localStorageData.password 
    ) {
      history.push("/login");
    } else {
      alert("Password is not match !!");
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleReset}>
        <h1>Reset Password</h1>
        <div className="form-input-material">
          <input
            type="text"
            name="oldPassword"
            id="username"
            placeholder=" "
            autoComplete="off"
            value={formData["oldPassword"]}
            onChange={handleChange}
            required
            className="form-control-material"
          />
          <label htmlFor="username">Old Password</label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="newPassword"
            id="password"
            placeholder=" "
            autoComplete="off"
            value={formData["newPassword"]}
            onChange={handleChange}
            required
            className="form-control-material"
          />
          <label htmlFor="password">New Password</label>
        </div>
        <button type="submit"  className="btn btn-ghost">
          Reset
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
          Login
        </Link>
      </form>
    </>
  );
};

export default ForgetPassword;
