function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="flex flex-col h-full group">
      
      {/* Visual Placeholder / Icon */}
      <div className="aspect-video bg-zinc-100 border border-zinc-200 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
           </svg>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-zinc-900 tracking-tight">
        {title}
      </h3>

      <p className="text-zinc-500 mb-6 leading-relaxed text-sm line-clamp-3">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-bold tracking-widest uppercase text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-6 text-[11px] font-bold uppercase tracking-widest">
        {live !== "#" && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Live Site
          </a>
        )}

        {github !== "#" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;