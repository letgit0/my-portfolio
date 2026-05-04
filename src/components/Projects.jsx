import ProjectCard from "./ProjectCard";

function Projects() {
  // const projectList = [
  //   {
  //     title: "Portfolio Website",
  //     description:
  //       "A personal portfolio to showcase my work and skills with a focus on clean UI and smooth interactions.",
  //     tech: ["React", "Tailwind"],
  //     github: "#",
  //     live: "#",
  //   },
  //   {
  //     title: "Todo App",
  //     description:
  //       "A simple task manager with CRUD features and persistent storage using localStorage.",
  //     tech: ["React", "LocalStorage"],
  //     github: "#",
  //     live: "#",
  //   },
  //   {
  //     title: "API Dashboard",
  //     description:
  //       "Dashboard that fetches and displays real-time data from APIs with loading states and error handling.",
  //     tech: ["React", "API", "Tailwind"],
  //     github: "#",
  //     live: "#",
  //   },
  // ];
  const projectList = [
  {
    title: "ThreadWeather",
    description:
      "A responsive weather application that delivers real-time forecasts, hourly breakdowns, and interactive radar maps using dynamic API calls and location-based filtering.",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
  },
  {
    title: "SwiftTask Management System",
    description:
      "A high-performance productivity dashboard featuring drag-and-drop task organization, persistent local state, and real-time category filtering.",
    tech: ["React", "Context API", "LocalStorage"],
  },
  {
    title: "DataPulse Analytics Dashboard",
    description:
      "An interactive data visualization platform that converts raw REST API payloads into dynamic graphs, complete with skeletal loading states and comprehensive error boundaries.",
    tech: ["React", "Recharts", "Tailwind CSS"],
  },
];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white px-8 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <p className="text-slate-400 mb-2">Some things I’ve built</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Projects that actually taught me something
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;