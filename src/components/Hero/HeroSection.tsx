import SayHelloButton from "../buttons/SayHello";

function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="container m-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-lg font-semibold text-[#7241FF] mb-2 tracking-wide">
            — Web Developer & Freelancer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hello, I'm{" "}
            <span className="text-[#7079f0]">Ali Mohamed</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            I'm a passionate web developer and freelancer based in Egypt, Cairo.
            I strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </p>
          <div className="flex items-center gap-4">
            <SayHelloButton />
            <a
              href="#portfolio"
              className="text-[#010314] font-semibold hover:text-[#7241FF] transition-colors duration-300"
            >
              View My Work →
            </a>
          </div>

          <div className="flex gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-[#010314]">3+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <h3 className="text-3xl font-bold text-[#010314]">20+</h3>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div className="w-px bg-gray-300" />
            <div>
              <h3 className="text-3xl font-bold text-[#010314]">15+</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-[#7079f0] to-[#7241FF] shadow-xl flex items-center justify-center">
            <div className="w-72 h-72 md:w-88 md:h-88 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
