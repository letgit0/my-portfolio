function Highlights() {
  const cards = [
    {
      title: "Projects Built",
      value: "6+",
      desc: "Full-stack applications built",
    },
    {
      title: "Tech Stack",
      value: "Full Stack",
      desc: "React, Node.js, Express, MongoDB",
    },
    {
      title: "DSA Practice",
      value: "Java",
      desc: "Problem solving and data structures in Java",
    },
    {
      title: "Problem Solving",
      value: "300+",
      desc: "Coding problems solved on LeetCode",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-10 md:px-20 py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-sky-500/5 blur-[120px] pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mb-16 relative z-10">
        <p className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-4">
          At a glance
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
          Recent <span className="text-gradient">Highlights</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              glass glass-hover
              p-8 rounded-2xl
              group
            "
          >
            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 group-hover:text-sky-400/70 transition-colors">
              {card.title}
            </h3>

            <p className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform origin-left">
              {card.value}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;