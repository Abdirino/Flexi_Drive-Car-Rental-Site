import React from "react";
import "./blog.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import BlogHero from "../../Images/Blog-Hero.jpg";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={BlogHero} alt="" />
      </div>
      <div className="blog">
        <div className="B-blog">
          
          <div className="Blog">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="detail">
              <span>Car Showcase</span>

              <h2>Tesla Model S: Top Secret Car Collector’s Garage</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>
            </div>
          </div>
        </div>

        <div className="S-blog"></div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
