function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-10 md:px-20 bg-slate-900 text-white overflow-hidden bg-mesh"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-sky-500/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl w-full mx-auto relative z-10 animate-fade-in-up">

        {/* small intro */}
        <p className=" font-medium tracking-widest uppercase text-xs sm:text-sm mb-4">
          Hey, I'm
        </p>

        {/* name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
           <span className="text-gradient">Smita Tiwari</span>
        </h1>

        {/* role */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium mb-8 max-w-2xl">
          I build <span className="text-white">software</span> that doesn’t feel clunky and <span className="text-white">interfaces</span> that make sense.
        </h2>

        {/* description */}
        <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
          Currently exploring better ways to structure applications so they’re easier to work with and don’t turn into something I regret later.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-12">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-sky-500 text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-full hover:border-sky-400 hover:bg-sky-400/5 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Let’s talk
          </a>
        </div>

        {/* social */}
        <div className="flex items-center gap-8">
          <div className="h-px w-12 bg-slate-700 hidden sm:block"></div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-500 uppercase tracking-widest">
            <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;