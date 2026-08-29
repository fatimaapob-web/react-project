import "../App.css";

const impactCards = [
  {
    icon: "🗑️",
    title: "تقليل النفايات",
    text: "قلّل ما ترميه يوميًا واختر منتجات تولّد نفايات أقل.",
  },
  {
    icon: "♻️",
    title: "إعادة الاستخدام",
    text: "استخدم الأشياء أكثر من مرة قبل التخلص منها.",
  },
  {
    icon: "🌿",
    title: "بدائل أفضل",
    text: "اختر منتجات وتغليفًا أقل ضررًا على البيئة.",
  },
  {
    icon: "💧",
    title: "استخدام مسؤول",
    text: "استهلك الماء والطاقة والمواد باعتدال ووعي.",
  },
];

const environmentTopics = [
  {
    num: "٠١",
    title: "التلوث",
    text: "يؤثر على الهواء والماء والتربة ويضر بالصحة العامة.",
  },
  {
    num: "٠٢",
    title: "النفايات",
    text: "التراكم اليومي يضغط على نظامنا البيئي بشكل متزايد.",
  },
  {
    num: "٠٣",
    title: "الموارد الطبيعية",
    text: "محدودة وتحتاج إلى استخدام مدروس وحماية مستمرة.",
  },
  {
    num: "٠٤",
    title: "الاستدامة",
    text: "تضمن مستقبلًا أفضل للأجيال القادمة دون استنزاف الكوكب.",
  },
];

const projectFeatures = [
  { icon: "🏪", label: "اكتشاف خيارات أكياس مناسبة" },
  { icon: "📦", label: "طلب وتنسيق بسهولة" },
  { icon: "🤝", label: "تشجيع قرارات مسؤولة" },
];

function Home() {
  return (
    <>
      <style>{`
        @keyframes home-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes home-float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        .home-float { animation: home-float 5s ease-in-out infinite; }
        .home-float-slow { animation: home-float-slow 7s ease-in-out infinite; }
        .home-float-delay { animation: home-float 6s ease-in-out 1.5s infinite; }
      `}</style>

    <div
      dir="rtl"
      lang="ar"
      className="home-page relative w-full overflow-x-hidden bg-[#FAF9F7] text-right text-neutral-700"
    >



      
        {/* ── 1. HERO ── */}
       <section className="relative min-h-screen w-full overflow-visible">

  <div className="absolute -top-[92px] inset-x-0 h-[calc(100%+92px)]">

    <img
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=85"
      alt="منظر طبيعي يعكس أهمية حماية البيئة"
      className="h-full w-full scale-105 object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-l from-[#7A5742]/90 via-[#7A5742]/55 to-[#7A5742]/20" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F7] via-transparent to-transparent" />

  </div>

          {/* floating accents */}
          <div className="home-float pointer-events-none absolute top-[18%] left-[8%] hidden h-20 w-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm lg:block" />
          <div className="home-float-slow pointer-events-none absolute top-[32%] left-[22%] hidden rounded-2xl border border-[#CFC6B5]/40 bg-[#CFC6B5]/20 px-5 py-3 backdrop-blur-md lg:block">
            <span className="text-sm font-medium text-white">🌍 كوكب واحد</span>
          </div>
          <div className="home-float-delay pointer-events-none absolute bottom-[28%] left-[12%] hidden rounded-full bg-[#CFC6B5]/30 px-4 py-2 text-xs font-medium text-[#7A5742] backdrop-blur-sm md:block">
            اختيارات يومية · أثر حقيقي
          </div>

          <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="text-right lg:pr-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-[#CFC6B5] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#CFC6B5]" />
                  نحو بيئة أفضل
                </span>

                <h1 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                  خياراتنا اليومية
                  <br />
                  <span className="text-[#CFC6B5]">تصنع فرقًا</span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
                  قرارات بسيطة نتخذها كل يوم — في ما نشتريه وما نستخدمه
                  وما نرميه — يمكن أن تساهم في بيئة أكثر صحة واستدامة
                  للجميع.
                </p>

                <button
                  type="button"
                  className="group relative overflow-hidden rounded-full bg-[#CFC6B5] px-9 py-3.5 text-base font-semibold text-[#7A5742] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:scale-95"
                >
                  <span className="relative z-10">اكتشف المزيد</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
                </button>
              </div>

              <div className="hidden lg:block">
                <div className="home-float-slow ml-auto max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
                  <p className="text-5xl font-bold text-[#CFC6B5]">+٤</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    مجالات أساسية نركز عليها: التلوث، النفايات، الموارد،
                    والاستدامة — قبل أن نصل إلى خطوتنا العملية في المخابز.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* transition wave */}
        <div className="relative -mt-1 h-16 bg-[#FAF9F7]">
          <div className="absolute inset-x-0 top-0 h-16 bg-[#7A5742]/8" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
        </div>

        {/* ── 2. ENVIRONMENT ── */}
        <section className="relative bg-[#FAF9F7] py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold tracking-widest text-[#7A5742]">
                  الوعي البيئي
                </span>
                <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                  لماذا تهم البيئة؟
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-neutral-600 lg:text-left">
                البيئة ليست خلفية لحياتنا — إنها أساسها. حمايتها تعني
                حماية صحتنا ومواردنا ومستقبلنا.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
              <div className="group relative overflow-hidden rounded-3xl lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=85"
                  alt="منظر طبيعي يعكس أهمية الحفاظ على البيئة"
                  className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 lg:min-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A5742]/70 via-[#7A5742]/20 to-transparent" />
                <div className="absolute bottom-0 p-7 sm:p-9">
                  <p className="text-lg font-medium text-white/90">
                    كل قرار واعٍ اليوم يرسم ملامح الغد
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2 lg:gap-6">
                {environmentTopics.map((topic) => (
                  <div
                    key={topic.title}
                    className="group rounded-3xl border border-[#CFC6B5]/50 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7A5742]/30 hover:shadow-xl sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold tracking-widest text-[#CFC6B5]">
                          {topic.num}
                        </span>
                        <h3 className="mt-2 text-xl font-bold text-[#7A5742]">
                          {topic.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                          {topic.text}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CFC6B5]/40 text-[#7A5742] transition-transform duration-300 group-hover:scale-110">
                        ←
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. SMALL CHOICES, BIG IMPACT ── */}
        <section className="relative overflow-hidden bg-[#CFC6B5]/25 py-20 sm:py-28">
          <div className="pointer-events-none absolute -top-24 left-0 h-64 w-64 rounded-full bg-[#7A5742]/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#CFC6B5]/40 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-14 text-center">
              <span className="text-sm font-semibold tracking-widest text-[#7A5742]">
                خطوات بسيطة
              </span>
              <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                اختيارات صغيرة، أثر كبير
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
                لا يلزم أن يكون التغيير جذريًا. عادات يومية بسيطة
                يمكن أن تحدث فرقًا ملموسًا على المدى الطويل.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {impactCards.map((card, i) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#CFC6B5]/30 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CFC6B5]/40 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#7A5742]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {card.text}
                    </p>
                    <div className="mt-6 h-0.5 w-0 bg-[#7A5742] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. BAKERIES AND BAGS ── */}
        <section className="relative bg-white py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="relative grid items-center gap-0 lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-5 lg:col-start-8">
                <div className="rounded-3xl bg-[#FAF9F7] p-8 shadow-2xl sm:p-10 lg:-mr-16 lg:p-12">
                  <span className="text-sm font-semibold tracking-widest text-[#7A5742]">
                    مجال تركيزنا
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
                    المخابز والأكياس
                  </h2>
                  <p className="mt-5 leading-relaxed text-neutral-600">
                    في حياتنا اليومية، تلعب المخابز دورًا أساسيًا. كل يوم
                    تُستخدم الأكياس لتغليف الخبز والمعجنات — جزء من
                    روتيننا دون أن نلاحظه.
                  </p>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    اختيار تغليف أكثر ملاءمة وتقليل الاستخدام غير الضروري
                    يمكن أن يكون خطوة عملية نحو ممارسات أكثر مسؤولية —
                    من قطاع يخدم ملايين الناس يوميًا.
                  </p>
                  <div className="mt-7 rounded-2xl border border-[#CFC6B5] bg-[#CFC6B5]/20 p-5">
                    <p className="text-sm leading-relaxed text-[#7A5742]">
                      💡 هذه ليست القصة كلها — بل جزء عملي من رحلة
                      بيئية أوسع نؤمن بها.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:mt-0">
                <div className="group overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=85"
                    alt="مخبز وخبز طازج مع تغليف مسؤول"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:aspect-[16/9]"
                  />
                </div>
                <div className="home-float absolute -bottom-5 -left-2 rounded-2xl bg-[#7A5742] px-6 py-4 shadow-xl sm:-bottom-6 sm:left-6">
                  <p className="text-sm font-medium text-[#CFC6B5]">
                    خطوة عملية · أثر يومي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. OUR PROJECT ── */}
        <section className="relative overflow-hidden bg-[#7A5742] py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#CFC6B5] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-sm font-semibold tracking-widest text-[#CFC6B5]">
                  عن مشروعنا
                </span>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  منصة تربط المخابز
                  <br />
                  <span className="text-[#CFC6B5]">بالحلول المناسبة</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                  منصتنا تساعد المخابز على اكتشاف خيارات أكياس مناسبة
                  وطلبها بسهولة — مع تشجيع قرارات أكثر مسؤولية في
                  كل عملية تغليف.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {projectFeatures.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CFC6B5]/50 hover:bg-white/15"
                  >
                    <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-white/90">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ── */}
        <section className="relative bg-[#FAF9F7] py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-bl from-[#CFC6B5]/50 via-white to-[#CFC6B5]/30 p-10 text-center sm:p-16 lg:p-20">
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#7A5742]/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#CFC6B5]/50 blur-2xl" />

              <span className="inline-block text-4xl">🌍</span>

              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                معًا، يمكن للاختيارات الصغيرة
                <br />
                <span className="text-[#7A5742]">أن تصنع فرقًا حقيقيًا</span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-neutral-600">
                ابدأ رحلتك نحو ممارسات أكثر وعيًا — لأن كل خطوة
                مهمة.
              </p>

              <button
                type="button"
                className="group relative mt-10 overflow-hidden rounded-full bg-[#7A5742] px-12 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a4a38] hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  استكشف المخابز والمنتجات
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                </span>
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
