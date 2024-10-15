import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound"; // Create a NotFound component for handling 404 pages

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for undefined paths */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
