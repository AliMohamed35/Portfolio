const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    description:
      "Building custom web applications for clients worldwide. Specializing in React-based solutions with modern UI/UX practices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    role: "Frontend Developer",
    company: "Various Clients",
    period: "2022 — 2023",
    description:
      "Developed responsive websites and landing pages for small businesses and startups. Focused on performance optimization and SEO.",
    tags: ["JavaScript", "HTML/CSS", "WordPress", "Figma"],
  },
  {
    role: "Junior Web Developer",
    company: "Internship / Open Source",
    period: "2021 — 2022",
    description:
      "Started my journey in web development by contributing to open-source projects and building personal projects to sharpen my skills.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

function ExperienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container m-auto px-4">
        <p className="text-sm font-semibold text-[#7241FF] tracking-widest uppercase mb-2">
          Experience
        </p>
        <h2 className="text-4xl font-bold mb-12">
          Where I've worked<span className="text-[#7079f0]">.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 && (
                    <ExperienceCard exp={exp} />
                  )}
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#7079f0] rounded-full border-4 border-white shadow-md -translate-x-1/2 top-2 z-10" />

                <div className="flex-1 pl-10 md:pl-0">
                  {index % 2 === 1 && (
                    <ExperienceCard exp={exp} />
                  )}
                  {index % 2 === 0 && (
                    <p className="hidden md:block text-sm text-gray-400 mt-2">
                      {exp.period}
                    </p>
                  )}
                  {index % 2 === 1 && null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#7241FF]/20 transition-all duration-300">
      <span className="text-sm text-[#7241FF] font-semibold">{exp.period}</span>
      <h3 className="text-xl font-bold text-[#010314] mt-1">{exp.role}</h3>
      <p className="text-gray-500 font-medium mb-3">{exp.company}</p>
      <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold bg-[#7079f0]/10 text-[#7079f0] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
