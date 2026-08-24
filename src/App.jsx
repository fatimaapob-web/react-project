import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import EnvironmentalAwareness from "./Pages/EnvironmentalAwareness";
import AboutProject from "./Pages/AboutProject";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
  <Navbar />

  <Routes>
    <Route path="/environmental-awareness" element={<EnvironmentalAwareness />} />
    <Route path="/about-project" element={<AboutProject />} />
    <Route path="/contact-us" element={<ContactUs />} />
  </Routes>

  <Footer />
</Router>
  );
}

export default App;