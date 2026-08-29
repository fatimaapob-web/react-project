function ContactUs() {
  return (
    <section
      dir="rtl"
      className="mx-4 my-6 min-h-screen rounded-[40px] bg-[#CFC6B5] px-6 py-12 md:mx-8"
    >

      <h1 className="page-title w-full text-center text-5xl font-bold text-[#7A5742]">
  📞 تواصل معنا
</h1>
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