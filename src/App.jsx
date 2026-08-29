import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./Pages/Home";
import EnvironmentalAwareness from "./Pages/EnvironmentalAwareness";
import AboutProject from "./Pages/AboutProject";
import ContactUs from "./Pages/ContactUs";
import Articles from "./Pages/Articles";
import ArticleDetails from "./Pages/ArticleDetails";
import Tips from "./Pages/Tips";

import Bakeries from "./Pages/Bakeries";
import BakeryStore from "./Pages/BakeryStore";
import BakeryCart from "./Pages/BakeryCart";

import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

      <div className={isHome ? "" : "pt-[108px]"}>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* البيئة */}
          <Route
            path="/environmental-awareness"
            element={<EnvironmentalAwareness />}
          />

          <Route path="/about-project" element={<AboutProject />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/tips" element={<Tips />} />

          {/* =========================
              المخابز
          ========================= */}
          <Route path="/bakeries" element={<Bakeries />} />

          <Route
            path="/bakery-store/:id"
            element={<BakeryStore />}
          />

          <Route
            path="/bakery-cart"
            element={<BakeryCart />}
          />

          {/* =========================
              المنتجات العامة
          ========================= */}
          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/product-details"
            element={<ProductDetails />}
          />

          {/* =========================
              المقالات
          ========================= */}
          <Route path="/articles" element={<Articles />} />

          <Route
            path="/article/:id"
            element={<ArticleDetails />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;