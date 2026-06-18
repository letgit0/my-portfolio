function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-bg-light text-brand-primary pt-20"
    >
      <div className="section-container w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        <div className="animate-fade-in-up">
          {/* small intro */}
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-6">
            Software Developer
          </p>

          {/* name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-zinc-900">
            Smita<br />Tiwari
          </h1>

          {/* role & description */}
          <div className="max-w-lg">
            <h2 className="text-xl sm:text-2xl text-zinc-800 font-medium mb-6 leading-snug">
              I build functional, high-performance software and interfaces that feel effortless to use.
            </h2>

            <p className="text-zinc-500 text-base sm:text-lg mb-10 leading-relaxed">
              Currently focused on architectural patterns that prioritize maintainability and scalability, ensuring codebases remain clean as they grow.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-zinc-900 text-white font-bold text-[13px] tracking-widest uppercase hover:bg-zinc-800 transition-all text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-zinc-200 text-zinc-900 font-bold text-[13px] tracking-widest uppercase hover:bg-zinc-50 transition-all text-center"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* social */}
          <div className="flex items-center gap-6 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
            <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* decorative element (hidden on small screens) */}
        <div className="hidden md:block relative h-full">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full aspect-square border border-zinc-100 bg-zinc-50/50 rounded-sm rotate-3 opacity-50"></div>
             <div className="absolute w-full aspect-square border border-zinc-200 rounded-sm -rotate-6 opacity-30"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;