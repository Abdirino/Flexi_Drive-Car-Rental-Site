import React from "react";
import "./blog.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import BlogHero from "../../Images/Blog-Hero.jpg";

import blog1 from "../../Images/blog-1.jpg";
import blog2 from "../../Images/blog-2.jpg";
import blog3 from "../../Images/blog-3.jpg";
import blog4 from "../../Images/blog-4.jpg";
import blog5 from "../../Images/blog-5.jpg";
import blog6 from "../../Images/blog-6.jpg";
import Avatar13 from "../../Images/avatar-13.jpg";
import RevealUp from "../../Components/Reveal/RevealUp";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={BlogHero} alt="" />
      </div>
      <RevealUp>
        <div className="head">
          <h1> Our Blogs</h1>
          <div></div>
          <div></div>
        </div>
      </RevealUp>

      <div className="blog">
        <div className="B-blog">
          <div className="Blog">
            <div className="b-image">
              <img src={blog1} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>Tesla Model S: Top Secret Car Collector’s Garage</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="Blog">
            <div className="b-image">
              <img src={blog6} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>The 2023 All New Ford F-150 Raptor – A First Look</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="Blog">
            <div className="b-image">
              <img src={blog5} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>Tesla Model S: Top Secret Car Collector’s Garage</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="Blog">
            <div className="b-image">
              <img src={blog4} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>The 2023 All New Ford F-150 Raptor – A First Look</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="Blog">
            <div className="b-image">
              <img src={blog3} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>Tesla Model S: Top Secret Car Collector’s Garage</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="Blog">
            <div className="b-image">
              <img src={blog2} alt="" />
            </div>
            <div className="blog-detail">
              <span>Car Showcase</span>

              <h2>The 2023 All New Ford F-150 Raptor – A First Look</h2>

              <p>
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone...
              </p>

              <div className="blogger">
                <div className="image">
                  <img src={Avatar13} alt="" />
                </div>
                <div className="blog-date">
                  <p>Jan 6th 2023</p>
                </div>
              </div>

              <div className="view">
                <p>Read More</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="next">
            <p>Prev</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>Next</p>
          </div>
        </div>

        <div className="S-blog"></div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
