import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./about.css";
import AboutHero from "../../Images/AboutHero.jpg";
import Pricing from "../../Components/Pricing/Pricing";

import AboutIMG from "../../Images/about_image.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={AboutHero} alt="" />
      </div>

      <div className="a-resize">
        <div className="About">
          <div className="A-detail">
            <h3>About our Company</h3>
            <h1>
              Engage the engine, <span>Fuel Your Journey</span> with
              Unforgettable Experiences.
            </h1>
            <p>
              Step into a world of endless exploration. Our well-maintained
              vehicles offer comfort and reliability for your adventures, from
              scenic country roads to majestic mountain passes. Your trusted
              companions for every journey.
            </p>
            <div className="a-icons">
              <div className="a-icon">
                <i class="fa-solid fa-car-side"></i>
                <h4>
                  20 <span>Car types</span>
                </h4>
              </div>
              <div className="a-icon">
                <i class="fa-solid fa-building"></i>
                <h4>
                  35 <span>Car Outlets</span>
                </h4>
              </div>
              <div className="a-icon">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <h4>
                  25 <span>Repair Stations</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="A-image">
            <img src={AboutIMG} alt="" />
          </div>
        </div>
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

        <div className="Reasons">
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
                Enthusiastically magnetic initiatives with cross-platform
                sources. Dynamically target testing procedures through
                effective.
              </p>
            </div>

            <div className="reason">
              <i class="fa-solid fa-user-check"></i>
              <h2>Customer Satisfaction</h2>
              <p>
                Globally user centric method interactive. Seamlessly
                revolutionize unique portals corporate collaboration.Globally
                extensive content with quality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
    </>
  );
};

export default About;
