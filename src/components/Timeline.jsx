import { useEffect, useRef, useState } from "react";

function Timeline() {
  const items = [
    {
      year: "2026",
      type: "education",
      icon: "🎓",
      title: "3rd Year, B.Tech CSE",
      desc: "Focused on building real software, strengthening computer science fundamentals, and learning by creating projects that solve actual problems.",
      current: true
    },
    {
      year: "2025",
      type: "projects",
      icon: "🚀",
      title: "Built Real Projects",
      desc: "Moved beyond tutorials. Built apps with APIs, managed state, debugged issues, and learned how things actually break in real scenarios.",
    },
    {
      year: "2024",
      type: "start",
      icon: "💼",
      title: "Started Web Development",
      desc: "HTML, CSS, JavaScript. Learned the basics and built my first responsive sites.",
    }
  ];

  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      className="bg-slate-900 text-white px-6 sm:px-10 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/2 bg-sky-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-1/4 h-1/3 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mb-16 relative z-10">
        <p className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-4">
          My journey
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
          Learning by <span className="text-gradient">building</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto md:mx-0">
        {/* vertical line gradient */}
        <div className="absolute left-3.5 top-0 h-full w-0.5 bg-linear-to-b from-sky-500 via-indigo-500 to-slate-800 rounded-full"></div>

        <div className="space-y-16">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative pl-12 transition-all duration-1000 ease-out ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* icon + dot */}
              <div
                className={`absolute left-0 top-0 flex items-center justify-center w-7.5 h-7.5 rounded-full text-sm z-10 shadow-lg shadow-sky-500/20
                ${
                  item.current
                    ? "bg-sky-500 text-slate-900 ring-4 ring-sky-500/20"
                    : "bg-slate-800 border border-slate-700 text-slate-300"
                }`}
              >
                <span className="text-xs">{item.icon}</span>
              </div>

              {/* card */}
              <div
                className={`group p-8 rounded-2xl border glass-hover transition-all duration-300 ${
                  item.current
                    ? "border-sky-500/30 bg-sky-500/5 shadow-2xl shadow-sky-500/5"
                    : "border-slate-800 glass"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    item.current ? "bg-sky-500 text-slate-900" : "bg-slate-800 text-slate-400 border border-slate-700"
                  }`}>
                    {item.year}
                  </span>
                  {item.current && (
                    <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;