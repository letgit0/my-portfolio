import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaMicrochip, FaDatabase} from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiPostman, SiTypescript,SiCplusplus, SiVercel, SiHtml5 } from "react-icons/si";
import { VscCode, VscServerProcess, VscGlobe, VscDatabase, VscLibrary } from "react-icons/vsc";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss />},
        { name: "Typescript", icon: <SiTypescript />},
        { name: "HTML", icon: <SiHtml5 />}
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "REST APIs", icon: <VscServerProcess />}
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <FaDatabase /> }
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus />},
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscCode /> },
        { name: "Postman", icon: <SiPostman />},
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "DBMS", icon: <VscDatabase />},
        { name: "Computer Networks", icon: <VscGlobe />},
        { name: "Operating Systems", icon: <FaMicrochip />},
        { name: "OOP", icon: <VscLibrary />}
      ]
    }
  ];

  return (
    <section
      id="tech"
      className="bg-slate-900 text-white px-6 sm:px-10 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-sky-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mb-16 relative z-10">
        <p className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-4">
          My toolbox
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-slate-400 mt-6 text-base sm:text-lg max-w-2xl leading-relaxed">
          A comprehensive overview of the technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="glass glass-hover rounded-3xl p-8 group flex flex-col"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
              <h3 className="text-sky-400 font-black uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                {cat.title}
              </h3>
            </div>

            {/* Skills Wrap */}
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 px-4 py-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl group/skill hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
                >
                  <span className="text-xl text-slate-400 group-hover/skill:text-sky-400 transition-colors group-hover/skill:scale-110 duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-s font-bold text-slate-300 group-hover/skill:text-white transition-colors ">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
