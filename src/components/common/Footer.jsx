function Footer() {
  return (
    <footer className="bg-[#7A5742] px-6 py-8 text-[#CFC6B5]">

      <div className="mx-auto max-w-6xl text-center">

        <h2 className="mb-3 text-2xl font-bold">
          🌱 Eco Circle
        </h2>

        <p className="mx-auto mb-5 max-w-xl leading-7">
          معًا نحو وعي بيئي أكبر وممارسات أكثر استدامة
          من أجل بيئة أفضل للجميع.
        </p>

        <div className="mb-5 flex justify-center gap-6 text-sm font-semibold">
          <span>التوعية البيئية</span>
          <span>عن المشروع</span>
          <span>تواصل معنا</span>
        </div>

        <div className="border-t border-[#CFC6B5]/30 pt-5 text-sm">
          © 2026 Eco Circle — جميع الحقوق محفوظة
        </div>

      </div>

    </footer>
  );
}

export default Footer;