import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

import ProductCard from "../components/products/ProductCard";

const products = [
  {
    id: 1,
    name: "حزمة أكياس ورقية كبيرة",
    price: 3000,
    description:
      "حزمة تحتوي على 100 كيس ورقي بحجم كبير، مناسبة للخبز والمنتجات الكبيرة.",
    image: image1,
  },
  {
    id: 2,
    name: "حزمة أكياس ورقية متوسطة",
    price: 2000,
    description:
      "حزمة تحتوي على 100 كيس ورقي بحجم متوسط، مناسبة للاستخدام اليومي.",
    image: image2,
  },
  {
    id: 3,
    name: "حزمة أكياس ورقية صغيرة",
    price: 1000,
    description:
      "حزمة تحتوي على 100 كيس ورقي بحجم صغير، مناسبة للمنتجات الخفيفة.",
   image: image3,
  },
];

function Products() {
  const [message, setMessage] = useState("");

  // إضافة المنتج إلى السلة
  const addToCart = (product) => {
    const savedCart = localStorage.getItem("cart");

    const cart = savedCart ? JSON.parse(savedCart) : [];

    // البحث عن المنتج إذا كان موجودًا
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // إذا موجود نزيد الكمية
      existingProduct.quantity += 1;
    } else {
      // إذا غير موجود نضيفه بكمية 1
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    // حفظ السلة
    localStorage.setItem("cart", JSON.stringify(cart));

    // إظهار رسالة
    setMessage(`تمت إضافة ${product.name} إلى السلة`);

    // إخفاء الرسالة
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-[#FAF9F7] py-10"
      dir="rtl"
    >
      {/* عنوان الصفحة */}
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#7A5742]">
          منتجاتنا
        </h1>

        <p className="text-lg text-gray-600">
          اختر الحجم المناسب لك من أكياسنا الورقية الصديقة للبيئة
        </p>
      </div>



      {/* المنتجات */}
      <div className="mx-auto w-full max-w-[1700px] px-6">

        <div className="flex flex-wrap justify-center gap-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[500px]"
            >
              <ProductCard
                product={product}
                onAddToCart={addToCart}
              />
            </div>
          ))}

        </div>

        {/* زر السلة */}
{/* رسالة الإضافة + زر السلة */}
<div className="mt-12 flex flex-col items-center gap-3">

  {/* رسالة الإضافة */}
  {message && (
    <div className="animate-slide-up rounded-2xl bg-[#CFC6B5] px-7 py-3 font-semibold text-[#7A5742] shadow-md">
      <span className="ml-2">✓</span>
      {message}
    </div>
  )}

  {/* زر السلة */}
  <Link
    to="/cart"
    className="flex items-center gap-2 rounded-2xl bg-[#7A5742] px-7 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
  >
    🛒
    سلة المنتجات
  </Link>

</div>

      </div>
    </div>
  );
}

export default Products;