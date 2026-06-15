import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "ThreadWeather",
      description:
        "A responsive weather application that delivers real-time forecasts, hourly breakdowns, and interactive radar maps using dynamic API calls and location-based filtering.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "FinTrack",
      description:
        "Personal finance tracking is often scattered across tools. FinTrack centralizes income and expenses into a secure full-stack app with auth and real-time dashboards, helping users track spending, categorize transactions, and gain clear financial insights through analytics and visualizations.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Clerk"],
      github: "https://www.github.com/letgit0/FinTrack",
      live: "https://fin-track-8jpf.vercel.app",
    },
    {
      title: "DeepReview",
      description:
        "DeepReview is an AI-powered code review and developer learning platform that helps developers write cleaner, more maintainable, and production-ready code.",
      tech: ["React", "Tailwind CSS", "React Query","Node.js", "MongoDB", "JWT", "Groq API"],
      github: "https://github.com/letgit0/DeepReview",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white px-6 sm:px-10 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-sky-500/5 blur-[120px] pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mb-16 relative z-10">
        <p className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-4">
          My portfolio
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;