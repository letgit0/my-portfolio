import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-16">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="font-bold text-lg tracking-tight text-zinc-900">
            Smita Tiwari
          </h2>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            © {new Date().getFullYear()} — Built with focus and clarity.
          </p>
        </div>

        {/* Center */}
        {/* Center */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest">
          <a href="#home" className="text-zinc-500 hover:text-accent transition-colors">
            Home
          </a>
          <a href="#timeline" className="text-zinc-500 hover:text-accent transition-colors">
            Journey
          </a>
          <a href="#projects" className="text-zinc-500 hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-zinc-500 hover:text-accent transition-colors">
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
            className="text-zinc-400 hover:text-accent transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/smita27/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-accent transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
