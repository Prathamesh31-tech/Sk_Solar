import { useState } from "react";
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
import Premier from "./pages/products/Premier/Premier";
import UTL from "./pages/products/UTL/UTL";

// Services
import Residential from "./pages/services/Residential/Residential";
import Commercial from "./pages/services/Commercial";
import Maintenance from "./pages/services/Maintenance";
import Industrial from "./pages/services/Industrial";

import ScrollToTop from "./ScrollToTop";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* 🌐 Public Pages */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Products */}
        <Route
          path="/tata"
          element={
            <>
              <Navbar />
              <Tata />
              <Footer />
            </>
          }
        />

        <Route
          path="/waaree"
          element={
            <>
              <Navbar />
              <Waaree />
              <Footer />
            </>
          }
        />

        <Route
          path="/adani"
          element={
            <>
              <Navbar />
              <Adani />
              <Footer />
            </>
          }
        />

        <Route
          path="/premier"
          element={
            <>
              <Navbar />
              <Premier />
              <Footer />
            </>
          }
        />

        <Route
          path="/utl"
          element={
            <>
              <Navbar />
              <UTL />
              <Footer />
            </>
          }
        />

        {/* Services */}
        <Route
          path="/residential"
          element={
            <>
              <Navbar />
              <Residential />
              <Footer />
            </>
          }
        />

        <Route
          path="/commercial"
          element={
            <>
              <Navbar />
              <Commercial />
              <Footer />
            </>
          }
        />

        <Route
          path="/maintenance"
          element={
            <>
              <Navbar />
              <Maintenance />
              <Footer />
            </>
          }
        />

        <Route
          path="/industrial"
          element={
            <>
              <Navbar />
              <Industrial />
              <Footer />
            </>
          }
        />

        {/* 🔐 Admin Login */}
        <Route path="/admin" element={<AdminLogin setToken={setToken} />} />

        {/* 🔒 Protected Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
