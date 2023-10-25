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
              We offer customers a wide range of <span>commercial cars</span>{" "}
              and <span>luxury cars</span> for any occasion.
            </h1>
            <p>
              At FlexiDrive, we are dedicated to providing exceptional car
              rental services to our valued customers. With a commitment to
              quality, convenience, and customer satisfaction, we strive to make
              every rental experience a seamless and enjoyable one.
            </p>
            <div className="a-icons">
              <div className="a-icon">
                <i class="fa-solid fa-car-side"></i>
                <h4>
                  42 <span>Car types</span>
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
                  325 <span>Repair Stations</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="A-image">
            <img src={AboutIMG} alt="" />
          </div>
        </div>
      </div>

      <Pricing />

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
      <Footer />
    </>
  );
};

export default About;
