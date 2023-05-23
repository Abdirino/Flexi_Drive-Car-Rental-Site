import React from "react";
import './car-details.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const CarDetails = () => {
  return (
    <>
      <Navbar />
      <div className="car-details">Car Details</div>
      <Footer />
    </>
  );
};

export default CarDetails;
