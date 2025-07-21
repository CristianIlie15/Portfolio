import { useMemo, useRef } from "react";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiJquery } from "react-icons/si";
import ShadowBubble from "./Hero/ShadowBubble";
import triggerParticleExplosion from "./TechStack/ParticleExplosion";

const techItems = [
  { name: "React", color: "#61DBFB", Icon: FaReact },
  { name: "Tailwind", color: "#1798d1", Icon: SiTailwindcss },
  { name: "JavaScript", color: "#F5BC20", Icon: FaJsSquare },
  { name: "HTML", color: "#e65d22", Icon: FaHtml5 },
  { name: "CSS", color: "#264de4", Icon: FaCss3Alt },
  { name: "Git", color: "#F1502F", Icon: FaGitAlt },
  { name: "Vite", color: "#6a45ed", Icon: SiVite },
  { name: "jQuery", color: "#0868AC", Icon: SiJquery },
];

export default function TechStack() {
  const timeoutRefs = useRef({});

  const [randomDelays, randomDurations] = useMemo(() => {
    return [
      techItems.map(() => (Math.random() * 1 + 0.7).toFixed(2)),
      techItems.map(() => (Math.random() * 1.4 + 2.5).toFixed(2)),
    ];
  }, []);

  const handleMouseEnterFactory = (name, color) => (e) => {
    if (timeoutRefs.current[name]) return;

    const triggerLoop = () => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2 + window.scrollX;
      const y = rect.top + rect.height / 2 + window.scrollY;

      triggerParticleExplosion(x, y, [color]);

      const delay = Math.random() * (3.2 - 1.3) + 1.3;
      timeoutRefs.current[name] = setTimeout(triggerLoop, delay * 1000);
    };

    triggerLoop();
  };

  const handleMouseLeaveFactory = (name) => () => {
    clearTimeout(timeoutRefs.current[name]);
    delete timeoutRefs.current[name];
  };

  return (
    <section className="relative w-full py-20 bg-gradient2 overflow-hidden">
      <ShadowBubble
        position="md:top-19 left-1/11 top-40"
        size="w-96 h-56"
        blur="blur-3xl"
        colors={["#fc77db", "#EB6C8A", "#E95AC6"]}
        duration={7}
        opacity={0.0675}
      />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-24 mb-10 pb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 font-ubuntu bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-400 text-transparent bg-clip-text">
          Tech Stack
        </h2>

        {/* Mobile & small screens */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:hidden" role="list">
          {techItems.map(({ name, color, Icon }, i) => (
            <li
              key={i}
              role="listitem"
              className="flex items-center space-x-2 bg-[#eaf1f1] rounded-lg shadow-md px-4 py-2 cursor-default transition-transform duration-300 hover:scale-105"
              style={{
                color,
                border: `3px solid ${color}`,
                boxShadow: `0 0 24px ${color}88`,
                animation: "pulse-soft 3s ease-in-out infinite",
              }}
              title={name}
              aria-label={name}
            >
              <Icon size={36} />
              <span className="font-semibold text-gray-800">{name}</span>
            </li>
          ))}
        </ul>

        {/* Medium & large screens */}
        <ul className="hidden md:flex flex-wrap justify-center gap-12 mt-12" role="list">
          {techItems.map(({ name, color, Icon }, i) => (
            <li
              key={i}
              role="listitem"
              className="w-24 h-24 lg:w-28 lg:h-28 rounded-full cursor-pointer select-none transition duration-300 hover:scale-110 flex flex-col items-center justify-center shadow-xl"
              style={{
                backgroundImage: `radial-gradient(circle at 17% 9%, ${color}, ${color}aa)`,
                boxShadow: `
                  inset -4px -4px 8px rgba(255,255,255,0.3),
                  inset 4px 4px 12px rgba(0,0,0,0.1),
                  0 0 20px ${color}88
                `,
                animationDelay: `${randomDelays[i]}s`,
                animationDuration: `${randomDurations[i]}s`,
                color: "#dcf7f6",
              }}
              onMouseEnter={handleMouseEnterFactory(name, color)}
              onMouseLeave={handleMouseLeaveFactory(name)}
              title={name}
              aria-label={name}
            >
              <Icon size={42} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
