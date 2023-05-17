import React from "react";
import "./listings.css";
import Tesla from "../../Images/icons8-tesla-64.png";
import Mitsubishi from "../../Images/icons8-mitsubishi-50.png";
import Jeep from "../../Images/icons8-jeep-50.png";
import Toyota from "../../Images/icons8-toyota-100.png";
import Infiniti from "../../Images/icons8-infiniti-100.png";
import McLaren from "../../Images/icons8-mclaren-100.png";

import Car1 from "../../Images/car-01.jpg";
import Car5 from "../../Images/car-05.jpg";
import Car3 from "../../Images/car-03.jpg";

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
            <img src={Car1} alt="" />
          </div>

          <div className="info">
            <h2>Toyota Camry SE 350</h2>
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

            <div className="specs">
              <div className="spec">
                <i class="fa-solid fa-car"></i>
                <p>Manual</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gauge"></i>
                <p>10 KM</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gas-pump"></i>
                <p>Petrol</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-power-off"></i>
                <p>Power</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-car-side"></i>
                <p>2012</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-person"></i>
                <p>5 Persons</p>
              </div>
            </div>
          </div>

          <div className="price">
            <p>China</p>
            <h3>
              $450 <span>/per Day</span>
            </h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>

        <div className="car">
          <div className="image">
            <img src={Car5} alt="" />
          </div>

          <div className="info">
            <h2>2018 Chevrolet Camaro</h2>
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

            <div className="specs">
              <div className="spec">
                <i class="fa-solid fa-car"></i>
                <p>Manual</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gauge"></i>
                <p>15 KM</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gas-pump"></i>
                <p>Petrol</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-power-off"></i>
                <p>Power</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-car-side"></i>
                <p>2018</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-person"></i>
                <p>5 Persons</p>
              </div>
            </div>
          </div>

          <div className="price">
            <p>Germany</p>
            <h3>
              $450 <span>/per Day</span>
            </h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>

        <div className="car">
          <div className="image">
            <img src={Car3} alt="" />
          </div>

          <div className="info">
            <h2>Audi A3 2019</h2>
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

            <div className="specs">
              <div className="spec">
                <i class="fa-solid fa-car"></i>
                <p>Manual</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gauge"></i>
                <p>18 KM</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-gas-pump"></i>
                <p>Petrol</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-power-off"></i>
                <p>Power</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-car-side"></i>
                <p>2019</p>
              </div>
              <div className="spec">
                <i class="fa-solid fa-person"></i>
                <p>5 Persons</p>
              </div>
            </div>
          </div>

          <div className="price">
            <p>USA</p>
            <h3>
              $450 <span>/per Day</span>
            </h3>
          </div>

          <div className="rent">
            <h2>Rent Now</h2>
          </div>
        </div>
      </div>
      <div className="view">
        <span>View all cars</span>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Listings;
