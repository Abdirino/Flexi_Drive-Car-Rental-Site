import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import CarListing from "./pages/Car-Listing/CarListing";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./ScrollToTop";
import CarDetails from "./pages/Car-Details/CarDetails";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500)
  }, [])
  return (
    <div className="App">
      {loading ? (<Loader />) : (<BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="car-listing" element={<CarListing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />

          <Route path="car-details" element={<CarDetails />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>)}
    </div>
  );
}

export default App;
