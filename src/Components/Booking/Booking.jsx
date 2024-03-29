import React from "react";
import "./booking.css";

import ModelIMG from "../../Images/display_car_image.png";
import RevealUp from "../Reveal/RevealUp";
import RevealRight from "../Reveal/RevealRight";

const Booking = () => {
  return (
    <>
      <div className="Booking">
        <div className="booking">
          <div className="processes">
            <RevealUp>
              <h3>"Plan your trip now"</h3>
            </RevealUp>
            <RevealUp>
              <h1>
                Let Your <span>Adventure</span> Begin
              </h1>
            </RevealUp>
            <div className="process">
              <RevealRight>
                <div className="pro">
                  <i class="fa-solid fa-trophy"></i>
                  <h2>First Class Services</h2>
                  <p>
                    Where luxury meets exceptional care, creating and exceeding
                    your every expectation.
                  </p>
                </div>
              </RevealRight>
              <RevealRight>
                <div className="pro">
                  <i class="fa-solid fa-road"></i>
                  <h2>24/7 Road Assistance</h2>
                  <p>
                    Reliable support when you need it most, keeping you on the
                    move with confidence and peace of mind.
                  </p>
                </div>
              </RevealRight>
              <RevealRight>
                <div className="pro">
                  <i class="fa-solid fa-map-pin"></i>
                  <h2>Free Pick-Up & Drop-Off</h2>
                  <p>
                    Enjoy free pickup and drop-off services, adding an extra
                    layer of ease to your car rental experience.
                  </p>
                </div>
              </RevealRight>
            </div>
          </div>
          <div className="model">
            <RevealUp>
              <h3>"Vehicle Models"</h3>
            </RevealUp>
            <RevealUp>
              <h1>
                Our <span>rental</span> fleet
              </h1>
            </RevealUp>

            <div className="m-image">
              <RevealUp>
                <img src={ModelIMG} alt="" />
              </RevealUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
