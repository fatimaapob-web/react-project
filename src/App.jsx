import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import EnvironmentalAwareness from "./Pages/EnvironmentalAwareness";
import AboutProject from "./Pages/AboutProject";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/common/Footer";
import Articles from "./Pages/Articles";
import ArticleDetails from "./Pages/ArticleDetails";
import Tips from "./Pages/Tips";



function App() {
  return (
    <Router>
  <Navbar />

  <Routes>
    <Route path="/environmental-awareness" element={<EnvironmentalAwareness />} />
    <Route path="/about-project" element={<AboutProject />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/article/:id" element={<ArticleDetails />} />
    <Route path="/tips" element={<Tips />} />
  
  </Routes>

  <Footer />
</Router>
  );
}

export default App;