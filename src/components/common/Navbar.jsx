import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#7A5742] px-8 py-5 text-[#CFC6B5] shadow-md">

      <div className="text-2xl font-bold">
  🌱 Eco Circle
</div>

      <ul className="flex items-center gap-8">

        <li className="transition duration-200 hover:-translate-y-1">
          <Link className="text-lg font-semibold transition duration-200 hover:text-white"
           to="/environmental-awareness">
            التوعية البيئية
          </Link>
        </li>

        <li className="transition duration-200 hover:-translate-y-1">
          <Link className="text-lg font-semibold transition duration-200 hover:text-white"
          to="/about-project">
            عن المشروع
          </Link>
        </li>

        <li className="transition duration-200 hover:-translate-y-1">
          <Link className="text-lg font-semibold transition duration-200 hover:text-white"
          to="/contact-us">
            تواصل معنا
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;