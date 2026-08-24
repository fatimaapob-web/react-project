function AboutProject() {
  return (
    <section
  dir="rtl"
  className="min-h-screen bg-[#CFC6B5] px-6 py-12 text-[#7A5742]"
>

      <h2 className="mb-6 text-center text-4xl font-bold text-[#7A5742]">
  🌍 عن المشروع
</h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-[#7A5742]">
        يهدف هذا المشروع إلى نشر الوعي البيئي وتشجيع الجميع
        على اتباع ممارسات أكثر استدامة في حياتهم اليومية.
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

        <div className="rounded-3xl bg-[#45427A] p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-3 text-2xl font-bold text-[#CFC6B5]">🎯 أهداف المشروع</h3>
          <p className="leading-8 text-[#CFC6B5]">
            نشر المعلومات البيئية بطريقة بسيطة وواضحة،
            وتشجيع الأفراد على اتخاذ خطوات إيجابية لحماية البيئة.
          </p>
        </div>

        <div className="rounded-3xl bg-[#7A5742] p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-3 text-2xl font-bold text-[#CFC6B5]">🌱 ماذا نقدم؟</h3>
          <p className="leading-8 text-[#CFC6B5]">
            نقدم نصائح ومعلومات تساعد على ترشيد استهلاك
            الطاقة والمياه، وتقليل النفايات وهدر الطعام.
          </p>
        </div>

        <div className="rounded-3xl bg-[#7A5742] p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-3 text-2xl font-bold text-[#CFC6B5]">🏠 للجميع</h3>
          <p className="leading-8 text-[#CFC6B5]">
            التوعية البيئية لا تقتصر على مكان معين،
            بل يمكن تطبيقها في المنزل والعمل والمدرسة
            وجميع الأماكن التي نعيش ونعمل فيها.
          </p>
        </div>

        <div className="rounded-3xl bg-[#7A5742] p-7 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-3 text-2xl font-bold text-[#CFC6B5]">💚 لماذا هذا مهم؟</h3>
          <p className="leading-8 text-[#CFC6B5]">
            لأن التغييرات البسيطة في عاداتنا اليومية
            يمكن أن تساهم في الحفاظ على الموارد
            وتقليل التأثيرات السلبية على البيئة.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AboutProject;