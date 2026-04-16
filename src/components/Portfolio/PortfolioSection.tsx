import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  demo: string;
  year: string;
  image?: string;
};

const PROJECTS_PER_PAGE = 6;

const projects: Project[] = [
  {
    title: "Nike Landing Page",
    category: "Frontend",
    description:
      "A modern, conversion-focused landing page for Nike with bold product showcases, fluid animations and a responsive grid that adapts from mobile to 4K.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-[#525252] via-[#525252] to-[#171717]",
    demo: "https://nike-landing-page-eight-ashen.vercel.app/",
    year: "2024",
    image: "/nike.png",
  },
  {
    title: "Book E-commerce",
    category: "Fullstack",
    description:
      "An interactive dashboard for managing and showcasing creative portfolios with analytics integration.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ReduxTK",
      "Nodejs",
      "Sequelize",
      "SQL",
    ],
    color: "from-[#171717] via-[#000000] to-[#000000]",
    demo: "https://github.com/AliMohamed35/Book_store_e-commerceBE",
    year: "2024",
  },
  {
    title: "Shoe E-commerce",
    category: "Frontend",
    description:
      "A collaborative task management tool with real-time updates, team features, and progress tracking.",
    tags: ["Reactjs", "Tailwindcss", "PostgreSQL", "WebSocket"],
    color: "from-[#0a0a0a] via-[#171717] to-[#525252]",
    demo: "https://shoe-ecommerce-three.vercel.app/",
    year: "2023",
    image: "./shoe.png"
  },
  {
    title: "Restaurant Landing Page",
    category: "Frontend",
    description:
      "A visually stunning landing page for a restaurant brand with animations and online reservation system.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    color: "from-[#0a0a0a] via-[#000000] to-[#0a0a0a]",
    demo: "https://example.com",
    year: "2023",
  },
  {
    title: "Real Estate Listings",
    category: "Full-Stack",
    description:
      "A property listing platform with advanced search filters, map integration, and virtual tours.",
    tags: ["React", "Node.js", "Google Maps API", "MongoDB"],
    color: "from-[#525252] via-[#0a0a0a] to-[#0a0a0a]",
    demo: "https://example.com",
    year: "2023",
  },
  {
    title: "Blog Platform",
    category: "Full-Stack",
    description:
      "A content management system with markdown support, SEO optimization, and social sharing features.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    color: "from-[#171717] via-[#171717] to-[#525252]",
    demo: "https://example.com",
    year: "2023",
  },
];

const categories = ["All", "Frontend", "Full-Stack"] as const;
type Category = (typeof categories)[number];

function PortfolioSection() {
  const [active, setActive] = useState<Category>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PROJECTS_PER_PAGE),
  );

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [page, totalPages]);

  const paginated = filtered.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE,
  );

  const handleFilter = (cat: Category) => {
    setActive(cat);
    setPage(1);
  };

  const goToPage = (n: number) => {
    const next = Math.min(Math.max(1, n), totalPages);
    setPage(next);
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden text-white"
    >
      <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-white/40" />
              <p className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase">
                Portfolio
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Selected work<span className="text-gray-500">.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mt-4">
              A curated showcase of freelance projects — each one built from
              scratch with a focus on performance, craft and real business
              outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    active === cat
                      ? "bg-white text-[#0a0a0a] shadow-lg shadow-white/10"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      active === cat
                        ? "bg-[#0a0a0a]/10 text-[#0a0a0a]"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {paginated.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No projects in this category yet.
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 sm:mt-14 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:text-gray-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm font-semibold transition-all ${
                  page === n
                    ? "bg-white text-[#0a0a0a] shadow-md shadow-white/10"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                }`}
                aria-current={page === n ? "page" : undefined}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:text-gray-300"
            >
              <span className="hidden sm:inline">Next</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <p className="mt-4 text-center text-xs text-gray-500">
          Showing {paginated.length} of {filtered.length}
          {active !== "All" && ` ${active.toLowerCase()}`} project
          {filtered.length === 1 ? "" : "s"}
        </p>

        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-white text-[#0a0a0a]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              I'm open for freelance collaborations and new challenges.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-[#171717] transition-colors whitespace-nowrap"
          >
            Let's talk
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cleanUrl = project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 min-w-0 px-3 py-1 bg-white/5 border border-white/10 rounded-md">
          <p className="text-[10px] text-gray-400 font-mono truncate">
            {cleanUrl}
          </p>
        </div>
      </div>

      <div
        className={`relative bg-linear-to-br ${project.color} overflow-hidden shrink-0 h-44 sm:h-52`}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
        {!project.image && (
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        )}

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-semibold">
            {project.year}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

        {!project.image && (
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 transition-transform duration-500 group-hover:-translate-y-6 sm:group-hover:-translate-y-7">
            <p className="font-black text-white text-center leading-[0.95] tracking-tight drop-shadow-lg text-2xl sm:text-3xl transition-transform duration-500 group-hover:scale-105">
              {project.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        )}

        <div className="absolute left-1/2 -translate-x-1/2 bottom-5 sm:bottom-6 z-20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-[#0a0a0a] font-semibold text-sm shadow-xl whitespace-nowrap">
          View Live Demo
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-semibold bg-white/5 text-gray-300 border border-white/5 rounded-md group-hover:bg-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioSection;
