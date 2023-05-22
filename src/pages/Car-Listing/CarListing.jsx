import React from "react";
import "./car-listing.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import CarHero from "../../Images/Car-Listing-Hero.jpg";

import Car1 from "../../Images/car-01.jpg";
import Car5 from "../../Images/car-05.jpg";
import Car3 from "../../Images/car-03.jpg";
import Car9 from "../../Images/car-09.jpg";
import Car2 from "../../Images/car-02.jpg";
import Car7 from "../../Images/car-07.jpg";
import Car8 from "../../Images/car-08.jpg";
import Car6 from "../../Images/car-06.jpg";
import Car4 from "../../Images/car-04.jpg";

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
        {/* <div className="search">
          <h2>What are you looking for</h2>
          <span>
            <p>Search here...</p>
            <i className="fas fa-search"></i>
          </span>
        </div> */}
        <div className="para">
          <p>
            Determining the most popular cars requires considering various
            factors such as sales figures, market demand, and consumer
            preferences.
          </p>
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
                $350 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car9} alt="" />
            </div>

            <div className="info">
              <h2>Acura RDX FWD</h2>
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
                  <p>28 KM</p>
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
                  <p>2021</p>
                </div>
                <div className="spec">
                  <i class="fa-solid fa-person"></i>
                  <p>5 Persons</p>
                </div>
              </div>
            </div>

            <div className="price">
              <p>Uruguay</p>
              <h3>
                $110 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car2} alt="" />
            </div>

            <div className="info">
              <h2>Kia Soul 2016</h2>
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
                  <p>2016</p>
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
                $90 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car7} alt="" />
            </div>

            <div className="info">
              <h2>Chevrolet Pick Truck 3.5L</h2>
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
                  <p>38 KM</p>
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
              <p>USA</p>
              <h3>
                $70 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car8} alt="" />
            </div>

            <div className="info">
              <h2>Toyota Tacoma 4WD</h2>
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
                  <p>42 KM</p>
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
                  <p>2013</p>
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
                $150 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car6} alt="" />
            </div>

            <div className="info">
              <h2>Acura Sport Version</h2>
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
                  <p>13 KM</p>
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
                  <p>2014</p>
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
                $85 <span>/per Day</span>
              </h3>
            </div>

            <div className="rent">
              <h2>Rent Now</h2>
            </div>
          </div>

          <div className="car">
            <div className="image">
              <img src={Car4} alt="" />
            </div>

            <div className="info">
              <h2>Ferrari 458 MM Speciale</h2>
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
                  <p>8 KM</p>
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
                  <p>2020</p>
                </div>
                <div className="spec">
                  <i class="fa-solid fa-person"></i>
                  <p>2 Persons</p>
                </div>
              </div>
            </div>

            <div className="price">
              <p>USA</p>
              <h3>
                $250 <span>/per Day</span>
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
                  <p>24 KM</p>
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
                  <p>2 Persons</p>
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

          <div className="next">
            <p>Prev</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>Next</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarListing;
