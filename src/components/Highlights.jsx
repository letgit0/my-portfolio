function Highlights() {
  const cards = [
    {
      title: "Problem Solving",
      value: "300+",
      desc: "DSA problems mastered using Java on LeetCode.",
    },
    {
      title: "Projects Built",
      value: "6+",
      desc: "Full-stack applications from development to deployment.",
    },
    {
      title: "Tech Stack",
      value: "Full Stack",
      desc: "Robust architecture with TypeScript & MERN.",
    },
    {
      title: "Current Focus",
      value: "SDE",
      desc: "Building scalable web applications and sharpening DSA skills.",
    },
  ];

  return (
    <section className="bg-bg-light py-24 border-t border-zinc-100">
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            At a glance
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 leading-tight">
            Recent Highlights
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border-l border-zinc-200 pl-8 py-4"
            >
              <h3 className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-4xl font-black text-zinc-900 mb-2 tracking-tighter">
                {card.value}
              </p>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;