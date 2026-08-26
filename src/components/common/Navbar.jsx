import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContribute, setShowContribute] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [initiatives, setInitiatives] = useState(() => {
    const saved = localStorage.getItem("initiatives");
    return saved ? JSON.parse(saved) : [];
  });

  const [initiative, setInitiative] = useState({
    name: "",
    product: "",
    description: "",
    contact: "",
  });

  const handleSubmit = () => {
    if (
      !initiative.name ||
      !initiative.product ||
      !initiative.description ||
      !initiative.contact
    ) {
      alert("يرجى ملء جميع الحقول 🌱");
      return;
    }

    const newInitiative = {
      id: Date.now(),
      ...initiative,
    };

    const updatedInitiatives = [...initiatives, newInitiative];

    setInitiatives(updatedInitiatives);

    localStorage.setItem(
      "initiatives",
      JSON.stringify(updatedInitiatives)
    );

    alert("تم حفظ مبادرتك بنجاح 🌱");

    setInitiative({
      name: "",
      product: "",
      description: "",
      contact: "",
    });

    setShowForm(false);
    setShowContribute(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav dir="rtl" className="w-full px-4 pt-4 mb-6">
      <div className="mx-auto flex min-h-[76px] w-full items-center justify-between rounded-3xl bg-[#CFC6B5] px-6 shadow-md shadow-[#7A5742]/10 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl shadow-md transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
            <img
              src="/images/logo.jpg"
              alt="شعار الموقع"
              className="h-full w-full object-cover"
            />
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

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            to="/"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            الرئيسية
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/bakeries"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            المخابز
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/environmental-awareness"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            التوعية البيئية
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/articles"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            المقالات
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/tips"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            النصائح
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/about-project"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            عن المشروع
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          <Link
            to="/contact-us"
            className="group relative rounded-xl px-4 py-2 font-semibold text-[#7A5742] transition duration-300 hover:bg-white/40"
          >
            تواصل معنا
            <span className="absolute bottom-1 right-1/2 h-[2px] w-0 translate-x-1/2 rounded-full bg-[#7A5742] transition-all duration-300 group-hover:w-6" />
          </Link>

          {/* Contribute Button */}
          <button
            type="button"
            onClick={() => setShowContribute(true)}
            className="flex items-center gap-2 rounded-2xl bg-[#7A5742] px-5 py-3 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            <span>♻️</span>
            ساهم معنا
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 w-full rounded-3xl bg-[#CFC6B5] p-4 shadow-lg md:hidden">
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
              to="/tips"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-center font-semibold text-[#7A5742] transition hover:bg-white/40"
            >
              النصائح
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

            <button
              type="button"
              onClick={() => {
                setShowContribute(true);
                closeMenu();
              }}
              className="mt-2 rounded-2xl bg-[#7A5742] px-4 py-3 text-center font-bold text-white"
            >
              ♻️ ساهم معنا
            </button>

          </div>
        </div>
      )}

      {/* Contribute Modal */}
      {showContribute && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => setShowContribute(false)}
        >
          <div
            dir="rtl"
            className="w-full max-w-md rounded-3xl bg-[#FAF9F7] p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#7A5742]">
                ساهم معنا ♻️
              </h2>

              <button
                type="button"
                onClick={() => setShowContribute(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CFC6B5] text-lg text-[#7A5742] transition hover:scale-105"
              >
                ×
              </button>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">🌱</div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                هل لديك منتج أو مبادرة صديقة للبيئة؟
              </h3>

              <p className="mb-6 leading-7 text-gray-600">
                شاركنا بها لتكون جزءًا من مجتمعنا المستدام وتساعد في نشر
                الأفكار والمبادرات التي تصنع فرقًا.
              </p>

              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="w-full rounded-2xl bg-[#7A5742] px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                ✏️ شارك مبادرتك
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Initiative Form */}
      {showForm && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        >
          <div
            dir="rtl"
            className="w-full max-w-lg rounded-3xl bg-[#FAF9F7] p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#7A5742]">
                شارك مبادرتك 🌱
              </h2>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CFC6B5] text-xl text-[#7A5742]"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="اسم المبادرة"
                value={initiative.name}
                onChange={(e) =>
                  setInitiative({
                    ...initiative,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-[#CFC6B5] bg-white px-5 py-3 outline-none transition focus:border-[#7A5742]"
              />

              <input
                type="text"
                placeholder="اسم المنتج أو الفكرة"
                value={initiative.product}
                onChange={(e) =>
                  setInitiative({
                    ...initiative,
                    product: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-[#CFC6B5] bg-white px-5 py-3 outline-none transition focus:border-[#7A5742]"
              />

              <textarea
                rows="4"
                placeholder="اكتب لنا نبذة عن مبادرتك..."
                value={initiative.description}
                onChange={(e) =>
                  setInitiative({
                    ...initiative,
                    description: e.target.value,
                  })
                }
                className="w-full resize-none rounded-2xl border border-[#CFC6B5] bg-white px-5 py-3 outline-none transition focus:border-[#7A5742]"
              />

              <input
                type="text"
                placeholder="رابط أو وسيلة تواصل"
                value={initiative.contact}
                onChange={(e) =>
                  setInitiative({
                    ...initiative,
                    contact: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-[#CFC6B5] bg-white px-5 py-3 outline-none transition focus:border-[#7A5742]"
              />

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-2xl bg-[#7A5742] px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                إرسال المبادرة 🌿
              </button>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;