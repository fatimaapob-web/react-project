import { useState } from "react";

function EnvironmentalAwareness() {
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

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [showResult, setShowResult] = useState(false);

function handleAnswer(option) {
  setSelectedAnswer(option);

  if (option === questions[currentQuestion].answer) {
    setScore((prevScore) => prevScore + 1);
  }
}
  

  

  return (
    <section className="environmental-awareness">

      <h2 className="environmental-awareness-title">
        التوعية البيئية
      </h2>

      <p className="environmental-awareness-description">
        نهدف من خلال هذا القسم إلى نشر الوعي حول أهمية الحفاظ على البيئة
        وتشجيع الممارسات المستدامة في المخابز
      </p>
      <div className="awareness-cards">
        <div className="awareness-card energy-card">
            <h3>⚡ ترشيد استهلاك الطاقة</h3>
            <p>
                استخدام الافران والمعدات بكفاءة, واطفاء الاجهزة عند عدم الحاجة اليها, 
                واستخدام الطاقة بكافئة يساعد على تقليل الاستهلاك, 
                والمحافظة على المواد
            </p>
        </div>
        <div className="awareness-card water-card">
            <h3>💧 ترشيد استهلاك المياه</h3>
            <p>
                تجنب هدر المياه واصلاح التسريبات واستخدام الكمية المناسبة
                يساعد على المحافظة على هذا المورد المهم
            </p>
        </div>
        <div className="awareness-card waste-card">
            <h3>♻️ تقليل النفايات</h3>
            <p>
                تقليل استخدام المواد غير الضرورية وفرز النفايات 
                واعادة تدوير المواد القابلة للاستفادة 
                يساهم في حماية البيئة
            </p>
        </div>
        <div className="awareness-card food-waste-card">
            <h3>🥖 تقليل هدر الطعام</h3>
            <p>
                التخطيط الجيد للوجبات والاستفادة من الطعام 
                بدل التخلص منه يساعد على
                تقليل الهدر والمحافظة على الموارد
            </p>
        </div>
    
      </div>
      <div className="practices-section">
        <h2 className="practices-title">
            ممارسات صديقة للبيئة
        </h2>
        <p className="practices-description">
            يمكن للجميع المساهمة في حماية البيئة 
            من خلال تغييرات بسيطة 
            في العادات اليوميةومكان العمل

        </p>
        <div className="practices-cards">
            <div className="practice-card">
                <h3>🏠 في المنزل</h3>
                <p>
                    تقليل استهلاك الكهرباء والمياه,
                    وفرز النفايات  وتجنب استخدام
                    المنتجات البلاستيكية غير الضرورية
                </p>
            </div>
            <div className="practice-card">
                <h3>🏫 في المدرسة</h3>
                <p>
                    المحافظة على نظافة المكان,
                    تقليل استخدام الورق وتشجيع 
                    الطلاب على اعادة التدوير
                </p>
            </div>
            <div className="practice-card">
                <h3>🏢 في مكان العمل</h3>
                <p>
                     اطفاء الاجهزة عند عدم استخدامها,
                     تقليل استهلاك الورق 
                     واستخدام الموارد بطريقة اكثر كفاءة
                </p>
            </div>
            <div className="practice-card bakery-card">
                <h3>🥖 في المخابز</h3>
                <p>
                    تقليل هدر الطعام , ترشيد استهلاك الطاقة والمياه
                    تقليل النفايتا الناتجة عن عمليات الانتاج والتغليف
                </p>
            </div>
        </div>
      </div>
      <div className="did-you-know">
        <h2 className="did-you-know-title">
            💡 هل تعلم؟
        </h2>
        <div className="facts-container">
            <div className="fact-card">
                <h3>🌱 مواردنا محدودة</h3>
                <p>
                    استخدام الموارد بشكل مسؤول يساعد على 
                    المحافظه عليها للاجيال القادمة
                </p>
            </div>
            <div className="fact-card">
                <h3>♻️ إعادة التدوير</h3>
                <p>
                    فرز المواد القابلة لاعادة التدوير 
                    يقلل من كمية  النفايات التي تصل الى مكب النفايات
                </p>
            </div>
            <div className="fact-card">
                <h3>💧 كل قطرة مهمة</h3>
                <p>
                    تقليل هدر  المياه في حياتنا اليومية
                    يساهم في المحافظة على احد الموارد الحياة
                </p>
            </div>
        </div>
      </div>
      <div className="quiz-section">

  <h2 className="quiz-title">
    🧠 اختبر معلوماتك البيئية
  </h2>

  {!showResult ? (
    <>
      <p className="quiz-progress">
        السؤال {currentQuestion + 1} من {questions.length}
      </p>

      <h3 className="quiz-question">
        {questions[currentQuestion].question}
      </h3>

      <div className="quiz-options">

        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className="quiz-option"
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
  className="quiz-next"
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
    <div className="quiz-result">

      <h3>🎉 انتهى الاختبار!</h3>

      <p>
        نتيجتك: {score} من {questions.length}
      </p>

      <button
        className="quiz-restart"
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
  );
}

export default EnvironmentalAwareness;