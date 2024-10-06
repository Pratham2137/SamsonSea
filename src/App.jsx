import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const location = useLocation(); // Hook to get the current location
  const [loading, setLoading] = useState(false); // State to handle loader visibility

  // This effect will trigger on every route change
  useEffect(() => {
    setLoading(true); // Show loader
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after a delay (simulate loading time)
    }, 700); // Set the delay as needed (1 second in this case)

    return () => clearTimeout(timer); // Cleanup timeout when component unmounts or route changes
  }, [location]); // Dependency on location, so it runs on every route change

  if (loading) {
    return <Loader />; // Show loader while loading the new route
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
