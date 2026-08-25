import { Link, useParams } from "react-router-dom";

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

const products = [
  {
    id: 1,
    name: "صمون عراقي",
    description: "صمون طازج يوميًا.",
    price: 500,
    emoji: "🥖",
  },
  {
    id: 2,
    name: "خبز تنور",
    description: "خبز تنور عراقي طازج.",
    price: 1000,
    emoji: "🫓",
  },
  {
    id: 3,
    name: "كعك عراقي",
    description: "كعك طازج مناسب للفطور.",
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
    description: "تشكيلة من المخبوزات الطازجة.",
    price: 3000,
    emoji: "🥐",
  },
  {
    id: 6,
    name: "خبز عائلي",
    description: "حجم مناسب للعائلة.",
    price: 2500,
    emoji: "🍞",
  },
];

function BakeryStore() {
  const { id } = useParams();

  const bakery = bakeryData.find(
    (item) => item.id === Number(id)
  );

  if (!bakery) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-white px-4"
      >
        <div className="text-center">
          <div className="mb-4 text-6xl">🥖</div>

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
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen w-full bg-[#faf9f7] px-4 py-8 sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Back */}
        <Link
          to="/bakeries"
          className="mb-6 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#7A5742] transition hover:bg-[#CFC6B5]/30"
        >
          →
          العودة إلى المخابز
        </Link>

        {/* Bakery Header */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#CFC6B5] p-6 shadow-lg shadow-[#7A5742]/10 sm:p-8 lg:p-12">

          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20" />

          <div className="absolute -bottom-16 right-10 h-44 w-44 rounded-full bg-[#7A5742]/5" />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-right">

            {/* Bakery Icon */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[2rem] bg-white/70 text-7xl shadow-sm">
              {bakery.emoji}
            </div>

            {/* Information */}
            <div className="flex-1">

              <span className="inline-flex rounded-full bg-white/50 px-4 py-2 text-sm font-semibold text-[#7A5742]">
                متجر المخبز
              </span>

              <h1 className="mt-3 text-3xl font-extrabold text-[#7A5742] sm:text-4xl">
                {bakery.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#7A5742]/75 sm:justify-start">
                <span>📍 {bakery.location}</span>

                <span className="flex items-center gap-1">
                  ⭐ {bakery.rating}
                </span>
              </div>

              <p className="mt-4 max-w-2xl leading-8 text-[#7A5742]/75">
                {bakery.description}
              </p>

            </div>
          </div>
        </section>

        {/* Products Header */}
        <section className="mt-12">

          <div className="mb-7">
            <span className="text-sm font-bold text-[#7A5742]/60">
              منتجاتنا اليومية
            </span>

            <h2 className="mt-1 text-3xl font-extrabold text-[#7A5742]">
              منتجات {bakery.name} 🥖
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#7A5742]/60 sm:text-base">
              اختر ما يناسبك من المخبوزات الطازجة المتوفرة لدى المخبز.
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-[#CFC6B5]/50 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7A5742]/10"
              >

                {/* Product Image */}
                <div className="flex h-48 items-center justify-center bg-[#CFC6B5]/25">

                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#CFC6B5]/40 text-6xl transition duration-300 group-hover:scale-110">
                    {product.emoji}
                  </div>

                </div>

                {/* Product Info */}
                <div className="p-5">

                  <h3 className="text-xl font-extrabold text-[#7A5742]">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-7 text-[#7A5742]/60">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">

                    <div>
                      <span className="text-xl font-extrabold text-[#7A5742]">
                        {product.price.toLocaleString("ar-IQ")}
                      </span>

                      <span className="mr-1 text-xs text-[#7A5742]/60">
                        د.ع
                      </span>
                    </div>

                    <button
                      className="rounded-xl bg-[#7A5742] px-4 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#684936] active:scale-95"
                    >
                      أضف للطلب
                    </button>

                  </div>

                </div>
              </article>
            ))}

          </div>
        </section>

        {/* Bottom Note */}
        <section className="mt-12 rounded-3xl bg-[#CFC6B5]/40 p-6 text-center">

          <div className="text-3xl">🌱</div>

          <h3 className="mt-2 text-lg font-bold text-[#7A5742]">
            اختياراتك تصنع فرقًا
          </h3>

          <p className="mx-auto mt-1 max-w-xl text-sm leading-7 text-[#7A5742]/65">
            استمتع بمخبوزاتك المفضلة وادعم المخابز المحلية نحو مستقبل أكثر استدامة.
          </p>

        </section>

      </div>
    </main>
  );
}

export default BakeryStore;