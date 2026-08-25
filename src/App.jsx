import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./Pages/Home";
import EnvironmentalAwareness from "./Pages/EnvironmentalAwareness";
import AboutProject from "./Pages/AboutProject";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/common/Footer";
import Articles from "./Pages/Articles";
import ArticleDetails from "./Pages/ArticleDetails";
import Tips from "./Pages/Tips";

import Bakeries from "./Pages/Bakeries";
import BakeryStore from "./Pages/BakeryStore";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

import Articles from "./Pages/Articles";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/environmental-awareness"
          element={<EnvironmentalAwareness />}
        />

        <Route path="/about-project" element={<AboutProject />} />

        <Route path="/contact-us" element={<ContactUs />} />
<Route path="/tips" element={<Tips />} />
        {/* Bakeries */}
        <Route path="/bakeries" element={<Bakeries />} />
        <Route path="/bakery-store/:id" element={<BakeryStore />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* Articles */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>

      <Footer />
    </>
   
  );
}

export default App;