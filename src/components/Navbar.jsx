import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b"
          : "bg-transparent"
      }`}
    >
      {/* Progress bar */}
      <div 
        className="absolute top-0 left-0 h-px bg-linear-to-r from-sky-400 to-indigo-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        className="flex items-center justify-between px-6 sm:px-10 md:px-20 py-4 md:py-5 
                      text-white relative"
      >
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tighter text-gradient">
          Smita Tiwari
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Links (desktop) */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="text-slate-400 hover:text-sky-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#timeline" className="text-slate-400 hover:text-sky-400 transition-colors">
                Journey
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors">
                Projects
              </a>
            </li>
          </ul>

          {/* CTA (desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 text-sm font-semibold rounded-full
                       bg-slate-800/50 border border-slate-700
                       hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 transition-all"
          >
            Let's talk
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-200 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-200 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-200 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-6 mt-4 w-56 glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 md:hidden ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col text-sm font-medium p-2">
            <li>
              <a
                href="#home"
                className="block px-5 py-3 rounded-xl hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="block px-5 py-3 rounded-xl hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-5 py-3 rounded-xl hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-5 py-3 rounded-xl bg-sky-500/10 text-sky-400"
                onClick={() => setMenuOpen(false)}
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;