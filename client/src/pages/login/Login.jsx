import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FakeSocial</h3>
          <span className="loginDesc">
            Connect with friend and the world around you on FakeSocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <div className="buttons">
              <button className="loginButton">Login</button>
              <button className="registerButton">Create a new account</button>
            </div>

            <span className="loginForgot">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
