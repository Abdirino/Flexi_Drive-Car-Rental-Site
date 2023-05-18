import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./about.css";
import AboutHero from "../../Images/AboutHero.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={AboutHero} alt="" />
      </div>
      <div className="about">
        <div className="head">
          <h1>Why Choose Us</h1>
          <div></div>
          <div></div>
        </div>

        <div className="content">
          <p>
            FlexiDrive is a unique car rental website that takes the concept of
            renting a vehicle to extraordinary heights. With a touch of
            innovation and a dash of exclusivity, FlexiDrive redefines the
            traditional car rental experience in a truly remarkable way.
          </p>
        </div>

        <div className="reasons">
          <div className="reason">
            <i class="fa-solid fa-user-check"></i>
            <h2>Easy and Fast Booking</h2>
            <p>
              Completely carinate e business testing process whereas fully
              researched customer service. Globally extensive content with
              quality.
            </p>
          </div>

          <div className="reason">
            <i class="fa-solid fa-user-check"></i>
            <h2>Many PickUp Location</h2>
            <p>
              Enthusiastically magnetic initiatives with cross-platform sources.
              Dynamically target testing procedures through effective.
            </p>
          </div>

          <div className="reason">
            <i class="fa-solid fa-user-check"></i>
            <h2>Customer Satisfaction</h2>
            <p>
              Globally user centric method interactive. Seamlessly revolutionize
              unique portals corporate collaboration.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
