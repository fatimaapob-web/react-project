import { Link } from "react-router-dom";

function BakeryCard({ bakery }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#CFC6B5]/50 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7A5742]/10">

      {/* Bakery Image */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#CFC6B5]/50">

        <div className="absolute inset-0 bg-gradient-to-br from-[#CFC6B5]/30 to-[#7A5742]/10" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/70 text-6xl shadow-sm transition duration-500 group-hover:scale-110 group-hover:rotate-2">
          {bakery.emoji}
        </div>

        {/* Rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-[#7A5742] shadow-sm">
          <span>★</span>
          <span>{bakery.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-extrabold text-[#7A5742]">
          {bakery.name}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-[#7A5742]/65">
          <span>📍</span>
          <span>{bakery.location}</span>
        </div>

        <p className="mt-4 min-h-[48px] text-sm leading-7 text-[#7A5742]/70">
          {bakery.description}
        </p>

        {/* Visit Bakery Store */}
        <Link
          to={`/bakery-store/${bakery.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A5742] px-4 py-3 font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#684936] hover:shadow-md active:scale-95"
        >
          <span>زيارة المتجر</span>

          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </Link>

      </div>
    </article>
  );
}

export default BakeryCard;