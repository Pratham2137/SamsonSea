import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate initial loading for the entire app
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // After 2 seconds, remove the loader
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />; // Show loader until the app is ready
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
