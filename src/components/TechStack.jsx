import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      skills: [{ name: "MongoDB", icon: <SiMongodb /> }],
    },
    {
      title: "Languages (DSA)",
      skills: [{ name: "Java", icon: <FaJava /> }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscCode /> },
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="bg-slate-900 text-white px-6 sm:px-10 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <p className="text-slate-400 mb-2">What I work with</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Tech Stack
        </h2>
        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          MERN stack developer + solving DSA problems in Java
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 sm:p-6"
          >
            <h3 className="text-sky-400 font-semibold mb-5 text-sm sm:text-base">
              {cat.title}
            </h3>

            <div className="space-y-4">
              {cat.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm text-slate-200">{skill.name}</span>
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
