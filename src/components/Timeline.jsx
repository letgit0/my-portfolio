import { useEffect, useRef, useState } from "react";

function Timeline() {
  const items = [
    {
      year: "2026–27",
      title: "Final Year, B.Tech CSE",
      desc: "Focused on building real-world software, strengthening computer science fundamentals, and learning through hands-on projects.",
      current: true,
    },
    {
      year: "2025",
      title: "Building Real Projects",
      desc: "Moved beyond tutorials and started creating full-stack applications. Learned APIs, state management, debugging, and the realities of software development.",
    },
    {
      year: "2024",
      title: "Started Web Development",
      desc: "Began with HTML, CSS, and JavaScript, building responsive websites and exploring modern web technologies.",
    },
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
      className="bg-bg-light py-32 border-t border-zinc-100"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-2xl mb-24">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
                      My journey
                    </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-tight">
            Learning through experimentation.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl">
          {/* vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-zinc-200"></div>

          <div className="space-y-20">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* dot */}
                <div
                  className={`absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border-2 
                  ${
                    item.current
                      ? "bg-zinc-900 border-zinc-900"
                      : "bg-white border-zinc-300"
                  }`}
                />

                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      {item.year}
                    </span>
                    {item.current && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-accent/10 text-accent rounded">Current</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;