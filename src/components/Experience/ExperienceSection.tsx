import { useState } from "react";

const INITIAL_VISIBLE = 3;

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  location: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    location: "Remote · Worldwide",
    description:
      "Building custom web applications for clients worldwide. Specializing in React-based solutions with modern UI/UX practices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Springboot", "MongoDB", "SQL"],
    highlights: [
      "Shipped 15+ client projects across e-commerce, SaaS and marketing sites",
      "Lifted average Lighthouse scores to 95+ across performance and SEO",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Saqaya",
    period: "2024",
    location: "Cairo, Egypt",
    description:
      "Developed responsive e-commerce website and landing page. Focused on performance optimization and SEO.",
    tags: ["JavaScript", "HTML/CSS", "Vuejs"],
    highlights: [
      "Delivered pixel-perfect e-commerce website",
    ],
  },
  {
    role: "Software Engineer",
    company: "RepGuru",
    period: "2025 — present",
    location: "Egypt, Cairo",
    description:
      "Landed my first full-time job in web development by contributing to real world projects in telecommunications domain. Deploying, commiting new changes to digital ocean to sharpen my skills.",
    tags: ["Reactjs", "TypeScript", "Git","Docker","Github", "Digital Ocean", "Nodejs","Sentry"],
    highlights: [
      "Merged first PRs into open-source component libraries",
      "Working on numberscrubing and scanning projects",
    ],
  },
];

function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = experiences.length > INITIAL_VISIBLE;
  const visible = expanded ? experiences : experiences.slice(0, INITIAL_VISIBLE);

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden text-white"
    >
      <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-white/40" />
            <p className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase">
              Experience
            </p>
            <span className="h-px w-8 bg-white/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            My journey so far<span className="text-gray-500">.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mt-4">
            Three years of learning, shipping and sharpening my craft as a developer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-3 bottom-3 w-px bg-linear-to-b from-white/30 via-white/20 to-transparent" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {visible.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>

        {hasMore && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {expanded
                ? "Show less"
                : `Show all ${experiences.length} experiences`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const isCurrent = exp.period.includes("Present");
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative pl-16 sm:pl-20 group">
      <div className="absolute left-0 top-3 flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-white to-gray-400 flex items-center justify-center text-[#0a0a0a] font-bold text-sm sm:text-base shadow-lg shadow-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {num}
          </div>
          {isCurrent && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-[#0a0a0a]" />
            </span>
          )}
        </div>
      </div>

      <div className="relative p-5 sm:p-7 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/50 transition-all duration-500 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-white to-gray-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {exp.role}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-500/15 text-green-400 text-[10px] sm:text-xs font-semibold rounded-full border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-semibold text-gray-300">{exp.company}</span>
              <span className="hidden sm:inline text-gray-600">·</span>
              <span className="text-gray-500 inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {exp.location}
              </span>
            </div>
          </div>

          <span className="inline-flex items-center self-start px-3 py-1.5 bg-white/10 text-gray-200 text-xs font-semibold rounded-full whitespace-nowrap border border-white/10">
            {exp.period}
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
          {exp.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-semibold bg-white/5 text-gray-300 rounded-md border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
