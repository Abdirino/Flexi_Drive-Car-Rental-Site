import React from "react";
import "./car-details.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// import "@splidejs/react-splide/css";

import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import Hero from "../../Images/Car-details.jpg";
import Booking from "../../Components/Booking/Booking";
import car1 from "../../Images/car-01.jpg";
import car2 from "../../Images/car-02.jpg";
import car3 from "../../Images/car-03.jpg";
import car4 from "../../Images/car-04.jpg";
import car5 from "../../Images/car-05.jpg";
import car6 from "../../Images/car-06.jpg";
import car7 from "../../Images/car-07.jpg";

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
          <div className="car-slider">
            <Splide
              options={{
                rewind: true,
                width: 800,
                gap: "1rem",
                autoplay: true,
                speed: 100,
                pauseOnHover: true,
              }}
            >
              <SplideSlide>
                <img src={car1} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car2} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car3} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car4} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car5} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car6} alt="" />
              </SplideSlide>
              <SplideSlide>
                <img src={car7} alt="" />
              </SplideSlide>
            </Splide>
            <div className="Detail-specs">
              <div className="D-spec">
                <h1>Specifications</h1>
                <div className="d-spec">
                  <p>Body  →</p>
                  <span>Ferrari</span>
                </div>
                <div className="d-spec">
                  <p>Seats  →</p>
                  <span>2 Seats</span>
                </div>
                <div className="d-spec">
                  <p>Luggage →</p>
                  <span>170</span>
                </div>
                <div className="d-spec">
                  <p>Engine  →</p>
                  <span>3000</span>
                </div>
                <div className="d-spec">
                  <p>Year →</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="D-Features">
                <h1>Features</h1>
                <div className="d-spec">
                  <i class="fa-solid fa-square-check"></i>
                  <span>Bluetooth</span>
                </div>
                <div className="d-spec">
                  <i class="fa-solid fa-square-check"></i>
                  <span>Multi Media</span>
                </div>
                <div className="d-spec">
                  <i class="fa-solid fa-square-check"></i>
                  <span>Sunroof</span>
                </div>
                <div className="d-spec">
                  <i class="fa-solid fa-square-check"></i>
                  <span>Central Lock</span>
                </div>
                <div className="d-spec">
                  <i class="fa-solid fa-square-check"></i>
                  <span>Automatic</span>
                </div>
              </div>
            </div>
          </div>

          <div className="car-application">
            <div className="head">
              <h2>
                Check <span>Availability</span>
              </h2>
              <div></div>
            </div>
            <h3>Pick up Location</h3>
            <input
              type="text"
              placeholder="45 4th Avenue Joggoo street Nairobi"
            />
            <h3>Drop off Location</h3>
            <input type="text" placeholder="78 10th Street Kajuja Nairobi" />
            <h3>Pick Up Date</h3>
            <input type="date" placeholder="4 / 11 / 2023" />
            <h3>Return Date</h3>
            <input type="date" placeholder="28 / 12 / 2023" />

            <button>Check Availability</button>
          </div>
        </div>
        <Booking />
      </div>

      <Footer />
    </>
  );
};

export default CarDetails;
