function ContactUs() {
  return (
    <section
      dir="rtl"
      className="min-h-screen bg-[#CFC6B5] px-6 py-12 text-[#7A5742]"
    >

      <h2 className="mb-4 text-center text-4xl font-bold">
        📞 تواصل معنا
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-8">
        إذا كانت لديك أي استفسارات أو مقترحات،
        يسعدنا التواصل معك والاستماع إلى أفكارك
        التي تساهم في نشر الوعي البيئي 🌱
      </p>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

        <div className="rounded-3xl bg-[#7A5742] p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-[#CFC6B5]">
            📧 البريد الإلكتروني
          </h3>

          <p className="text-lg text-[#CFC6B5]">
            ghufrannhabbib99@gmail.com
          </p>
        </div>

        <div className="rounded-3xl bg-[#45427A] p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-[#CFC6B5]">
            📱 رقم الهاتف
          </h3>

          <p className="text-lg text-[#CFC6B5]">
            07770000000
          </p>
        </div>

      </div>

    </section>
  );
}

export default ContactUs;