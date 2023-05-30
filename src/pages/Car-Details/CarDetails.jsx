import React from "react";
import "./car-details.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import Hero from "../../Images/Car-details.jpg";
// import car1 from "../../Images/car-01.jpg";
// import car2 from "../../Images/car-02.jpg";
// import car3 from "../../Images/car-03.jpg";
// import car4 from "../../Images/car-04.jpg";
// import car5 from "../../Images/car-05.jpg";
// import car6 from "../../Images/car-06.jpg";
// import car7 from "../../Images/car-07.jpg";

const CarDetails = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <img src={Hero} alt="" />
      </div>

      <div className="car-details">
        
        <div className="des">
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

            <div className="rate">
              <p>(5.0)</p>
            </div>
          </div>
          <h2>
            <span>2023</span>Chevrolet Camaro
          </h2>
        </div>

        <div className="car-app">
          {/* <div className="car-scroll">
            <Carousel>
              <div className="car-image">
                <img src={car5} alt="car1" />
              </div>
              <div className="car-image">
                <img src={car2} alt="car2" />
              </div>
              <div className="car-image">
                <img src={car3} alt="car3" />
              </div>
              <div className="car-image">
                <img src={car4} alt="car3" />
              </div>
              <div className="car-image">
                <img src={car1} alt="car3" />
              </div>
              <div className="car-image">
                <img src={car6} alt="car3" />
              </div>
              <div className="car-image">
                <img src={car7} alt="car3" />
              </div>
            </Carousel>
          </div> */}

          <div className="car-application">
            <div className="head">
              <h2>Check <span>Availability</span></h2>
              <div></div>
            </div>
            <h3>Pick up Location</h3>
            <input type="text" placeholder="45 4th Avenue Joggoo street Nairobi"/>
            <h3>Drop off Location</h3>
            <input type="text" placeholder="78 10th Street Kajuja Nairobi"/>
            <h3>Pick Up Date</h3>
            <input type="text" placeholder="4 / 11 / 2023"/>
            <h3>Return Date</h3>
            <input type="text" placeholder="28 / 12 / 2023"/>

            <button>Check Availability</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default CarDetails;
