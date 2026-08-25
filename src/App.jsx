import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";

import Home from "./Pages/Home";
import EnvironmentalAwareness from "./Pages/EnvironmentalAwareness";
import AboutProject from "./Pages/AboutProject";
import ContactUs from "./Pages/ContactUs";
import Bakeries from "./Pages/Bakeries";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import BakeryStore from "./Pages/BakeryStore";

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
        <Route path="/bakery-store/:id" element={<BakeryStore />} />



        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/bakeries" element={<Bakeries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;