const projects = [
  {
    title: "Nike landing page",
    category: "Frontend",
    description:
      "A modern Nike landing page",
    tags: ["React", "Tailwindcss", "JavaScript"],
    color: "from-[#7079f0] to-[#7241FF]",
    demo: "https://nike-landing-page-eight-ashen.vercel.app/",
  },
  {
    title: "Portfolio Dashboard",
    category: "Frontend",
    description:
      "An interactive dashboard for managing and showcasing creative portfolios with analytics integration.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    color: "from-[#7241FF] to-[#5a33cc]",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    category: "Full-Stack",
    description:
      "A collaborative task management tool with real-time updates, team features, and progress tracking.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
    color: "from-[#5566c2] to-[#7079f0]",
    demo: "https://example.com",
  },
  {
    title: "Restaurant Landing Page",
    category: "Frontend",
    description:
      "A visually stunning landing page for a restaurant brand with animations and online reservation system.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    color: "from-[#010314] to-[#2A2B3A]",
    demo: "https://example.com",
  },
  {
    title: "Real Estate Listings",
    category: "Full-Stack",
    description:
      "A property listing platform with advanced search filters, map integration, and virtual tours.",
    tags: ["React", "Node.js", "Google Maps API", "MongoDB"],
    color: "from-[#7079f0] to-[#010314]",
    demo: "https://example.com",
  },
  {
    title: "Blog Platform",
    category: "Full-Stack",
    description:
      "A content management system with markdown support, SEO optimization, and social sharing features.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    color: "from-[#7241FF] to-[#7079f0]",
    demo: "https://example.com",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container m-auto px-4">
        <p className="text-sm font-semibold text-[#7241FF] tracking-widest uppercase mb-2">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold mb-4">
          Featured projects<span className="text-[#7079f0]">.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-16">
          A selection of my recent work. Each project is crafted with attention to
          detail and a focus on delivering real value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <svg
                  className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-[#7241FF] tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#010314] mt-1 mb-2 group-hover:text-[#7079f0] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7241FF] hover:text-[#7079f0] transition-colors duration-300"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
