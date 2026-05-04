import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700"
          : "bg-transparent"
      }`}
    >
      <div
        className="flex items-center justify-between px-5 sm:px-8 md:px-20 py-4 md:py-5 
                      text-slate-900 dark:text-white relative"
      >
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight">
          Smita
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {/* Links (desktop) */}
          <ul className="hidden md:flex gap-5 lg:gap-6 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-sky-500 transition">
                Journey
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-sky-500 transition">
                Projects
              </a>
            </li>
          </ul>

          {/* CTA (desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 text-sm rounded-md
                       border border-slate-300 dark:border-slate-600
                       hover:border-sky-500 hover:text-sky-500 transition"
          >
            Connect
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-full right-5 mt-3 w-44 
                       bg-white dark:bg-slate-900 
                       border border-slate-200 dark:border-slate-700 
                       rounded-md shadow-lg md:hidden"
          >
            <ul className="flex flex-col text-sm font-medium">
              <li>
                <a
                  href="#home"
                  className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Connect
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;