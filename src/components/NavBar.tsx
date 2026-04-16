import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
          : "bg-[#0a0a0a]/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex justify-between items-center">
        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-2xl sm:text-[1.6rem] font-black tracking-tight text-white transition-colors duration-300"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white text-[#0a0a0a] text-sm font-black shadow-sm group-hover:rotate-6 transition-transform duration-300">
            A
            <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-gray-400 ring-2 ring-[#0a0a0a]" />
          </span>
          <span>
            Ali<span className="text-gray-500">.M</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5 font-semibold text-sm">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`group relative block px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-white origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="group hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#0a0a0a] text-sm font-semibold shadow-sm hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
        >
          Let's talk
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1 font-semibold">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-white w-4" : "bg-gray-500 w-1"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-[#0a0a0a] font-semibold shadow-sm"
            >
              Let's talk <span>→</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
