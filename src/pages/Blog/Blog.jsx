import React from 'react'
import './blog.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

import BlogHero from '../../Images/Blog-Hero.jpg';

const Blog = () => {
  return (
    <>
        <Navbar />
        <div className="hero">
            <img src={BlogHero} alt="" />
        </div>
        <div className='blog'>Blog</div>
        <Footer />
    </>
  )
}

export default Blog