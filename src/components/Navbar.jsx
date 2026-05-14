import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBooking = () => {
    setIsOpen(false);
    navigate("/");
    setTimeout(() => scrollTo("booking"), 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1E1040]/90 border-b border-purple-400/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-cormorant text-3xl tracking-[0.2em] text-[#C4AAEE]"
        >
          JANA
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-[0.15em] text-[#B8AACC]">
          <li
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo("services")}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo("gallery")}
          >
            Gallery
          </li>
          <li
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollTo("testimonials")}
          >
            Reviews
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Right side — Book Now + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleBooking}
            className="bg-[#5C3AA0] border border-[#8B65C8] px-6 py-3 text-xs uppercase tracking-[0.15em] rounded hover:bg-[#8B65C8] transition-colors duration-300"
          >
            Book Now
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#C4AAEE] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.75" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#C4AAEE] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#C4AAEE] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-[#1E1040] border-t border-purple-400/10 px-6 py-4 gap-1">
          {[
            { label: "Services", id: "services" },
            { label: "Gallery", id: "gallery" },
            { label: "Reviews", id: "testimonials" },
          ].map(({ label, id }) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className="cursor-pointer py-3 text-sm uppercase tracking-[0.15em] text-[#B8AACC] hover:text-white transition-colors border-b border-purple-400/10"
            >
              {label}
            </li>
          ))}
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.15em] text-[#B8AACC] hover:text-white transition-colors border-b border-purple-400/10"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}