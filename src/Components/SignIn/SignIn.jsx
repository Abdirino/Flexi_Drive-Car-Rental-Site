import React from "react";
import "./sign-in.css";

import webIcon from "../../Images/FlexiDrive Website-icon.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-In">
      <div className="signNav">
        <img src={webIcon} alt="" />
        <h2>FlexiDrive</h2>
      </div>

      <div className="signin">
        <Link to="/" style={{ color: "black" }}>
          <div className="back-home">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Back To Home</p>
          </div>
        </Link>

        <div className="sign-head">
          <h1>Sign In</h1>
          <p>We'll send a confirmation code to your email.</p>
        </div>

        <h3>Email</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="text" />

        <div className="forgot">
            <p>Forgot Password?</p>
        </div>

        <button>Sign In</button>

        <div className="already">
            <p>Don't have an account yet? <span><Link to='sign-up' style={{color: "rgb(70, 134, 171)"}}>Register</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
