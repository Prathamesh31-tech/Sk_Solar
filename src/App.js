import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Project/Projects";

// Products
import Tata from "./pages/products/Tata/Tata";
import Waaree from "./pages/products/Waaree/Waaree";
import Adani from "./pages/products/Adani/Adani";
import Premier from "./pages/products/Premier";
import UTL from "./pages/products/UTL";

// Services
import Residential from "./pages/services/Residential";
import Commercial from "./pages/services/Commercial";
import Maintenance from "./pages/services/Maintenance";
import Industrial from "./pages/services/Industrial";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products */}
        <Route path="/tata" element={<Tata />} />
        <Route path="/waaree" element={<Waaree />} />
        <Route path="/adani" element={<Adani />} />
        <Route path="/premier" element={<Premier />} />
        <Route path="/utl" element={<UTL />} />

        {/* Services */}
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/industrial" element={<Industrial />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
