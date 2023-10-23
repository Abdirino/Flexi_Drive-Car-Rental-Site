import React from "react";
import "./footer.css";
import creditCard1 from '../../Images/icons8-credit-card-48 (1).png';
import creditCard2 from '../../Images/icons8-credit-card-48.png';
import creditCard3 from '../../Images/icons8-mastercard-48.png';
import creditCard4 from '../../Images/icons8-visa-48.png';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
    <ScrollToTop smooth top={20} color="red"/>
      <div className="Footer">
        <div className="footer">
          <div className="section">
            <h2>About Us</h2>
            <div></div>
            <p>Our Company</p>
            <p>FlexiDrive USA</p>
            <p>Shop Toyota</p>
            <p>FlexiDrive Worldwide</p>
            <p>Virtual Auto Show</p>
          </div>

          <div className="section">
            <h2>Vehicle Types</h2>
            <div></div>
            <p>All Vehicles</p>
            <p>SUVs</p>
            <p>Cars</p>
            <p>Trucks</p>
            <p>Hybrids</p>
          </div>

          <div className="section">
            <h2>Quick Links</h2>
            <div></div>
            <p>Accounts</p>
            <p>Campaign</p>
            <p>FlexiDrive Dealers</p>
            <p>Deals and Incentives</p>
            <p>Insurance</p>
          </div>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="underline"></div>
            <div className="footer-contact">
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
      </div>

      <div className="Copy">
        <div className="copy-write">
          <p>©2021 FlexiDrive | All rights reserved. Engineered By Abdirahman</p>
          <div className="pay-methods">
            <img src={creditCard1} alt="" />
            <img src={creditCard2} alt="" />
            <img src={creditCard3} alt="" />
            <img src={creditCard4} alt="" />
          </div>
        </div>
      </div>
    </>



  );
};

export default Footer;
