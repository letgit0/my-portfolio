import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-500 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-gradient font-black text-xl tracking-tighter">
            Smita
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-sky-400 transition-colors">
            Home
          </a>
          <a href="#timeline" className="hover:text-sky-400 transition-colors">
            Journey
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/letgit0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/smita-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
