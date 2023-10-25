import React, { useState } from "react";
import "./pricing.css";

import StoreIMG from "../../Images/Flexi_Store IMG.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import RevealUp from "../Reveal/RevealUp";
import RevealRight from "../Reveal/RevealRight";

const Pricing = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="facts">
          <div className="head">
            <h1>Facts By The Numbers</h1>
            <div></div>
            <div></div>
          </div>
          <div className="Fact">
            <div className="fact">
              <div className="icon">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="detail">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={16} delay={0} duration={2} />
                  )}
                  K+
                </h2>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="fact">
              <div className="icon">
                <i class="fa-solid fa-car"></i>
              </div>
              <div className="detail">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={254} delay={0} duration={2} />
                  )}
                  +
                </h2>
                <p>Count Of Cars</p>
              </div>
            </div>
            <div className="fact">
              <div className="icon">
                <i class="fa-solid fa-headphones"></i>
              </div>
              <div className="detail">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={625} delay={0} duration={2} />
                  )}
                  +
                </h2>
                <p>Car Center Solutions</p>
              </div>
            </div>
            <div className="fact">
              <div className="icon">
                <i class="fa-solid fa-gauge-high"></i>
              </div>
              <div className="detail">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={600} delay={0} duration={2} />
                  )}
                  K+
                </h2>
                <p>Total Kilometers</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      <div className="application">
        <div className="details">
          <RevealUp>
            <h1>FlexiDrive User Friendly App Available</h1>
          </RevealUp>
          <RevealUp>
            <p>
              Appropriately monetize one-to-one interfaces rather than
              cutting-edge Competently disintermediation backward.
            </p>
          </RevealUp>
          <div className="buttons">
            <RevealRight>
              <span className="store-btn">
                <div className="store-icon">
                  <i class="fa-brands fa-google-play"></i>
                </div>
                <div className="text">
                  <p>Get it on</p>
                  <h3>Google Play</h3>
                </div>
              </span>
            </RevealRight>
            <RevealRight>
              <span className="store-btn">
                <div className="store-icon">
                  <i class="fa-brands fa-app-store"></i>
                </div>
                <div className="text">
                  <p>Get it on</p>
                  <h3>App Store</h3>
                </div>
              </span>
            </RevealRight>
          </div>
        </div>

          <div className="image">
        <RevealRight>
            <img src={StoreIMG} alt="" />
        </RevealRight>
          </div>
      </div>
    </>
  );
};

export default Pricing;
