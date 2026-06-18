import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "FinTrack",
      description:
        "Built to securely track personal finances with role-based access, using MERN stack, TypeScript, and Clerk authentication with protected routes.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
      github: "https://github.com/letgit0/FinTrack",
      live: "https://fin-track-8jpf.vercel.app",
    },
    {
      title: "DeepReview",
      description:
        "Built an AI-powered code review tool that generates structured feedback using LLMs, with JWT auth and secure user history tracking.",
      tech: ["React", "Node.js", "MongoDB", "Groq API"],
      github: "https://github.com/letgit0/DeepReview",
      live: "#",
    },
    {
      title: "Blogify",
      description:
        "Built a blogging platform with auth, role-based access, post publishing, comments, and server-rendered UI using EJS.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/letgit0/Blogify",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-bg-light text-brand-primary py-32 border-t border-zinc-100"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-2xl mb-24">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
            Building digital tools with focus on stability and clarity.
          </h2>
        </div>

        {/* Grid - Slight asymmetry with col-span and padding */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {projectList.map((project, index) => (
            <div key={index} className={index === 1 ? "md:mt-12" : ""}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;