function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 sm:px-10 md:px-20 bg-slate-900 text-white"
    >
      <div className="max-w-3xl w-full mx-auto">

        {/* small intro */}
        <p className="text-slate-400 mb-2 text-sm sm:text-base">
          Hey, I’m
        </p>

        {/* name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Smita
        </h1>

        {/* role */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-sky-400 mb-6">
          I build frontend stuff that doesn’t feel clunky.
        </h2>

        {/* description */}
        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
          Mostly working with React. I like clean UI, fast load times,
          and interfaces that actually make sense.  
          Currently exploring better ways to structure apps and not
          hate my own code later.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-400 text-black font-semibold rounded-md hover:bg-sky-500 transition text-center"
          >
            See what I’ve built
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-600 rounded-md hover:border-sky-400 hover:text-sky-400 transition text-center"
          >
            Let’s talk
          </a>
        </div>

        {/* social */}
        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          {/* <a href="https://twitter.com/smita" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a> */}
        </div>

      </div>
    </section>
  );
}

export default Hero;