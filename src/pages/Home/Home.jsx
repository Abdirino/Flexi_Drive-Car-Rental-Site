import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeImg from "../../Images/Booking-car.png";
import Listings from "../../Components/Listings/Listings";
import Navbar from "../../Components/Navbar/Navbar";
import Pricing from "../../Components/Pricing/Pricing";
import Footer from "../../Components/Footer/Footer";
import Booking from "../../Components/Booking/Booking";
import RevealUp from "../../Components/Reveal/RevealUp";
import RevealRight from "../../Components/Reveal/RevealRight";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="home" id="home">
          <div className="home-dis">
            <div className="intro">
              <RevealUp>
                <h2>"Craft Your Perfect Journey Now"</h2>
              </RevealUp>
              <RevealRight>
                <h1>
                  Find Your Ideal <span>Dream Car For Rental</span>
                </h1>
              </RevealRight>
              <RevealUp>
                <p>
                  When it comes to selecting the perfect dream car for rental,
                  look no further than FlexiDrive, the premier luxury car rental
                  service that takes your driving experience to new heights.
                </p>
              </RevealUp>
              <RevealRight>
                <div className="views">
                  <div className="view">
                    <Link to="/car-listing" style={{ color: "white" }}>
                      <span>Explore all cars</span>
                    </Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </RevealRight>
            </div>
          </div>

            <div className="home-img">
              <img src={HomeImg} alt="Lambo-Home" loading="lazy" />
            </div>
        </div>
      </div>
      <Listings />
      <Booking />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
