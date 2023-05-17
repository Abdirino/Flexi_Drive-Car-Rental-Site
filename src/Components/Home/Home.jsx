import React from "react";
import "./home.css";
import HomeImg from "../../Images/My project.png";

const Home = () => {
  return (
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
            When it comes to selecting the perfect dream car for rental, look no
            further than FlexiDrive, the premier luxury car rental service that
            takes your driving experience to new heights.
          </p>
          <div className="view">
            <span>View all cars</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="home-img">
        <img src={HomeImg} alt="Lambo-Home" />
      </div>
    </div>
  );
};

export default Home;
