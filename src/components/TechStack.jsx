import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaMicrochip, FaDatabase} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiPostman, SiTypescript,SiCplusplus, SiVercel, SiHtml5 } from "react-icons/si";
import { VscCode, VscServerProcess, VscGlobe, VscDatabase, VscLibrary } from "react-icons/vsc";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Languages",
      skills: ["Java", "C++", "JavaScript"],
    },
    {
      title: "CS Fundamentals",
      skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Vercel", "VS Code"],
    },
  ];

  return (
    <section
      id="tech"
      className="bg-bg-light py-32 border-t border-zinc-100"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-2xl mb-24">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            My toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
            Technologies I use to build robust applications.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <h3 className="text-zinc-900 font-bold uppercase tracking-widest text-[11px] mb-6 border-b border-zinc-200 pb-2 w-fit">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-[13px] font-medium text-zinc-500 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
