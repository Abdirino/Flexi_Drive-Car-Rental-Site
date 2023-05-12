import './App.css'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
