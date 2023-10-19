import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./contact.css";

import ContactHero from "../../Images/Conatct-Hero.jpg";

import contactIMG from '../../Images/contact-form.jpg'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={ContactHero} alt="" />
      </div>
      <div className="contact">
        <div className="contact-detail">
          <span>
            <i class="fa-solid fa-phone-volume"></i>
            <h2>Phone Number</h2>
            <p>(888) 888-8888</p>
          </span>
          <span>
            <i class="fa-solid fa-envelope"></i>
            <h2>E-Mail</h2>
            <p>flexiDrive@gmail.com</p>
          </span>
          <span>
            <i class="fa-solid fa-location-dot"></i>
            <h2>Location</h2>
            <p>420 Tausi Lane, Nairobi </p>
          </span>
          <span>
            <i class="fa-solid fa-clock"></i>
            <h2>Opening Hours</h2>
            <p>Mon - Fri ( 9am - 5pm )</p>
          </span>
        </div>

        <div className="Form">
          <div className="contact-form">
            <div className="c-image">
              <img src={contactIMG} alt="" />
            </div>
            <div className="form">
              <form action="">
                <h1><span>Get in</span> touch!</h1>
                <p>Name</p><input type="text" />
                <p>Email</p><input type="email" />
                <p>Phone Number</p><input type="text" />
                <p>Message</p><textarea name="" id="" cols="45" rows="10"></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
