function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-400/40 transition flex flex-col justify-between">
      
      {/* Top */}
      <div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-sky-400 transition">
          {title}
        </h3>

        <p className="text-slate-300 mb-5 leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-slate-700 rounded-md text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      {/* <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="text-sm px-4 py-2 bg-sky-400 text-black rounded-md font-medium hover:bg-sky-500 transition"
        >
          Live
        </a>

        <a
          href={github}
          target="_blank"
          className="text-sm px-4 py-2 border border-slate-600 rounded-md hover:border-sky-400 hover:text-sky-400 transition"
        >
          GitHub
        </a>
      </div> */}
    </div>
  );
}

export default ProjectCard;