import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md shadow-xl">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold font-ubuntu flex items-center space-x-1 select-none"
          aria-label="Home"
        >
          <span className="text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.9)] transition-shadow duration-300 hover:drop-shadow-[0_0_14px_rgba(244,114,182,1)]">
            Cristian
          </span>
          <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
            .dev
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-12 text-white/90 font-semibold font-lora tracking-wide">
          {["hero", "about", "projects", "techstack"].map((section) => (
            <li key={section} className="relative group cursor-pointer">
              <a
                href={`#${section}`}
                className="relative z-10 py-1 transition-colors duration-300 hover:text-pink-400"
              >
                {section[0].toUpperCase() + section.slice(1)}
              </a>
              {/* Underline animated */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
        >
          {/* Linie 1 */}
          <span
            className={`block absolute h-0.5 w-6 bg-pink-400 rounded transform transition duration-300 ease-in-out
              ${isOpen ? "rotate-45 top-4" : " -translate-y-1.5 top-3"}`}
          />
          {/* Linie 2 */}
          <span
            className={`block absolute h-0.5 w-6 bg-pink-400 rounded transition-opacity duration-300 ease-in-out
              ${isOpen ? "opacity-0" : "opacity-100 top-4"}`}
          />
          {/* Linie 3 */}
          <span
            className={`block absolute h-0.5 w-6 bg-pink-400 rounded transform transition duration-300 ease-in-out
              ${isOpen ? "-rotate-45 top-4" : " translate-y-1.5 top-5"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
{isOpen && (
  <ul
    className="md:hidden fixed top-16 left-0 w-full bg-black/70 backdrop-blur-md py-6 px-6 space-y-4 text-white font-lora z-50 border-t border-pink-400/20"
    role="menu"
  >
    {["hero", "about", "projects", "techstack"].map((section) => (
      <li key={section}>
        <a
          href={`#${section}`}
          onClick={() => setIsOpen(false)}
          className="block text-base font-medium px-3 py-2 rounded-md
            hover:text-pink-400 transition-colors duration-200
            focus:outline-none focus:border-b-2 focus:border-pink-400"
          role="menuitem"
        >
          {section[0].toUpperCase() + section.slice(1)}
        </a>
      </li>
    ))}
  </ul>
)}

    </nav>
  );
}
