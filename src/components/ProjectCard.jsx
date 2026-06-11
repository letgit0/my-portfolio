function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="group glass glass-hover p-8 rounded-2xl flex flex-col justify-between transition-all duration-300">
      
      {/* Top */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-900 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 mb-8 leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 font-bold tracking-wider uppercase group-hover:border-sky-500/30 group-hover:text-sky-400/70 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <a
          href={live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-3 bg-sky-500 text-slate-900 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/10"
        >
          Live Demo
        </a>

        <a
          href={github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-3 border border-slate-700 text-slate-300 text-xs font-black uppercase tracking-widest rounded-xl hover:border-sky-500/50 hover:text-sky-400 transition-all bg-slate-800/30"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;