import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/img/login.svg";

class Login extends Component {
  render() {
    return (
      <main class="login-screen">
        <div class="left">
          <img src={loginImg} alt="" />
        </div>
        <div class="main-card card">
          <h1>Sign In</h1>

          <input type="text" autoFocus placeholder="username" />
          <input type="password" class="password" placeholder="password" />

          <Link to={"/home"}>
            <button class="fw">Login</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Login;
