import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './contact.css'

import ContactHero from '../../Images/Conatct-Hero.jpg'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="hero">
        <img src={ContactHero} alt="" />
    </div>
    <div>Contact</div>
    
    <Footer />
    </>
  )
}

export default Contact