import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeImg from "../../Images/My project.png";
import Listings from "../../Components/Listings/Listings";
import Navbar from "../../Components/Navbar/Navbar";
import Pricing from "../../Components/Pricing/Pricing";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home" id="home">
        <div className="home-dis">
          {/* <div className="trust">
          <i class="fa-solid fa-thumbs-up"></i>
          <p>100% Trusted car rental in the world!</p>
      </div> */}
          <div className="intro">
            <h1>
              Find Your Best <span>Dream Car For Rental</span>
            </h1>
            <p>
              When it comes to selecting the perfect dream car for rental, look
              no further than FlexiDrive, the premier luxury car rental service
              that takes your driving experience to new heights.
            </p>
            <div className="view">
              <Link to='/car-listing' style={{color :"white"}}><span>View all cars</span></Link>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="home-img">
          <img src={HomeImg} alt="Lambo-Home" />
        </div>
      </div>

      <Listings />

      <Pricing />

      <Footer />
    </>
  );
};

export default Home;
