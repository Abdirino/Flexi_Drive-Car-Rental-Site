import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-company">
        <h2>About Company</h2>
        <div></div>
        <p>Our Company</p>
        <p>Shop Toyota</p>
        <p>FlexiDrive USA</p>
        <p>FlexiDrive Worldwide</p>
        <p>FlexiDrive Racing</p>
        <p>Virtual Auto Show</p>
      </div>

      <div className="car-types">
        <h2>Vehicle Types</h2>
        <div></div>
        <p>All Vehicles</p>
        <p>SUVs</p>
        <p>Cars</p>
        <p>Trucks</p>
        <p>Electric Vehicles</p>
        <p>Hybrids</p>
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        <div></div>
        <p>Accounts</p>
        <p>Campaign</p>
        <p>FlexiDrive Dealers</p>
        <p>Deals and Incentives</p>
        <p>Financial Services</p>
        <p>Insurance</p>
      </div>

      <div className="contact-info">
        <h2>Contact Info</h2>
        <div className="underline"></div>
        <div className="contact">
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <p>+254 708299034</p>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <p>Support@gmail.com</p>
          </div>
        </div>
        <div className="socials">
          <h3>Connect With Us</h3>
          <div className="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
