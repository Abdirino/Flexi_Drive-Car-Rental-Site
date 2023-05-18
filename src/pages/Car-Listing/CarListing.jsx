import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import CarHero from '../../Images/Car-Listing-Hero.jpg';

const CarListing = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={CarHero} alt="" />
      </div>
      <div className="car-listing">Car-Listing</div>
      <Footer />
    </>
  );
};

export default CarListing;
