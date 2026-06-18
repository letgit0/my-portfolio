import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold tracking-tight text-zinc-900 hover:text-accent transition-colors">
          Smita Tiwari
        </a>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Links (desktop) */}
          <ul className="hidden md:flex gap-8 text-[13px] font-medium tracking-wide uppercase">
            <li>
              <a href="#home" className="text-zinc-500 hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#timeline" className="text-zinc-500 hover:text-accent transition-colors">
                Journey
              </a>
            </li>
            <li>
              <a href="#projects" className="text-zinc-500 hover:text-accent transition-colors">
                Projects
              </a>
            </li>
          </ul>

          {/* CTA (desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 text-[13px] font-bold tracking-wide uppercase border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all"
          >
            Contact
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-zinc-200 transition-all duration-300 md:hidden ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col text-sm font-medium py-4 px-6 gap-4">
            <li>
              <a href="#home" className="text-zinc-600" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#timeline" className="text-zinc-600" onClick={() => setMenuOpen(false)}>Journey</a>
            </li>
            <li>
              <a href="#projects" className="text-zinc-600" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-zinc-900 font-bold" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;