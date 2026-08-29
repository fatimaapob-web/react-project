import { Link, useParams } from "react-router-dom";
import { useState } from "react";
const bakeryData = [
  {
    id: 1,
    name: "مخبز الرافدين",
    location: "البصرة",
    rating: 4.8,
    description: "خبز وصمون طازج يوميًا بطعم عراقي أصيل.",
    emoji: "🥖",
  },
  {
    id: 2,
    name: "مخبز التنور العراقي",
    location: "البصرة",
    rating: 4.9,
    description: "نكهة التنور العراقي التي تجمع الأصالة والجودة.",
    emoji: "🔥",
  },
  {
    id: 3,
    name: "مخبز الخير",
    location: "البصرة",
    rating: 4.6,
    description: "منتجات طازجة يوميًا وخيارات تناسب الجميع.",
    emoji: "🍞",
  },
  {
    id: 4,
    name: "مخبز البيت العربي",
    location: "البصرة",
    rating: 4.7,
    description: "خبز ومخبوزات يومية بروح البيت العربي.",
    emoji: "🏠",
  },
  {
    id: 5,
    name: "مخبز النخيل",
    location: "البصرة",
    rating: 4.5,
    description: "مخبوزات طازجة تجمع بين البساطة والجودة.",
    emoji: "🌴",
  },
  {
    id: 6,
    name: "مخبز الصباح",
    location: "البصرة",
    rating: 4.8,
    description: "ابدأ صباحك بخبز طازج ورائحة المخبوزات الجميلة.",
    emoji: "☀️",
  },
];

/* =========================
   الاشتراكات الشهرية
========================= */

const subscriptions = [
  {
    id: "koniya",
    name: "اشتراك الكونية",
    amount: 200,
    price: 25000,
    emoji: "🌾",
    badge: "الخيار العراقي",
    description:
      "اشتراك يعتمد على الكونية، وهي كمية الطحين المخصصة للمخبز لإنتاج 200 خبزة.",
    features: [
      "رصيد 200 خبزة",
      "سحب يومي حسب الحاجة",
      "الرصيد ينقص مع كل عملية سحب",
    ],
  },
  {
    id: "normal",
    name: "الاشتراك العادي",
    amount: 100,
    price: 15000,
    emoji: "🥖",
    badge: "خيار بسيط",
    description:
      "خيار مناسب لمن يحتاج كمية شهرية أقل مع إمكانية السحب حسب الحاجة.",
    features: [
      "رصيد 100 خبزة",
      "سحب يومي حسب الحاجة",
      "متابعة الرصيد المتبقي",
    ],
  },
  {
    id: "plus",
    name: "اشتراك Plus",
    amount: 350,
    price: 40000,
    emoji: "⭐",
    badge: "للاحتياج الأكبر",
    description:
      "رصيد أكبر للمخابز التي تحتاج إلى كمية أعلى من الخبز خلال الشهر.",
    features: [
      "رصيد 350 خبزة",
      "سحب يومي حسب الحاجة",
      "رصيد أكبر للاستخدام الشهري",
    ],
  },
];

/* =========================
   منتجات المخبز
========================= */

const products = [
  {
    id: 1,
    name: "صمون عراقي",
    description: "صمون طازج يوميًا بطعم عراقي أصيل.",
    price: 500,
    emoji: "🥖",
  },
  {
    id: 2,
    name: "خبز تنور",
    description: "خبز تنور عراقي طازج ومناسب للوجبات اليومية.",
    price: 1000,
    emoji: "🫓",
  },
  {
    id: 3,
    name: "كعك عراقي",
    description: "كعك طازج ومناسب للفطور والشاي.",
    price: 2000,
    emoji: "🍪",
  },
  {
    id: 4,
    name: "خبز أسمر",
    description: "خبز خفيف مناسب للاستخدام اليومي.",
    price: 1500,
    emoji: "🍞",
  },
  {
    id: 5,
    name: "معجنات مشكلة",
    description: "تشكيلة من المعجنات الطازجة والمتنوعة.",
    price: 3000,
    emoji: "🥐",
  },
  {
    id: 6,
    name: "خبز عائلي",
    description: "حجم مناسب للعائلة والاستخدام اليومي.",
    price: 2500,
    emoji: "🍞",
  },
];

function BakeryStore() {
  const { id } = useParams();

  const [addedMessage, setAddedMessage] = useState("");

  const bakery = bakeryData.find(
    (item) => item.id === Number(id)
  );

  const addProductToCart = (product) => {
  const savedCart = localStorage.getItem("bakeryCart");

  let currentCart = {
    subscription: null,
    products: [],
  };

  if (savedCart) {
    try {
      currentCart = JSON.parse(savedCart);
    } catch {
      currentCart = {
        subscription: null,
        products: [],
      };
    }
  }

  const existingProduct = currentCart.products.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    currentCart.products = currentCart.products.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  } else {
    currentCart.products.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "bakeryCart",
    JSON.stringify(currentCart)
  );

  setAddedMessage(`تمت إضافة ${product.name} إلى السلة 🛒`);

  setTimeout(() => {
    setAddedMessage("");
  }, 2000);
};

const addSubscriptionToCart = (subscription) => {
  const savedCart = localStorage.getItem("bakeryCart");

  let currentCart = {
    subscription: null,
    products: [],
  };

  if (savedCart) {
    try {
      currentCart = JSON.parse(savedCart);
    } catch {
      currentCart = {
        subscription: null,
        products: [],
      };
    }
  }

currentCart.subscription = {
  ...subscription,
  remainingAmount: subscription.amount,
};
  localStorage.setItem(
    "bakeryCart",
    JSON.stringify(currentCart)
  );

  setAddedMessage(
    `تمت إضافة ${subscription.name} إلى السلة 🌾`
  );

  setTimeout(() => {
    setAddedMessage("");
  }, 2000);
};
  /* =========================
     حالة الاشتراك
  ========================= */

  const [activeSubscription, setActiveSubscription] = useState(null);

  const [balances, setBalances] = useState({
    koniya: 0,
    normal: 0,
    plus: 0,
  });

  const [withdrawAmount, setWithdrawAmount] = useState("");

  const [message, setMessage] = useState("");

  /* =========================
     الاشتراك
  ========================= */

  const handleSubscribe = (subscription) => {
    setActiveSubscription(subscription.id);

    setBalances((prev) => ({
      ...prev,
      [subscription.id]: subscription.amount,
    }));

    setWithdrawAmount("");

    setMessage(
      `تم الاشتراك في ${subscription.name} برصيد ${subscription.amount} خبزة`
    );
  };







const getBakeryCart = () => {
  const savedCart = localStorage.getItem("bakeryCart");

  if (savedCart) {
    try {
      const parsedCart = JSON.parse(savedCart);

      return {
        bakeryId: parsedCart.bakeryId ?? bakery.id,
        bakeryName: parsedCart.bakeryName ?? bakery.name,
        subscription: parsedCart.subscription ?? null,
        products: Array.isArray(parsedCart.products)
          ? parsedCart.products
          : [],
      };
    } catch {
      return {
        bakeryId: bakery.id,
        bakeryName: bakery.name,
        subscription: null,
        products: [],
      };
    }
  }

  return {
    bakeryId: bakery.id,
    bakeryName: bakery.name,
    subscription: null,
    products: [],
  };
};




  /* =========================
     السحب اليومي
  ========================= */

  const handleWithdraw = () => {
    if (!activeSubscription) {
      setMessage("يرجى اختيار اشتراك أولًا.");
      return;
    }

    const amount = Number(withdrawAmount);

    if (!amount || amount <= 0) {
      setMessage("يرجى إدخال كمية صحيحة للسحب.");
      return;
    }

    const currentBalance = balances[activeSubscription];

    if (currentBalance <= 0) {
      setMessage("خلص رصيدك لهذا الاشتراك.");
      return;
    }

    if (amount > currentBalance) {
      setMessage(
        `لا يمكنك سحب ${amount} خبزة. رصيدك المتبقي هو ${currentBalance} خبزة فقط.`
      );
      return;
    }

    const newBalance = currentBalance - amount;

    setBalances((prev) => ({
      ...prev,
      [activeSubscription]: newBalance,
    }));

    setWithdrawAmount("");

    if (newBalance === 0) {
      setMessage("تم السحب بنجاح 🎉 خلص رصيدك بالكامل.");
    } else {
      setMessage(
        `تم سحب ${amount} خبزة بنجاح. متبقي لديك ${newBalance} خبزة.`
      );
    }
  };

  /* =========================
     إذا المخبز غير موجود
  ========================= */

  if (!bakery) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#FAF9F7] px-4"
      >

        {addedMessage && (
  <div className="fixed right-5 top-24 z-50 rounded-2xl bg-[#7A5742] px-5 py-3 text-sm font-bold text-white shadow-xl">
    {addedMessage}
  </div>
)}
        <div className="text-center">
          <div className="mb-5 text-6xl">🥖</div>

          <h1 className="text-2xl font-extrabold text-[#7A5742]">
            لم نجد هذا المخبز
          </h1>

          <p className="mt-2 text-[#7A5742]/60">
            يبدو أن المتجر الذي تبحث عنه غير موجود.
          </p>

          <Link
            to="/bakeries"
            className="mt-6 inline-flex rounded-2xl bg-[#7A5742] px-6 py-3 font-bold text-white transition hover:-translate-y-1"
          >
            العودة إلى المخابز
          </Link>


          <div className="relative mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">

          <Link
  to="/bakery-cart"
  className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-2xl bg-[#7A5742] px-5 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#684936]"
>
  🛒
  سلة المخبز
</Link></div>
        </div>
      </main>
    );
  }

  const currentBalance = activeSubscription
    ? balances[activeSubscription]
    : 0;

  const currentSubscription = subscriptions.find(
    (item) => item.id === activeSubscription
  );





  return (


    <main
      dir="rtl"
      className="min-h-screen w-full overflow-hidden bg-[#FAF9F7]"
    >

      // السلة 

{/* =========================
    إشعار السلة + زر السلة
========================= */}

{/* =========================
    إشعار السلة + زر السلة
========================= */}

<div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">

  {addedMessage && (
    <div className="animate-in rounded-2xl border border-[#CFC6B5]/50 bg-white px-5 py-3 text-sm font-bold text-[#7A5742] shadow-xl">
      {addedMessage}
    </div>
  )}

  <Link
    to="/bakery-cart"
    className="flex items-center gap-2 rounded-2xl bg-[#7A5742] px-5 py-3.5 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#684936] active:scale-95"
  >
    <span className="text-lg">🛒</span>
    <span>سلة المخبز</span>
  </Link>

</div>


      {/* الخلفيات الزخرفية */}

      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-[#CFC6B5]/30 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[700px] h-80 w-80 rounded-full bg-[#7A5742]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">

        {/* العودة */}

        <Link
          to="/bakeries"
          className="mb-6 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#7A5742] transition hover:bg-[#CFC6B5]/30"
        >
          <span>→</span>
          العودة إلى المخابز
        </Link>

        {/* =========================
            معلومات المخبز
        ========================== */}

        <section className="relative overflow-hidden rounded-[2rem] bg-[#CFC6B5] p-6 shadow-xl shadow-[#7A5742]/10 sm:p-8 lg:p-10">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20" />

          <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-[#7A5742]/5" />

          <div className="relative flex flex-col items-center gap-6 sm:flex-row">

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[1.8rem] bg-white/75 text-6xl shadow-sm sm:h-32 sm:w-32">
              {bakery.emoji}
            </div>

            <div className="flex-1 text-center sm:text-right">

              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">

                <span className="rounded-full bg-white/55 px-4 py-2 text-xs font-bold text-[#7A5742]">
                  متجر مخبز
                </span>

                <span className="rounded-full bg-[#7A5742] px-4 py-2 text-xs font-bold text-white">
                  ⭐ {bakery.rating}
                </span>

              </div>

              <h1 className="mt-3 text-3xl font-black text-[#7A5742] sm:text-4xl">
                {bakery.name}
              </h1>

              <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#7A5742]/70 sm:justify-start">

                <span>
                  📍 {bakery.location}
                </span>

                <span>
                  🥖 خبز ومخبوزات
                </span>

              </div>

              <p className="mt-4 max-w-2xl leading-8 text-[#7A5742]/75">
                {bakery.description}
              </p>

            </div>
          </div>
        </section>

        {/* =========================
            الاشتراكات
        ========================== */}

        <section className="mt-16">

          <div className="text-center">

            <span className="text-sm font-bold tracking-widest text-[#7A5742]/60">
              الاشتراكات الشهرية
            </span>

            <h2 className="mt-3 text-3xl font-black text-[#7A5742] sm:text-4xl">
              اختر الاشتراك المناسب لك
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#7A5742]/65 sm:text-base">
              اختر كمية الخبز التي تناسب احتياجك الشهري، ثم استخدم رصيدك
              تدريجيًا واسحب الكمية التي تحتاجها في كل مرة.
            </p>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            {subscriptions.map((subscription) => {

              const isActive =
                activeSubscription === subscription.id;

              return (
                <article
                  key={subscription.id}
                  className={`group relative flex flex-col overflow-hidden rounded-[2rem] border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    isActive
                      ? "border-[#7A5742] ring-2 ring-[#7A5742]/20"
                      : subscription.id === "plus"
                      ? "border-[#7A5742]/30 shadow-[#7A5742]/10"
                      : "border-[#CFC6B5]/60"
                  }`}
                >

                  {/* الأكثر استخدامًا */}

                  {subscription.id === "plus" && (
                    <div className="absolute left-5 top-5 rounded-full bg-[#7A5742] px-3 py-1.5 text-xs font-bold text-white">
                      الأكثر استخدامًا
                    </div>
                  )}

                  {/* الاشتراك الحالي */}

                  {isActive && (
                    <div className="absolute right-5 top-5 rounded-full bg-[#CFC6B5] px-3 py-1.5 text-xs font-bold text-[#7A5742]">
                      ✓ اشتراكك الحالي
                    </div>
                  )}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CFC6B5]/45 text-3xl transition duration-300 group-hover:scale-110">
                    {subscription.emoji}
                  </div>

                  <div className="mt-6">

                    <span className="text-xs font-bold text-[#7A5742]/50">
                      {subscription.badge}
                    </span>

                    <h3 className="mt-2 text-2xl font-black text-[#7A5742]">
                      {subscription.name}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#7A5742]/60">
                      {subscription.description}
                    </p>

                  </div>

                  {/* الرصيد */}

                  <div className="mt-6 rounded-2xl bg-[#FAF9F7] p-5">

                    <p className="text-xs font-semibold text-[#7A5742]/55">
                      الرصيد الشهري
                    </p>

                    <div className="mt-1 flex items-end gap-2">

                      <span className="text-4xl font-black text-[#7A5742]">
                        {isActive
                          ? currentBalance
                          : subscription.amount}
                      </span>

                      <span className="pb-1 text-sm font-bold text-[#7A5742]/60">
                        خبزة
                      </span>

                    </div>

                    {isActive && (
                      <p className="mt-2 text-xs font-semibold text-[#7A5742]/50">
                        الرصيد المتبقي حاليًا
                      </p>
                    )}

                  </div>

                  {/* المميزات */}

                  <div className="mt-6 space-y-3">

                    {subscription.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#7A5742]/70"
                      >

                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CFC6B5]/50 text-xs text-[#7A5742]">
                          ✓
                        </span>

                        <span>
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                  {/* السعر */}

                  <div className="mt-7 border-t border-[#CFC6B5]/40 pt-5">

                    <p className="text-xs font-semibold text-[#7A5742]/50">
                      قيمة الاشتراك
                    </p>

                    <div className="mt-1 flex items-end gap-2">

                      <span className="text-2xl font-black text-[#7A5742]">
                        {subscription.price.toLocaleString("ar-IQ")}
                      </span>

                      <span className="pb-1 text-xs text-[#7A5742]/55">
                        د.ع / شهريًا
                      </span>

                    </div>

                  </div>

                  {/* زر الاشتراك */}

<button
  type="button"
  onClick={() => addSubscriptionToCart(subscription)}
  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A5742] px-5 py-3.5 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#684936] hover:shadow-lg active:scale-95"
>
  اشترك الآن

  <span>
    ←
  </span>
</button>

                </article>



              );

              
            })}

          </div>
        </section>

        {/* =========================
            قسم السحب
        ========================== */}

        {activeSubscription && (
          <section className="mt-12 overflow-hidden rounded-[2rem] bg-[#CFC6B5] p-6 shadow-lg shadow-[#7A5742]/10 sm:p-8">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">

              {/* المعلومات */}

              <div>

                <span className="text-sm font-bold text-[#7A5742]/60">
                  إدارة رصيدك
                </span>

                <h2 className="mt-2 text-3xl font-black text-[#7A5742]">
                  رصيدك متاح للسحب 🥖
                </h2>

                <p className="mt-3 max-w-xl leading-8 text-[#7A5742]/70">
                  أنت مشترك حاليًا في{" "}
                  <strong>
                    {currentSubscription?.name}
                  </strong>
                  . يمكنك سحب الكمية التي تحتاجها فقط، وسيتم خصمها
                  مباشرة من رصيدك.
                </p>

                {/* الرصيد الكبير */}

                <div className="mt-6 inline-flex items-center gap-4 rounded-3xl bg-white/70 px-6 py-4 shadow-sm">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A5742] text-2xl">
                    🥖
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-[#7A5742]/50">
                      الرصيد المتبقي
                    </p>

                    <div className="flex items-end gap-2">

                      <span className="text-3xl font-black text-[#7A5742]">
                        {currentBalance}
                      </span>

                      <span className="pb-1 text-sm font-bold text-[#7A5742]/60">
                        خبزة
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* السحب */}

              <div className="rounded-3xl bg-white p-6 shadow-sm">

                <div className="text-center">

                  <div className="text-3xl">
                    📦
                  </div>

                  <h3 className="mt-2 text-xl font-black text-[#7A5742]">
                    سحب من الرصيد
                  </h3>

                  <p className="mt-1 text-sm text-[#7A5742]/55">
                    كم خبزة تحتاج اليوم؟
                  </p>

                </div>

                <div className="mt-5">

                  <input
                    type="number"
                    min="1"
                    value={withdrawAmount}
                    onChange={(e) => {
                      setWithdrawAmount(e.target.value);
                      setMessage("");
                    }}
                    placeholder="مثال: 5 أو 10"
                    className="w-full rounded-2xl border border-[#CFC6B5] bg-[#FAF9F7] px-4 py-3 text-center text-lg font-bold text-[#7A5742] outline-none transition focus:border-[#7A5742] focus:ring-2 focus:ring-[#7A5742]/10"
                  />

                  <button
                    type="button"
                    onClick={handleWithdraw}
                    disabled={currentBalance === 0}
                    className="mt-3 w-full rounded-2xl bg-[#7A5742] px-5 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#684936] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#CFC6B5] disabled:text-[#7A5742]/50"
                  >
                    {currentBalance === 0
                      ? "خلص رصيدك"
                      : "سحب الخبز"}
                  </button>

                </div>

              </div>

            </div>

            {/* الرسالة */}

            {message && (
              <div className="mt-6 rounded-2xl bg-white/70 px-5 py-4 text-center text-sm font-bold text-[#7A5742]">
                {message}
              </div>
            )}

          </section>
        )}

          <section className="mt-20 overflow-hidden rounded-[2rem] bg-[#7A5742] p-8 text-white shadow-xl sm:p-10 lg:p-12">

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-sm font-bold tracking-widest text-[#CFC6B5]">
                طريقة الاستخدام
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                اشترك اليوم،
                <br />
                واسحب حسب حاجتك.
              </h2>

              <p className="mt-5 max-w-md leading-8 text-white/70">
                لا تحتاج إلى استلام كامل رصيدك دفعة واحدة. بعد الاشتراك،
                يصبح لديك رصيد من الخبز يمكنك استخدامه تدريجيًا.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

                <div className="text-3xl">
                  1️⃣
                </div>

                <h3 className="mt-4 font-bold">
                  اختر اشتراكك
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  اختر الكمية التي تناسب احتياجك.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

                <div className="text-3xl">
                  2️⃣
                </div>

                <h3 className="mt-4 font-bold">
                  احصل على رصيد
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  يظهر لك إجمالي الخبز المتاح.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

                <div className="text-3xl">
                  3️⃣
                </div>

                <h3 className="mt-4 font-bold">
                  اسحب يوميًا
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  اسحب 5 أو 10 أو أي كمية تحتاجها.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            الملاحظة الأخيرة
        ========================== */}

        <section className="my-12 rounded-[2rem] border border-[#CFC6B5]/50 bg-white p-8 text-center shadow-sm">

          <div className="text-4xl">
            🌱
          </div>

          <h3 className="mt-4 text-xl font-black text-[#7A5742]">
            اختياراتك تصنع فرقًا
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#7A5742]/60">
            سواء اخترت الاشتراك أو اشتريت منتجات منفردة، هدفنا أن نجعل
            خياراتك اليومية أكثر سهولة ووعيًا.
          </p>

        </section>

        {/* =========================
            المنتجات
        ========================== */}

        <section className="mt-20">

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <span className="text-sm font-bold tracking-widest text-[#7A5742]/60">
                منتجات المخبز
              </span>

              <h2 className="mt-2 text-3xl font-black text-[#7A5742] sm:text-4xl">
                مخبوزات طازجة يوميًا 🥐
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7A5742]/60 sm:text-base">
                بالإضافة إلى الاشتراكات، يمكنك شراء منتجات المخبز بشكل
                منفصل حسب الكمية التي تحتاجها.
              </p>

            </div>

            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[#7A5742]/20 bg-white px-5 py-3 text-sm font-bold text-[#7A5742] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              جميع المنتجات
              <span>←</span>
            </Link>

          </div>

          {/* بطاقات المنتجات */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (

              <article
                key={product.id}
                className="group overflow-hidden rounded-[2rem] border border-[#CFC6B5]/50 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7A5742]/10"
              >

                {/* صورة / أيقونة المنتج */}

                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#CFC6B5]/25">

                  <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/40" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/75 text-6xl shadow-sm transition duration-500 group-hover:scale-110 group-hover:rotate-2">
                    {product.emoji}
                  </div>

                </div>

                {/* تفاصيل المنتج */}

                <div className="p-6">

                  <h3 className="text-xl font-black text-[#7A5742]">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-7 text-[#7A5742]/60">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3">

                    <div>

                      <span className="text-xl font-black text-[#7A5742]">
                        {product.price.toLocaleString("ar-IQ")}
                      </span>

                      <span className="mr-1 text-xs text-[#7A5742]/55">
                        د.ع
                      </span>

                    </div>

<button
  type="button"
  onClick={() => addProductToCart(product)}
  className="rounded-xl bg-[#7A5742] px-4 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#684936] active:scale-95"
>
  أضف للسلة
</button>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =========================
            كيف يعمل الاشتراك؟
        ========================== */}

      

      </div>
    </main>
  );
}

export default BakeryStore;