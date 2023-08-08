import React from 'react'
import './booking.css'

import sportsCar from '../../Images/sport-car.png'
import callCenter from '../../Images/call-center-agent.png'
import drive from '../../Images/hands.png'
import ModelIMG from '../../Images/display_car_image.png'

const Booking = () => {
  return (
    <>
      <div className="Booking">
        <div className="booking">
          {/* <div className="book">
            <div className="book-head">
              <h1>Book a car</h1>
              <p><span>SAVE 15%</span> if you prepay your booking</p>
            </div>
          </div> */}
          <div className="processes">
            <h3>"Plan your trip now"</h3>
            <h1>Quick & <span>easy car</span> rental</h1>
            <div className="process">
              <div className="pro">
                <img src={sportsCar} alt="" />
                <h2>Select Car</h2>
                <p>To contribute to positive change and achieve
                  our sustainability goals with many extraordinary
                </p>
              </div>
              <div className="pro">
                <img src={callCenter} alt="" />
                <h2>Contact Operator</h2>
                <p>To contribute to positive change and achieve
                  our sustainability goals with many extraordinary
                </p>
              </div>
              <div className="pro">
                <img src={drive} alt="" />
                <h2>Let's Drive</h2>
                <p>To contribute to positive change and achieve
                  our sustainability goals with many extraordinary
                </p>
              </div>
            </div>
          </div>
          <div className="model">
            <h3>"Vehicle Models"</h3>
            <h1>Our <span>rental</span> fleet</h1>

            <div className="m-image">
              <img src={ModelIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking