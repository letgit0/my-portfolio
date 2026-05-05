function Highlights() {
  const cards = [
    {
      title: "Projects Built",
      value: "6+",
      desc: "Full-stack and frontend applications using MERN stack",
    },
    {
      title: "Tech Stack",
      value: "MERN",
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
      desc: "LeetCode / coding practice across core topics",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-10 md:px-20 py-14 bg-white dark:bg-slate-900 transition-colors">

      {/* Heading */}
      <div className="max-w-3xl mb-8">
        <p className="text-gray-500 dark:text-slate-400 mb-2 text-sm">
          Quick overview
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
          Highlights
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              p-5 rounded-xl border
              bg-gray-50 dark:bg-slate-800/40
              border-gray-200 dark:border-slate-700
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-sky-500/10
              hover:border-sky-400 dark:hover:border-sky-500
            "
          >
            <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-2">
              {card.title}
            </h3>

            <p className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
              {card.value}
            </p>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;