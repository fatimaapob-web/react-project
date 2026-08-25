import { useState } from "react";


const questions = [
  {
    question: "أي ممارسة تساعد على تقليل استهلاك الطاقة؟",
    options: [
      "ترك الأجهزة تعمل طوال اليوم",
      "إطفاء الأجهزة عند عدم استخدامها",
      "استخدام الأجهزة دون الحاجة إليها"
    ],
    answer: "إطفاء الأجهزة عند عدم استخدامها"
  },
  {
    question: "أي ممارسة تساعد على المحافظة على المياه؟",
    options: [
      "ترك صنبور الماء مفتوحًا",
      "إهدار المياه أثناء التنظيف",
      "إصلاح تسريبات المياه"
    ],
    answer: "إصلاح تسريبات المياه"
  },
  {
    question: "ما الطريقة الأفضل لتقليل النفايات؟",
    options: [
      "رمي جميع المواد معًا",
      "فرز النفايات وإعادة تدوير المواد القابلة للاستفادة",
      "استخدام المواد البلاستيكية أكثر"
    ],
    answer: "فرز النفايات وإعادة تدوير المواد القابلة للاستفادة"
  },
  {
    question: "كيف يمكن تقليل هدر الطعام؟",
    options: [
      "إنتاج كميات أكبر من الحاجة",
      "التخلص من الطعام المتبقي مباشرة",
      "التخطيط الجيد للكميات والاستفادة من الطعام"
    ],
    answer: "التخطيط الجيد للكميات والاستفادة من الطعام"
  }
];

function EnvironmentalAwareness() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [showResult, setShowResult] = useState(false);

const handleAnswer = (option) => {
  setSelectedAnswer(option);
  if (option === questions[currentQuestion].answer) {
    setScore((prevScore) => prevScore + 1);
  }
};

  

  return (
    <>
    
    <section className="min-h-screen bg-[#CFC6B5] px-6 py-12 text-[#7A5742]">

      <h2 className="mb-4 text-center text-4xl  font-bold text-[#7A5742]">
        التوعية البيئية
      </h2>

      <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-[#7A5742]">
        نهدف من خلال هذا القسم إلى نشر الوعي حول أهمية الحفاظ على البيئة
        وتشجيع الممارسات المستدامة في المخابز
      </p>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">⚡ ترشيد استهلاك الطاقة</h3>
            <p className="leading-7 text-[#7A5742]">
                استخدام الافران والمعدات بكفاءة, واطفاء الاجهزة عند عدم الحاجة اليها, 
                واستخدام الطاقة بكافئة يساعد على تقليل الاستهلاك, 
                والمحافظة على المواد
            </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">💧 ترشيد استهلاك المياه</h3>
            <p className="leading-7 text-[#7A5742]">
                تجنب هدر المياه واصلاح التسريبات واستخدام الكمية المناسبة
                يساعد على المحافظة على هذا المورد المهم
            </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">♻️ تقليل النفايات</h3>
            <p className="leading-7 text-[#7A5742]">
                تقليل استخدام المواد غير الضرورية وفرز النفايات 
                واعادة تدوير المواد القابلة للاستفادة 
                يساهم في حماية البيئة
            </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">🥖 تقليل هدر الطعام</h3>
            <p className="leading-7 text-[#7A5742]">
                التخطيط الجيد للوجبات والاستفادة من الطعام 
                بدل التخلص منه يساعد على
                تقليل الهدر والمحافظة على الموارد
            </p>
        </div>
    
      </div>
      <div className="mt-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#7A5742]">
            ممارسات صديقة للبيئة
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg leading-8 text-[#7A5742]">
            يمكن للجميع المساهمة في حماية البيئة 
            من خلال تغييرات بسيطة 
            في العادات اليوميةومكان العمل

        </p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">🏠 في المنزل</h3>
                <p className="leading-7 text-[#7A5742]">
                    تقليل استهلاك الكهرباء والمياه,
                    وفرز النفايات  وتجنب استخدام
                    المنتجات البلاستيكية غير الضرورية
                </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">🏫 في المدرسة</h3>
                <p className="leading-7 text-[#7A5742]">
                    المحافظة على نظافة المكان,
                    تقليل استخدام الورق وتشجيع 
                    الطلاب على اعادة التدوير
                </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">🏢 في مكان العمل</h3>
                <p className="leading-7 text-[#7A5742]">
                     اطفاء الاجهزة عند عدم استخدامها,
                     تقليل استهلاك الورق 
                     واستخدام الموارد بطريقة اكثر كفاءة
                </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-[#7A5742]">🥖 في المخابز</h3>
                <p className="leading-7 text-[#7A5742]">
                    تقليل هدر الطعام , ترشيد استهلاك الطاقة والمياه
                    تقليل النفايتا الناتجة عن عمليات الانتاج والتغليف
                </p>
            </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-[#45427A] p-8 text-white shadow-lg">
        <h2 className="mb-8 text-center text-3xl font-bold">
            💡 هل تعلم؟
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#CFC6B5] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-[#7A5742]">🌱 مواردنا محدودة</h3>
                <p className="leading-7 text-[#7A5742]">
                    استخدام الموارد بشكل مسؤول يساعد على 
                    المحافظه عليها للاجيال القادمة
                </p>
            </div>
            <div className="rounded-2xl bg-[#CFC6B5] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-[#7A5742]">♻️ إعادة التدوير</h3>
                <p className="leading-7 text-[#7A5742]">
                    فرز المواد القابلة لاعادة التدوير 
                    يقلل من كمية  النفايات التي تصل الى مكب النفايات
                </p>
            </div>
            <div className="rounded-2xl bg-[#CFC6B5] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-xl font-bold text-[#7A5742]">💧 كل قطرة مهمة</h3>
                <p className="leading-7 text-[#7A5742]">
                    تقليل هدر  المياه في حياتنا اليومية
                    يساهم في المحافظة على احد الموارد الحياة
                </p>
            </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-[#7A5742] p-8 text-center shadow-xl">

  <h2 className="mb-4 text-3xl font-bold text-white">
    🧠 اختبر معلوماتك البيئية
  </h2>

  {!showResult ? (
    <>
      <p className="mb-6 text-lg font-semibold text-[#CFC6B5]">
        السؤال {currentQuestion + 1} من {questions.length}
      </p>

      <h3 className="mb-8 text-2xl font-bold leading-9 text-white">
        {questions[currentQuestion].question}
      </h3>

     <div className="space-y-3">
  {questions[currentQuestion].options.map((option) => (
    <button
      key={option}
      className={`w-full rounded-xl px-5 py-4 text-lg font-semibold transition duration-200
        ${
          selectedAnswer === option
            ? option === questions[currentQuestion].answer
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
            : "bg-[#CFC6B5] text-[#7A5742] hover:bg-white hover:-translate-y-1 hover:shadow-md"
        }`}
      onClick={() => handleAnswer(option)}
      disabled={selectedAnswer !== ""}
    >
      {option}
    </button>
  ))}
</div>

      {selectedAnswer && (
        <>
          <p className="quiz-feedback">
            {selectedAnswer === questions[currentQuestion].answer
              ? "🎉 إجابة صحيحة!"
              : "❌ إجابة غير صحيحة"}
          </p>

          <button
  className="mt-5 rounded-xl bg-[#45427A] px-8 py-3 font-bold text-white shadow-md transition duration-200 hover:scale-105"
  onClick={() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  }}
>
  {currentQuestion < questions.length - 1
    ? "السؤال التالي"
    : "عرض النتيجة"}
</button>
        </>
      )}
    </>
  ) : (
    <div className="mt-6 rounded-2xl bg-[#CFC6B5] p-8 text-[#7A5742]">

  <h3 className="mb-4 text-3xl font-bold">
    🎉 انتهى الاختبار!
  </h3>

  <p className="mb-6 text-2xl font-bold">
    نتيجتك: {score} من {questions.length}
  </p>

  <button
    className="rounded-xl bg-[#45427A] px-8 py-3 font-bold text-white shadow-md transition duration-200 hover:scale-105"
    onClick={() => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer("");
      setShowResult(false);
    }}
  >
    إعادة الاختبار
  </button>

</div>
  )}

</div>

    </section>
    </>
  );
}

export default EnvironmentalAwareness;