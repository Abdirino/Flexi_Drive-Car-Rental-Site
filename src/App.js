import './App.css'
import About from './Components/About/About';
import Application from './Components/Application/Application';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Application />
      <About />
      <Footer />
    </div>
  );
}

export default App;
