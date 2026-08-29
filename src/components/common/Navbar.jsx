
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 z-50 w-full px-4 pt-4"
    >
      <div className="mx-auto flex min-h-[76px] w-full items-center justify-between rounded-3xl bg-[#CFC6B5] px-6 shadow-md shadow-[#7A5742]/10 md:px-10">

        {/* =========================
            اليمين: البحث + الروابط
        ========================= */}
        <div className="hidden items-center gap-2 md:flex">

          

          {/* الرئيسية */}
          <Link
            to="/"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            الرئيسية
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* المخابز */}
          <Link
            to="/bakeries"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            المخابز
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* المنتجات */}
          <Link
            to="/products"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            المنتجات
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* التوعية */}
          <Link
            to="/environmental-awareness"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            التوعية البيئية
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* المقالات */}
          <Link
            to="/articles"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            المقالات
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* عن المشروع */}
          <Link
            to="/about-project"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            عن المشروع
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* تواصل معنا */}
          <Link
            to="/contact-us"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            تواصل معنا
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* ساهم معنا */}
          <Link
            to="/contact-us"
            className="flex items-center gap-2 rounded-2xl bg-[#7A5742] px-5 py-3 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <span>♻️</span>
            ساهم معنا
          </Link>
        </div>

        {/* =========================
            اليسار: الشعار
        ========================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7A5742] text-xl shadow-md transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
            🌱
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-[#7A5742]">
              بيئتنا
            </span>

            <span className="text-[10px] font-medium text-[#7A5742]/70">
              نحو بيئة أفضل
            </span>
          </div>
        </Link>

        {/* =========================
            زر الموبايل
        ========================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl bg-[#7A5742] md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* =========================
          قائمة الموبايل
      ========================= */}
      {menuOpen && (
        <div className="mx-auto mt-2 w-full rounded-3xl bg-[#CFC6B5] p-4 shadow-lg md:hidden">

          {/* البحث بالموبايل */}
          <form
            onSubmit={handleSearch}
            className="mb-3 flex gap-2"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث في الموقع..."
              className="flex-1 rounded-2xl border border-[#7A5742]/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#7A5742] outline-none focus:bg-white"
            />

            <button
              type="submit"
              className="rounded-2xl bg-[#7A5742] px-4 text-white"
            >
              🔍
            </button>
          </form>

          <div className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              الرئيسية
            </Link>

            <Link
              to="/bakeries"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              المخابز
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              المنتجات
            </Link>

            <Link
              to="/environmental-awareness"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              التوعية البيئية
            </Link>

            <Link
              to="/articles"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              المقالات
            </Link>

            <Link
              to="/about-project"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              عن المشروع
            </Link>

            <Link
              to="/contact-us"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              تواصل معنا
            </Link>

            <Link
              to="/contact-us"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-[#7A5742] px-4 py-3 text-center font-bold text-white"
            >
              ♻️ ساهم معنا
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
