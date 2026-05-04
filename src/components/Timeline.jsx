import { useEffect, useRef, useState } from "react";

function Timeline() {
  const items = [
    {
      year: "2026",
      type: "education",
      icon: "🎓",
      title: "3rd Year, B.Tech CSE",
      desc: "Mostly focused on frontend. Working with React and trying to build things that scale without turning into a mess.",
      current: true
    },
    {
      year: "2025",
      type: "projects",
      icon: "🚀",
      title: "Built Real Projects",
      desc: "Moved beyond tutorials. Built apps with APIs, handled state, broke things, fixed them.",
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      className="bg-slate-900 text-white px-8 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="max-w-3xl mb-16">
        <p className="text-slate-400 mb-2">My journey so far</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Learning by building (and fixing mistakes)
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-3 top-0 h-full w-0.5 bg-slate-700"></div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative pl-12 transform transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* icon + dot */}
              <div
                className={`absolute left-0 top-1 flex items-center justify-center w-7 h-7 rounded-full text-sm
                ${
                  item.current
                    ? "bg-sky-400 text-black"
                    : "bg-slate-800 border border-slate-600"
                }`}
              >
                {item.icon}
              </div>

              {/* card */}
              <div
                className={`p-5 rounded-lg border transition ${
                  item.current
                    ? "border-sky-400 bg-sky-400/5"
                    : "border-slate-700 bg-slate-800/40 hover:border-sky-400/40"
                }`}
              >
                <p className="text-sm text-sky-400 mb-1">
                  {item.year}
                  {item.current && " • Present"}
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
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