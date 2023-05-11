import React from "react";
import "./navbar.css";
import webIcon from "../../Images/FlexiDrive Website-icon.png";

const Navbar = () => {
  // const nav = document.querySelector('.nav-links');

  // document.querySelector('.nav-menu').onclick = () => {
  //   nav.classList.add('active');
  //   nav.classList.remove('active');
  // }
  function menuToggle() {
    const nav = document.querySelector('.nav-links');
    
    document.querySelector(".nav-menu").onclick = () => {
      nav.classList.add("active");
      nav.classList.remove("active");
    };
  }

  return (
    <div className="header">
      <nav className="nav">
        <div className="logo">
          <i className="nav-menu fa-solid fa-bars" onClick={menuToggle}></i>
          <img src={webIcon} alt="website icon" />
          <h1>
            <span>Flexi</span>Drive
          </h1>
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            {" "}
            <a href="#Home">Home</a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a href="#listings">About Us</a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a href="#about">Listings</a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a href="#blog">Blog</a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>

        <div className="btns">
          <button className="signIn">
            <i className="fa-regular fa-user"></i>
            <p>Sign In</p>
          </button>
          <button className="signUp">
            <i className="fa-solid fa-lock"></i>
            <p>Sign Up</p>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
