import { useEffect, useState } from "react";
import BakeryCard from "../components/bakery/BakeryCard";

const bakeryData = [
  {
    id: 1,
    name: "مخبز الرافدين",
    location: "البصرة",
    rating: 4.8,
    popularity: 95,
    description: "خبز وصمون طازج يوميًا بطعم عراقي أصيل.",
    emoji: "🥖",
  },
  {
    id: 2,
    name: "مخبز التنور العراقي",
    location: "البصرة",
    rating: 4.9,
    popularity: 98,
    description: "نكهة التنور العراقي التي تجمع الأصالة والجودة.",
    emoji: "🔥",
  },
  {
    id: 3,
    name: "مخبز الخير",
    location: "البصرة",
    rating: 4.6,
    popularity: 87,
    description: "منتجات طازجة يوميًا وخيارات تناسب الجميع.",
    emoji: "🍞",
  },
  {
    id: 4,
    name: "مخبز البيت العربي",
    location: "البصرة",
    rating: 4.7,
    popularity: 90,
    description: "خبز ومخبوزات يومية بروح البيت العربي.",
    emoji: "🏠",
  },
  {
    id: 5,
    name: "مخبز النخيل",
    location: "البصرة",
    rating: 4.5,
    popularity: 82,
    description: "مخبوزات طازجة تجمع بين البساطة والجودة.",
    emoji: "🌴",
  },
  {
    id: 6,
    name: "مخبز الصباح",
    location: "البصرة",
    rating: 4.8,
    popularity: 93,
    description: "ابدأ صباحك بخبز طازج ورائحة المخبوزات الجميلة.",
    emoji: "☀️",
  },
];

const environmentalMessages = [
  "كل اختيار صغير يصنع فرقًا كبيرًا 🌱",
  "خبزك اليوم... بطريقة أفضل للبيئة 🥖",
  "معًا نحو عادات أكثر استدامة ♻️",
  "ادعم مخابزك المحلية 🤎",
];

function Bakeries() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((previous) => {
        return (previous + 1) % environmentalMessages.length;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const filteredBakeries = bakeryData
    .filter((bakery) =>
      bakery.name.toLowerCase().includes(search.toLowerCase().trim())
    )
    .sort((a, b) => {
      if (filter === "rating") {
        return b.rating - a.rating;
      }

      if (filter === "popular") {
        return b.popularity - a.popularity;
      }

      return 0;
    });

  const filters = [
    { id: "all", label: "الكل" },
    { id: "rating", label: "الأعلى تقييمًا" },
    { id: "popular", label: "الأكثر شعبية" },
  ];

  return (
  <main
  dir="rtl"
  className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8"
>
  <div className="w-full">

        {/* Hero */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-[#CFC6B5] px-6 py-10 shadow-lg shadow-[#7A5742]/10 sm:px-10 md:py-14 lg:px-16">
          
          {/* Decorative circles */}
          <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-white/20" />
          <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-[#7A5742]/5" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <div
              key={currentMessage}
              className="animate-[fadeIn_0.7s_ease-in-out]"
            >
              <span className="mb-4 inline-flex rounded-full bg-white/50 px-4 py-2 text-sm font-semibold text-[#7A5742]">
                سوق المخابز المحلية
              </span>

              <h1 className="min-h-[80px] text-3xl font-extrabold leading-relaxed text-[#7A5742] sm:text-4xl lg:text-5xl">
                {environmentalMessages[currentMessage]}
              </h1>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#7A5742]/80 sm:text-lg">
              اكتشف مخابزنا المحلية واختر ما تحتاجه بسهولة، وادعم المشاريع
              المحلية نحو مستقبل أكثر استدامة.
            </p>

            <button
              onClick={() => {
                document
                  .getElementById("bakeries-list")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-7 rounded-2xl bg-[#7A5742] px-6 py-3.5 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg active:scale-95"
            >
              تصفح المخابز ↓
            </button>
          </div>

          <div className="absolute bottom-6 left-8 hidden text-7xl opacity-20 sm:block">
            🥖
          </div>
        </section>

        {/* Section Header */}
        <section id="bakeries-list">
          <div className="mb-7">
            <h2 className="text-2xl font-extrabold text-[#7A5742] sm:text-3xl text-center ">
              اكتشف مخابزنا 🥖
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#7A5742]/65 sm:text-base text-center">
              اختر مخبزك المفضل واستكشف المنتجات المتوفرة لديه.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 rounded-3xl border border-[#CFC6B5]/60 bg-[#CFC6B5]/20 p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg">
                  🔎
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="ابحث عن مخبز..."
                  aria-label="البحث عن مخبز"
                  className="w-full rounded-2xl border border-[#CFC6B5] bg-white py-3.5 pr-11 pl-4 text-sm text-[#7A5742] outline-none transition placeholder:text-[#7A5742]/40 focus:border-[#7A5742] focus:ring-2 focus:ring-[#7A5742]/10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFilter(item.id)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                      filter === item.id
                        ? "bg-[#7A5742] text-white shadow-sm"
                        : "bg-white text-[#7A5742] hover:-translate-y-0.5 hover:bg-[#7A5742]/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredBakeries.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBakeries.map((bakery) => (
                <BakeryCard key={bakery.id} bakery={bakery} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#CFC6B5] bg-[#CFC6B5]/20 px-6 py-14 text-center">
              <div className="mb-4 text-5xl">🌱</div>

              <h3 className="text-xl font-bold text-[#7A5742]">
                لم نجد مخبزًا بهذا الاسم
              </h3>

              <p className="mt-2 text-sm text-[#7A5742]/65">
                جرّب البحث باسم آخر.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-[#7A5742] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                عرض جميع المخابز
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

export default Bakeries;