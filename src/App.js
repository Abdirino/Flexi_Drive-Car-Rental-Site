import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Listings />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
