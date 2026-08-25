function App() {
  return (
    <div className="home">

     


      {/* Hero */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">
            <span className="hero-label">
              🌱 نحو بيئة أفضل
            </span>

            <h1>
              لأن البيئة
              <br />
              <strong>تستحق اهتمامنا</strong>
            </h1>

            <p>
              نؤمن أن التغيير الحقيقي يبدأ بخطوات بسيطة.
              تعرّف على طرق أكثر وعيًا للحفاظ على بيئتنا
              وصحتنا وصناعة مستقبل أكثر استدامة.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                اكتشف المزيد
              </button>

              <button className="secondary-button">
                تعرّف علينا
              </button>
            </div>

          </div>


          <div className="hero-visual">

            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>

            <div className="nature-card">
              <div className="leaf-icon">🌿</div>

              <h3>خطوة صغيرة</h3>

              <p>
                اليوم نصنع فرقًا للغد
              </p>
            </div>

            <div className="floating-card">
              <span>♻️</span>
              <div>
                <strong>استدامة</strong>
                <small>أسلوب حياة</small>
              </div>
            </div>

          </div>

        </section>


        {/* Stats */}
        <section className="stats">

          <div className="stat">
            <span>01</span>
            <div>
              <h3>وعي</h3>
              <p>ننشر المعرفة البيئية</p>
            </div>
          </div>

          <div className="stat">
            <span>02</span>
            <div>
              <h3>صحة</h3>
              <p>نهتم بصحة الإنسان</p>
            </div>
          </div>

          <div className="stat">
            <span>03</span>
            <div>
              <h3>استدامة</h3>
              <p>نحافظ على مواردنا</p>
            </div>
          </div>

        </section>


        {/* About */}
        <section id="about" className="about-section">

          <div className="section-heading">
            <span>عن مشروعنا</span>

            <h2>
              بيئة أفضل تبدأ
              <br />
              <strong>بقرار واعٍ</strong>
            </h2>
          </div>

          <div className="about-content">

            <p>
              مشروعنا يهدف إلى نشر الثقافة البيئية وتشجيع
              المجتمع على تبني ممارسات أكثر أمانًا واستدامة
              في الحياة اليومية.
            </p>

            <p>
              من خلال المعلومات والنصائح والحلول العملية،
              نسعى إلى بناء مجتمع أكثر وعيًا بتأثير
              اختياراته على الإنسان والبيئة.
            </p>

          </div>

        </section>


        {/* Environmental Tips */}
        <section id="tips" className="tips-section">

          <div className="section-title">
            <span>نصائح بسيطة</span>

            <h2>
              تغييرات صغيرة،
              <strong> أثر كبير</strong>
            </h2>

            <p>
              بعض العادات اليومية البسيطة يمكن أن تصنع
              فرقًا حقيقيًا في البيئة.
            </p>
          </div>


          <div className="tips-grid">

            <div className="tip-card">
              <div className="tip-icon">♻️</div>

              <h3>إعادة الاستخدام</h3>

              <p>
                حاول استخدام الأشياء أكثر من مرة
                قبل التخلص منها.
              </p>
            </div>


            <div className="tip-card">
              <div className="tip-icon">🌱</div>

              <h3>اختيارات أكثر استدامة</h3>

              <p>
                اختر المنتجات والمواد التي يكون
                تأثيرها أقل على البيئة.
              </p>
            </div>


            <div className="tip-card">
              <div className="tip-icon">💧</div>

              <h3>حافظ على الموارد</h3>

              <p>
                الاستخدام المسؤول للمياه والطاقة
                يساعد في حماية مواردنا.
              </p>
            </div>


            <div className="tip-card">
              <div className="tip-icon">🌍</div>

              <h3>كن جزءًا من التغيير</h3>

              <p>
                شارك المعرفة وشجع من حولك على
                تبني عادات صديقة للبيئة.
              </p>
            </div>

          </div>

        </section>


        {/* Impact */}
        <section id="impact" className="impact-section">

          <div className="impact-text">

            <span>أثرنا</span>

            <h2>
              عندما نغيّر
              <br />
              <strong>عاداتنا، تتغير بيئتنا</strong>
            </h2>

            <p>
              الهدف ليس أن يكون التغيير مثاليًا،
              بل أن يبدأ. كل اختيار واعٍ اليوم يمكن
              أن يساهم في مستقبل أكثر صحة واستدامة.
            </p>

            <button className="primary-button">
              اكتشف طرقًا أكثر
            </button>

          </div>


          <div className="impact-box">

            <div className="big-leaf">🌿</div>

            <h3>مستقبل مستدام</h3>

            <p>
              الإنسان والبيئة
              <br />
              وجهان لمستقبل واحد.
            </p>

          </div>

        </section>


        {/* CTA */}
        <section className="cta">

          <span>🌱 لنبدأ التغيير</span>

          <h2>
            كن جزءًا من
            <br />
            <strong>مستقبل أكثر استدامة</strong>
          </h2>

          <p>
            المعرفة هي أول خطوة نحو التغيير.
          </p>

          <button className="primary-button">
            تعرّف أكثر
          </button>

        </section>

      </main>


    </div>
  )
}

export default App
