const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation to understand your vision, goals, and requirements. I research your industry and target audience to craft the perfect strategy.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create wireframes and visual designs that align with your brand. Every pixel is intentional, ensuring a beautiful and intuitive user experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    description:
      "Using modern technologies like React and TypeScript, I bring the designs to life with clean, maintainable code. Performance and accessibility are priorities.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After thorough testing, we launch your project. I provide ongoing support and maintenance to keep everything running smoothly.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="container m-auto px-4">
        <p className="text-sm font-semibold text-[#7241FF] tracking-widest uppercase mb-2">
          How I Work
        </p>
        <h2 className="text-4xl font-bold mb-4">
          My work process<span className="text-[#7079f0]">.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-16">
          A streamlined approach to deliver high-quality results on time and within budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#7241FF]/20 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-gray-100 group-hover:text-[#7079f0]/20 transition-colors duration-300 absolute top-4 right-6">
                {step.number}
              </span>

              <div className="w-14 h-14 rounded-xl bg-[#7079f0]/10 text-[#7079f0] flex items-center justify-center mb-6 group-hover:bg-[#7079f0] group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#010314] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
