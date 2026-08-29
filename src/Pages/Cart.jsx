import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/products/CartItem";

function Cart() {
  const [cart, setCart] = useState([]);

  // قراءة السلة من localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // تحديث السلة
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // زيادة الكمية
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  // نقصان الكمية
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  // حذف المنتج
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  };

  // عدد الحزم
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // المجموع
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="min-h-screen bg-[#FAF9F7] px-4 py-10 sm:px-6"
      dir="rtl"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Header */}
        <div className="mb-12 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#CFC6B5] text-3xl">
            🛒
          </div>

          <h1 className="mb-3 text-4xl font-extrabold text-[#7A5742]">
            سلة المنتجات
          </h1>

          <p className="text-gray-500">
            راجع الحزم والكميات قبل إتمام الطلب
          </p>

        </div>

        {cart.length === 0 ? (

          /* ================= السلة فارغة ================= */

          <div className="mx-auto max-w-2xl rounded-[32px] bg-white px-6 py-20 text-center shadow-sm">

            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#CFC6B5]/60 text-5xl">
              🛒
            </div>

            <h2 className="mb-3 text-2xl font-bold text-[#7A5742]">
              سلتك فارغة
            </h2>

            <p className="mb-8 text-gray-500">
              لم تتم إضافة أي منتجات إلى السلة بعد.
            </p>

            <Link
              to="/products"
              className="inline-flex rounded-2xl bg-[#7A5742] px-7 py-3 font-bold text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              تصفح المنتجات
            </Link>

          </div>

        ) : (

          /* ================= السلة تحتوي منتجات ================= */

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">

            {/* المنتجات */}
            <div>

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#7A5742]">
                  المنتجات المختارة
                </h2>

                <span className="rounded-full bg-[#CFC6B5] px-4 py-2 text-sm font-bold text-[#7A5742]">
                  {totalItems} حزمة
                </span>
              </div>

              <div className="flex flex-col gap-5">

                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                  />
                ))}

              </div>

            </div>

            {/* ================= ملخص الطلب ================= */}

            <div className="sticky top-90 overflow-hidden rounded-[32px] bg-white shadow-md">

              {/* رأس الملخص */}
              <div className="bg-[#7A5742] px-7 py-6 text-white">

                <h2 className="text-2xl font-bold">
                  ملخص الطلب
                </h2>

                <p className="mt-1 text-sm text-white/70">
                  تفاصيل طلبك الحالي
                </p>

              </div>

              <div className="p-7">

                {/* عدد الحزم */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-gray-500">
                    عدد الحزم
                  </span>

                  <span className="font-bold text-[#7A5742]">
                    {totalItems}
                  </span>
                </div>

                {/* عدد الأكياس */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-gray-500">
                    عدد الأكياس
                  </span>

                  <span className="font-bold text-[#7A5742]">
                    {totalItems * 100}
                  </span>
                </div>

                <div className="mb-6 border-t border-gray-100 pt-6">

                  <div className="flex items-end justify-between">
                    <span className="font-semibold text-gray-600">
                      المجموع
                    </span>

                    <span className="text-2xl font-extrabold text-[#7A5742]">
                      {total.toLocaleString()} د.ع
                    </span>
                  </div>

                </div>

                {/* إتمام الطلب */}
                <button
                  className="w-full rounded-2xl bg-[#7A5742] py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                  إتمام الطلب
                </button>

                {/* العودة للمنتجات */}
                <Link
                  to="/products"
                  className="mt-3 block w-full rounded-2xl border-2 border-[#CFC6B5] py-3 text-center font-bold text-[#7A5742] transition hover:bg-[#CFC6B5]/40"
                >
                  متابعة التسوق
                </Link>

              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;