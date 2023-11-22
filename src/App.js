import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VR from "./Components/VR"

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <VR/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
