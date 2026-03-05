import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header({ cart, setIsCartOpen, darkMode, setDarkMode, isCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* 🔶 Moving Top Bar */}
      <div className="bg-yellow-400 text-black overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block py-3 font-bold uppercase tracking-widest text-sm">
          Free Shipping on Orders Above ₹3999 • Jasmeet's Journey • New Nail Art Techniques • Free Shipping on Orders Above ₹3999 •
        </div>
      </div>

      {/* 🔶 Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-black text-white">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="sm:text-xl md:text-2xl font-serif font-bold cursor-pointer"
        >
          ETHEREAL <span className="text-yellow-400">STROKES</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`hover:text-yellow-400 transition cursor-pointer ${
                activeSection === "home" ? "text-yellow-400" : ""
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("collection")}
              className={`hover:text-yellow-400 transition cursor-pointer ${
                activeSection === "collection" ? "text-yellow-400" : ""
              }`}
            >
              Shop Book
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("journey")}
              className={`hover:text-yellow-400 transition cursor-pointer ${
                activeSection === "journey" ? "text-yellow-400" : ""
              }`}
            >
              Story
            </button>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* 🌙 Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white cursor-pointer text-black p-2 rounded-full shadow hover:scale-110 transition"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>

          {/* 👜 Cart */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative cursor-pointer text-xl hover:scale-110 transition"
          >
            <FaCartShopping className="text-2xl" />
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-2 rounded-full">
              {totalQty}
            </span>
          </button>

          {/* 🍔 Hamburger (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 🔶 Mobile Dropdown */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-yellow-400 cursor-pointer ${
              activeSection === "home" ? "text-yellow-400" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("collection")}
            className={`hover:text-yellow-400 cursor-pointer ${
              activeSection === "collection" ? "text-yellow-400" : ""
            }`}
          >
            Shop Book
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className={`hover:text-yellow-400 cursor-pointer ${
              activeSection === "journey" ? "text-yellow-400" : ""
            }`}
          >
            Story
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;