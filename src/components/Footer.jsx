function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Smita. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#timeline" className="hover:text-white transition">Journey</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right */}
        <div className="flex gap-5 text-sm">
          <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="#">🌸🌸</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;