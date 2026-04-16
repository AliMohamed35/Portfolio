function AboutSection() {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js",
    "Tailwind CSS", "Springboot", "MongoDB", "Git",
    "REST APIs", "Figma", "HTML/CSS", "Java", "Docker"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-semibold text-[#7241FF] tracking-widest uppercase mb-2">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          Get to know me<span className="text-[#7079f0]">.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              I'm a web developer and freelancer based in Cairo, Egypt. I specialize
              in building modern, responsive, and performant web applications that
              deliver exceptional user experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              With a strong foundation in front-end technologies and a growing
              expertise in full-stack development, I bring ideas to life through
              clean code and thoughtful design. I'm always eager to learn new
              technologies and take on challenging projects.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new tools, contributing
              to open-source projects, or learning about the latest trends in web
              development.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-2 bg-white rounded-lg text-xs sm:text-sm font-semibold text-[#010314] shadow-sm border border-gray-100 hover:border-[#7241FF] hover:text-[#7241FF] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#010314] mb-2">Currently</h4>
              <p className="text-sm sm:text-base text-gray-600">
                Open for freelance projects and collaboration opportunities.
                Let's build something great together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
