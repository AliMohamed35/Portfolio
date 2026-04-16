import { useEffect, useState } from "react";

function MouseSpotlight() {
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    let raf = 0;
    let latest = { x: 0, y: 0 };

    const flush = () => {
      raf = 0;
      setMouse((m) => ({ x: latest.x, y: latest.y, active: m.active || true }));
    };
    const onMove = (e: MouseEvent) => {
      latest = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(flush);
    };
    const onEnter = () => setMouse((m) => ({ ...m, active: true }));
    const onLeave = () => setMouse((m) => ({ ...m, active: false }));

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30" aria-hidden="true">
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: mouse.active ? 1 : 0,
          background: `radial-gradient(520px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.07), rgba(255,255,255,0.025) 40%, transparent 70%)`,
        }}
      />
      <div
        className="absolute w-44 h-44 rounded-full blur-2xl transition-opacity duration-500"
        style={{
          opacity: mouse.active ? 0.22 : 0,
          left: mouse.x - 88,
          top: mouse.y - 88,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0.05) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}

export default MouseSpotlight;
