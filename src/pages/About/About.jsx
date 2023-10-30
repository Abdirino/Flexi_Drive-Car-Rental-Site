import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./about.css";
import Pricing from "../../Components/Pricing/Pricing";

import AboutIMG from "../../Images/about_image.jpg";
import RevealUp from "../../Components/Reveal/RevealUp";
import RevealRight from "../../Components/Reveal/RevealRight";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="a-resize">
        <div className="About">
          <div className="A-detail">
            <RevealUp>
              <h3>About our Company</h3>
            </RevealUp>
            <RevealRight>
              <h1>
                We offer customers a wide range of <span>commercial cars</span>{" "}
                and <span>luxury cars</span> for any occasion.
              </h1>
            </RevealRight>
            <RevealUp>
              <p>
                At FlexiDrive, we are dedicated to providing exceptional car
                rental services to our valued customers. With a commitment to
                quality, convenience, and customer satisfaction, we strive to
                make every rental experience a seamless and enjoyable one.
              </p>
            </RevealUp>
            <div className="a-icons">
              <RevealRight>
                <div className="a-icon">
                  <i class="fa-solid fa-car-side"></i>
                  <h4>
                    42 <span>Car types</span>
                  </h4>
                </div>
              </RevealRight>
              <RevealRight>
                <div className="a-icon">
                  <i class="fa-solid fa-building"></i>
                  <h4>
                    35 <span>Car Outlets</span>
                  </h4>
                </div>
              </RevealRight>
              <RevealRight>
                <div className="a-icon">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                  <h4>
                    325 <span>Repair Stations</span>
                  </h4>
                </div>
              </RevealRight>
            </div>
          </div>
          <div className="A-image">
            <img src={AboutIMG} alt="" />
          </div>
        </div>
      </div>

      <Pricing />
      <Footer />
    </>
  );
};

export default About;
