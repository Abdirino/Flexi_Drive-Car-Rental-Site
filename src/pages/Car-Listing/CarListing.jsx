import React from "react";
import './car-listing.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import CarHero from '../../Images/Car-Listing-Hero.jpg';

import Car1 from "../../Images/car-01.jpg";
import Car5 from "../../Images/car-05.jpg";
import Car3 from "../../Images/car-03.jpg";

const CarListing = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={CarHero} alt="" />
      </div>
      
      <div className="head">
        <h1>Discover Most Popular Cars</h1>
        <div></div>
        <div></div>
      </div>

      <div className="car-listing">
        <div className="search">
          <h2>What are you looking for</h2>
          <span>
            <p>Search here...</p>
            <i className="fas fa-search"></i>
          </span>
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
      </div>
      <Footer />
    </>
  );
};

export default CarListing;
