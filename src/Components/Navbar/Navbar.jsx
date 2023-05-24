import React from "react";
import "./navbar.css";
import webIcon from "../../Images/FlexiDrive Website-icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <div className="header">
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
          <NavLink className="logo">
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <img src={webIcon} alt="website icon" />
            <h1>
              <span>Flexi</span>Drive
            </h1>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/car-listing"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Listings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="btns">
            <Link to='sign-in'>
              <button className="signIn">
                <i className="fa-regular fa-user"></i>
                <p>Sign In</p>
              </button>
            </Link>
            <Link to='sign-up'>
              <button className="signUp">
                <i className="fa-solid fa-lock"></i>
                <p>Sign Up</p>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
