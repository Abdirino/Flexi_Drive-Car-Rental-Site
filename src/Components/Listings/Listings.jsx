import React from "react";
import "./listings.css";
import Tesla from "../../Images/icons8-tesla-64.png";
import Mitsubishi from "../../Images/icons8-mitsubishi-50.png";
import Jeep from "../../Images/icons8-jeep-50.png";
import Toyota from "../../Images/icons8-toyota-100.png";
import Infiniti from "../../Images/icons8-infiniti-100.png";
import McLaren from "../../Images/icons8-mclaren-100.png";

const Listings = () => {
  return (
    <div className="listings">
      <div className="head">
        <h1>Explore Most Popular Cars</h1>
        <div></div>
        <div></div>
      </div>

      <div className="car-logo">
        <div className="logo">
          <img src={Tesla} alt="Tesla Logo" />
          <p>Tesla</p>
        </div>
        <div className="logo">
          <img src={Mitsubishi} alt="Tesla Logo" />
          <p>Mitsubishi</p>
        </div>
        <div className="logo">
          <img src={Jeep} alt="Tesla Logo" />
          <p>Jeep</p>
        </div>
        <div className="logo">
          <img src={Toyota} alt="Tesla Logo" />
          <p>Toyota</p>
        </div>
        <div className="logo">
          <img src={Infiniti} alt="Tesla Logo" />
          <p>Infiniti</p>
        </div>
        <div className="logo">
          <img src={McLaren} alt="Tesla Logo" />
          <p>McLaren</p>
        </div>
      </div>

      <div className="car-list">

        <div className="car">
          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="info">
            <h2>Toyota Camry SE 350</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="price">
            <p>Germany</p>
            <h3>$450 <span>/per Day</span></h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>
        
        <div className="car">
          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="info">
            <h2>Toyota Camry SE 350</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="price">
            <p>Germany</p>
            <h3>$450 <span>/per Day</span></h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>

        <div className="car">
          <div className="image">
            <img src="" alt="" />
          </div>

          <div className="info">
            <h2>Toyota Camry SE 350</h2>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="price">
            <p>Germany</p>
            <h3>$450 <span>/per Day</span></h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Listings;
