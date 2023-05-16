import React from "react";
import "./pricing.css";

import StoreIMG from "../../Images/Flexi_Store IMG.png";

const Pricing = () => {
  return (
    <>
      <div className="facts">
        <div className="head">
          <h1>Facts By The Numbers</h1>
          <div></div>
          <div></div>
        </div>
        {/* <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            eligendi deserunt officia!
          </p>
        </div> */}
        <div className="Fact">
          <div className="fact">
            <div className="icon">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="detail">
              <h2>16K+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="fact">
            <div className="icon">
              <i class="fa-solid fa-car"></i>
            </div>
            <div className="detail">
              <h2>2547+</h2>
              <p>Count Of Cars</p>
            </div>
          </div>
          <div className="fact">
            <div className="icon">
              <i class="fa-solid fa-headphones"></i>
            </div>
            <div className="detail">
              <h2>625K+</h2>
              <p>Car Center Solutions</p>
            </div>
          </div>
          <div className="fact">
            <div className="icon">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <div className="detail">
              <h2>200K+</h2>
              <p>Total Kilometers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="application">
        <div className="details">
          <h1>FlexiDrive User Friendly App Available</h1>
          <p>
            Appropriately monetize one-to-one interfaces rather than
            cutting-edge Competently disintermediation backward.
          </p>
          <div className="buttons">
            <span className="store-btn">
              <div className="store-icon">
                <i class="fa-brands fa-google-play"></i>
              </div>
              <div className="text">
                <p>Get it on</p>
                <h3>Google Play</h3>
              </div>
            </span>
            <span className="store-btn">
              <div className="store-icon">
                <i class="fa-brands fa-app-store"></i>
              </div>
              <div className="text">
                <p>Get it on</p>
                <h3>App Store</h3>
              </div>
            </span>
          </div>
        </div>

        <div className="image">
          <img src={StoreIMG} alt="" />
        </div>
      </div>
    </>
  );
};

export default Pricing;
