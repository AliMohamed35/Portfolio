import { useRef, useState } from "react";
import SayHelloButton from "../buttons/SayHello";

const floatingBadges = [
  { label: "React", className: "top-[8%] -left-4 sm:-left-8 animate-[float_6s_ease-in-out_infinite]" },
  { label: "TypeScript", className: "top-[22%] -right-4 sm:-right-10 animate-[float_7s_ease-in-out_infinite_0.5s]" },
  { label: "Tailwind", className: "bottom-[28%] -left-6 sm:-left-12 animate-[float_8s_ease-in-out_infinite_1s]" },
  { label: "Node.js", className: "bottom-[8%] -right-4 sm:-right-8 animate-[float_6.5s_ease-in-out_infinite_1.5s]" },
];

const stats = [
  { value: "3+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Clients" },
];

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      active: true,
    });
  };

  const handleMouseLeave = () => setMouse((m) => ({ ...m, active: false }));

  const parallax = (strength: number) => ({
    transform: `translate3d(${(mouse.x - 0.5) * strength}px, ${(mouse.y - 0.5) * strength}px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      <div
        className="pointer-events-none absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/3 blur-3xl transition-transform duration-800 ease-out"
        style={parallax(40)}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-white/5 blur-3xl transition-transform duration-800 ease-out"
        style={parallax(-50)}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          transform: `translate3d(${(mouse.x - 0.5) * 16}px, ${(mouse.y - 0.5) * 16}px, 0)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 grid md:grid-cols-2 items-center gap-10 md:gap-14 lg:gap-20">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-200">
              Available for freelance work
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-gray-400 mb-3 tracking-wide">
            ✦ Web Developer & Freelancer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Hello, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Ali Mohamed
              </span>
              <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 sm:h-4 bg-white/15 z-0 -rotate-1 rounded-sm" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            I craft immersive, beautifully engineered web experiences for brands
            around the world — from fast-loading landing pages to full-stack
            applications that perform.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            <SayHelloButton />
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 text-white font-semibold hover:text-gray-300 transition-colors duration-300"
            >
              View My Work
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto md:mx-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {s.value}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#525252] via-[#171717] to-[#000000] opacity-20 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />

            <div className="absolute inset-0 rounded-[2rem] rotate-6 bg-gradient-to-br from-[#525252] to-[#000000] opacity-60" />

            <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-[#525252] via-[#171717] to-[#000000] shadow-2xl shadow-[#171717]/40 overflow-hidden">
              <img
                src="/me.jpeg"
                alt="Ali Mohamed"
                className="w-full h-full object-cover"
              />
            </div>

            {floatingBadges.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.className} px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow-xl border border-gray-100 text-[11px] sm:text-sm font-bold text-[#0a0a0a] whitespace-nowrap`}
              >
                {b.label}
              </div>
            ))}

            <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-8 p-3 sm:p-4 rounded-2xl bg-white shadow-2xl border border-gray-100 max-w-[11rem] animate-[float_5s_ease-in-out_infinite]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Currently
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-[#0a0a0a] leading-tight">
                Taking on new projects
              </p>
            </div>

            <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-6 p-2.5 sm:p-3 rounded-xl bg-white shadow-2xl border border-gray-100 animate-[float_6s_ease-in-out_infinite_0.8s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0a0a0a] leading-none">
                    5.0
                  </p>
                  <p className="text-[9px] text-gray-500 leading-tight mt-0.5">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
