
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BakeryCart() {
  const [cart, setCart] = useState({
    subscription: null,
    products: [],
  });

  const [withdrawAmount, setWithdrawAmount] = useState(5);
  const [message, setMessage] = useState("");

  // =========================
  // قراءة السلة
  // =========================

  useEffect(() => {
    const savedCart = localStorage.getItem("bakeryCart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        setCart({
          subscription: parsedCart.subscription || null,
          products: Array.isArray(parsedCart.products)
            ? parsedCart.products
            : [],
        });
      } catch {
        setCart({
          subscription: null,
          products: [],
        });
      }
    }
  }, []);

  // =========================
  // تحديث السلة
  // =========================

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "bakeryCart",
      JSON.stringify(updatedCart)
    );
  };

  // =========================
  // زيادة كمية المنتج
  // =========================

  const increaseQuantity = (productId) => {
    const updatedProducts = cart.products.map((product) =>
      product.id === productId
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product
    );

    updateCart({
      ...cart,
      products: updatedProducts,
    });
  };

  // =========================
  // إنقاص كمية المنتج
  // =========================

  const decreaseQuantity = (productId) => {
    const updatedProducts = cart.products
      .map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
      .filter((product) => product.quantity > 0);

    updateCart({
      ...cart,
      products: updatedProducts,
    });
  };

  // =========================
  // حذف المنتج
  // =========================

  const removeProduct = (productId) => {
    const updatedProducts = cart.products.filter(
      (product) => product.id !== productId
    );

    updateCart({
      ...cart,
      products: updatedProducts,
    });
  };

  // =========================
  // حذف الاشتراك
  // =========================

  const removeSubscription = () => {
    updateCart({
      ...cart,
      subscription: null,
    });

    setMessage("");
  };

  // =========================
  // رصيد الاشتراك
  // =========================

  const subscriptionBalance = cart.subscription
    ? cart.subscription.remainingAmount ??
      cart.subscription.amount
    : 0;

  // =========================
  // زيادة السحب
  // =========================

  const increaseWithdraw = () => {
    if (!cart.subscription) return;

    if (withdrawAmount < subscriptionBalance) {
      setWithdrawAmount((prev) => Number(prev) + 1);
    }
  };

  // =========================
  // إنقاص السحب
  // =========================

  const decreaseWithdraw = () => {
    if (withdrawAmount > 1) {
      setWithdrawAmount((prev) => Number(prev) - 1);
    }
  };

  // =========================
  // تأكيد السحب
  // =========================

  const handleWithdraw = () => {
    if (!cart.subscription) {
      setMessage("لا يوجد اشتراك في السلة.");
      return;
    }

    const amount = Number(withdrawAmount);

    if (!amount || amount <= 0) {
      setMessage("يرجى اختيار كمية صحيحة.");
      return;
    }

    if (subscriptionBalance <= 0) {
      setMessage("خلص رصيدك بالكامل.");
      return;
    }

    if (amount > subscriptionBalance) {
      setMessage(
        `لا يمكنك سحب ${amount} خبزة. رصيدك المتبقي ${subscriptionBalance} خبزة.`
      );
      return;
    }

    const newBalance = subscriptionBalance - amount;

    const updatedSubscription = {
      ...cart.subscription,
      remainingAmount: newBalance,
    };

    const updatedCart = {
      ...cart,
      subscription: updatedSubscription,
    };

    updateCart(updatedCart);

    setWithdrawAmount(
      newBalance > 0 ? Math.min(5, newBalance) : 0
    );

    if (newBalance === 0) {
      setMessage(
        `تم سحب ${amount} خبزة بنجاح 🎉 خلص رصيدك بالكامل.`
      );
    } else {
      setMessage(
        `تم سحب ${amount} خبزة بنجاح. متبقي لديك ${newBalance} خبزة.`
      );
    }
  };

  // =========================
  // الحسابات
  // =========================

  const productsTotal = cart.products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  const subscriptionTotal = cart.subscription
    ? cart.subscription.price
    : 0;

  const total = productsTotal + subscriptionTotal;

  const isEmpty =
    !cart.subscription && cart.products.length === 0;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FAF9F7] px-5 py-10 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* =========================
            العنوان
        ========================= */}

        <div className="mb-10">

          <Link
            to="/bakeries"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#7A5742] transition hover:bg-[#CFC6B5]/30"
          >
            <span>→</span>
            العودة إلى المخابز
          </Link>

          <div className="mt-6">

            <span className="text-sm font-bold tracking-widest text-[#7A5742]/55">
              سلة المخبز
            </span>

            <h1 className="mt-2 text-4xl font-black text-[#7A5742]">
              طلبك جاهز 🛒
            </h1>

            <p className="mt-3 text-[#7A5742]/60">
              راجع اشتراكك ومنتجاتك قبل إتمام الطلب.
            </p>

          </div>
        </div>

        {/* =========================
            السلة فارغة
        ========================= */}

        {isEmpty ? (
          <section className="rounded-[2rem] border border-[#CFC6B5]/50 bg-white p-10 text-center shadow-sm">

            <div className="text-7xl">
              🛒
            </div>

            <h2 className="mt-6 text-2xl font-black text-[#7A5742]">
              السلة فارغة
            </h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-[#7A5742]/60">
              لم تضف أي اشتراك أو منتجات إلى سلة المخبز بعد.
            </p>

            <Link
              to="/bakeries"
              className="mt-7 inline-flex rounded-2xl bg-[#7A5742] px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#684936]"
            >
              تصفح المخابز
            </Link>

          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

            {/* =========================
                العناصر
            ========================= */}

            <div className="space-y-6">

              {/* =========================
                  الاشتراك
              ========================= */}

              {cart.subscription && (
                <section className="overflow-hidden rounded-[2rem] border border-[#CFC6B5]/60 bg-white shadow-sm">

                  <div className="border-b border-[#CFC6B5]/40 bg-[#CFC6B5]/20 px-6 py-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <span className="text-xs font-bold text-[#7A5742]/55">
                          الاشتراك الشهري
                        </span>

                        <h2 className="mt-1 text-xl font-black text-[#7A5742]">
                          {cart.subscription.name}
                        </h2>
                      </div>

                      <span className="rounded-full bg-[#7A5742] px-3 py-1.5 text-xs font-bold text-white">
                        🌾 اشتراك
                      </span>

                    </div>

                  </div>

                  <div className="p-6">

                    {/* معلومات الاشتراك */}

                    <div className="flex items-center gap-4">

                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#CFC6B5]/40 text-4xl">
                        {cart.subscription.emoji}
                      </div>

                      <div className="flex-1">

                        <p className="text-sm text-[#7A5742]/55">
                          قيمة الاشتراك
                        </p>

                        <p className="mt-1 text-xl font-black text-[#7A5742]">
                          {cart.subscription.price.toLocaleString(
                            "ar-IQ"
                          )}{" "}
                          <span className="text-xs">
                            د.ع / شهريًا
                          </span>
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={removeSubscription}
                        className="rounded-xl px-3 py-2 text-sm font-bold text-[#7A5742]/50 transition hover:bg-[#CFC6B5]/30 hover:text-[#7A5742]"
                      >
                        حذف
                      </button>

                    </div>

                    {/* =========================
                        الرصيد
                    ========================= */}

                    <div className="mt-7 rounded-[1.7rem] bg-[#FAF9F7] p-6">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-sm font-bold text-[#7A5742]/55">
                            الرصيد المتبقي
                          </p>

                          <div className="mt-1 flex items-end gap-2">

                            <span className="text-4xl font-black text-[#7A5742]">
                              {subscriptionBalance}
                            </span>

                            <span className="pb-1 text-sm font-bold text-[#7A5742]/55">
                              خبزة
                            </span>

                          </div>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CFC6B5]/50 text-2xl">
                          🥖
                        </div>

                      </div>

                      {/* شريط الرصيد */}

                      <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#CFC6B5]/40">

                        <div
                          className="h-full rounded-full bg-[#7A5742] transition-all duration-500"
                          style={{
                            width: `${
                              cart.subscription.amount > 0
                                ? (subscriptionBalance /
                                    cart.subscription.amount) *
                                  100
                                : 0
                            }%`,
                          }}
                        />

                      </div>

                      <p className="mt-2 text-xs text-[#7A5742]/50">
                        من أصل {cart.subscription.amount} خبزة
                      </p>

                    </div>

                    {/* =========================
                        السحب
                    ========================= */}

                    <div className="mt-6 rounded-[1.7rem] border border-[#CFC6B5]/50 bg-white p-6">

                      <div className="text-center">

                        <div className="text-3xl">
                          📦
                        </div>

                        <h3 className="mt-2 text-xl font-black text-[#7A5742]">
                          كم خبزة تحتاج اليوم؟
                        </h3>

                        <p className="mt-1 text-sm text-[#7A5742]/55">
                          اختر الكمية التي تريد سحبها من رصيدك.
                        </p>

                      </div>

                      {/* التحكم بالكمية */}

                      <div className="mt-6 flex items-center justify-center gap-5">

                        <button
                          type="button"
                          onClick={decreaseWithdraw}
                          disabled={
                            withdrawAmount <= 1 ||
                            subscriptionBalance <= 0
                          }
                          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CFC6B5]/50 text-2xl font-black text-[#7A5742] transition hover:bg-[#CFC6B5] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          −
                        </button>

                        <div className="min-w-[100px] rounded-2xl bg-[#FAF9F7] px-5 py-3 text-center">

                          <span className="text-3xl font-black text-[#7A5742]">
                            {withdrawAmount}
                          </span>

                          <p className="text-xs font-bold text-[#7A5742]/50">
                            خبزة
                          </p>

                        </div>

                        <button
                          type="button"
                          onClick={increaseWithdraw}
                          disabled={
                            subscriptionBalance <= 0 ||
                            withdrawAmount >=
                              subscriptionBalance
                          }
                          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A5742] text-2xl font-black text-white transition hover:bg-[#684936] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          +
                        </button>

                      </div>

                      {/* إدخال مباشر */}

                      <input
                        type="number"
                        min="1"
                        max={subscriptionBalance}
                        value={withdrawAmount}
                        onChange={(e) => {
                          const value = Number(e.target.value);

                          if (
                            value >= 0 &&
                            value <= subscriptionBalance
                          ) {
                            setWithdrawAmount(value);
                            setMessage("");
                          }
                        }}
                        className="mt-5 w-full rounded-2xl border border-[#CFC6B5] bg-[#FAF9F7] px-4 py-3 text-center font-bold text-[#7A5742] outline-none focus:border-[#7A5742] focus:ring-2 focus:ring-[#7A5742]/10"
                      />

                      {/* زر السحب */}

                      <button
                        type="button"
                        onClick={handleWithdraw}
                        disabled={
                          subscriptionBalance === 0 ||
                          withdrawAmount <= 0
                        }
                        className="mt-4 w-full rounded-2xl bg-[#7A5742] px-5 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#684936] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#CFC6B5] disabled:text-[#7A5742]/50"
                      >
                        {subscriptionBalance === 0
                          ? "خلص رصيدك"
                          : "تأكيد سحب الخبز 🥖"}
                      </button>

                      {/* الرسالة */}

                      {message && (
                        <div className="mt-4 rounded-2xl bg-[#CFC6B5]/30 px-4 py-3 text-center text-sm font-bold text-[#7A5742]">
                          {message}
                        </div>
                      )}

                    </div>

                  </div>

                </section>
              )}

              {/* =========================
                  المنتجات
              ========================= */}

              {cart.products.length > 0 && (
                <section className="overflow-hidden rounded-[2rem] border border-[#CFC6B5]/60 bg-white shadow-sm">

                  <div className="border-b border-[#CFC6B5]/40 bg-[#CFC6B5]/20 px-6 py-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <span className="text-xs font-bold text-[#7A5742]/55">
                          المنتجات
                        </span>

                        <h2 className="mt-1 text-xl font-black text-[#7A5742]">
                          منتجات المخبز
                        </h2>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#7A5742]">
                        {cart.products.length} منتجات
                      </span>

                    </div>

                  </div>

                  <div className="divide-y divide-[#CFC6B5]/30">

                    {cart.products.map((product) => (

                      <article
                        key={product.id}
                        className="p-6"
                      >

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                          <div className="flex flex-1 items-center gap-4">

                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#CFC6B5]/30 text-4xl">
                              {product.emoji}
                            </div>

                            <div>

                              <h3 className="text-lg font-black text-[#7A5742]">
                                {product.name}
                              </h3>

                              <p className="mt-1 text-sm text-[#7A5742]/55">
                                {product.price.toLocaleString(
                                  "ar-IQ"
                                )}{" "}
                                د.ع للقطعة
                              </p>

                            </div>

                          </div>

                          {/* الكمية */}

                          <div className="flex items-center gap-3">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(product.id)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#CFC6B5]/40 font-black text-[#7A5742] transition hover:bg-[#CFC6B5]/70"
                            >
                              −
                            </button>

                            <span className="min-w-[25px] text-center font-black text-[#7A5742]">
                              {product.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(product.id)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7A5742] font-black text-white transition hover:bg-[#684936]"
                            >
                              +
                            </button>

                          </div>

                          {/* السعر */}

                          <div className="text-left sm:min-w-[120px]">

                            <p className="text-lg font-black text-[#7A5742]">
                              {(
                                product.price *
                                product.quantity
                              ).toLocaleString("ar-IQ")}
                            </p>

                            <span className="text-xs text-[#7A5742]/50">
                              د.ع
                            </span>

                          </div>

                          {/* حذف */}

                          <button
                            type="button"
                            onClick={() =>
                              removeProduct(product.id)
                            }
                            className="rounded-xl px-3 py-2 text-sm font-bold text-[#7A5742]/50 transition hover:bg-[#CFC6B5]/30 hover:text-[#7A5742]"
                          >
                            🗑️ حذف
                          </button>

                        </div>

                      </article>

                    ))}

                  </div>

                </section>
              )}

            </div>

            {/* =========================
                ملخص الطلب
            ========================= */}

            <aside className="h-fit rounded-[2rem] border border-[#CFC6B5]/60 bg-white p-6 shadow-sm lg:sticky lg:top-28">

              <span className="text-sm font-bold text-[#7A5742]/55">
                ملخص الطلب
              </span>

              <h2 className="mt-2 text-2xl font-black text-[#7A5742]">
                التفاصيل
              </h2>

              <div className="mt-6 space-y-4">

                {cart.subscription && (
                  <div className="flex items-center justify-between gap-3 text-sm">

                    <span className="text-[#7A5742]/60">
                      الاشتراك
                    </span>

                    <span className="font-bold text-[#7A5742]">
                      {subscriptionTotal.toLocaleString(
                        "ar-IQ"
                      )}{" "}
                      د.ع
                    </span>

                  </div>
                )}

                <div className="flex items-center justify-between gap-3 text-sm">

                  <span className="text-[#7A5742]/60">
                    المنتجات
                  </span>

                  <span className="font-bold text-[#7A5742]">
                    {productsTotal.toLocaleString(
                      "ar-IQ"
                    )}{" "}
                    د.ع
                  </span>

                </div>

              </div>

              <div className="my-6 border-t border-[#CFC6B5]/40" />

              <div className="flex items-end justify-between gap-3">

                <span className="font-bold text-[#7A5742]">
                  الإجمالي
                </span>

                <div className="text-left">

                  <span className="text-3xl font-black text-[#7A5742]">
                    {total.toLocaleString("ar-IQ")}
                  </span>

                  <span className="mr-1 text-xs font-semibold text-[#7A5742]/55">
                    د.ع
                  </span>

                </div>

              </div>

              <button
                type="button"
                className="mt-7 w-full rounded-2xl bg-[#7A5742] px-5 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#684936] active:scale-95"
              >
                متابعة الطلب
                <span className="mr-2">
                  ←
                </span>
              </button>

              <Link
                to="/bakeries"
                className="mt-3 flex w-full items-center justify-center rounded-2xl border border-[#7A5742]/15 px-5 py-3.5 text-sm font-bold text-[#7A5742] transition hover:bg-[#CFC6B5]/20"
              >
                متابعة التسوق
              </Link>

            </aside>

          </div>
        )}

      </div>
    </main>
  );
}

export default BakeryCart;
