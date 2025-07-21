import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5,FaGithub, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { startParticlesBackground } from "./Projects/ParticlesBackground";
import twistTonic from "./Projects/twistTonic.webp";
import fbiMW from "./Projects/fbiMW.webp";
import slots from "./Projects/SlotsCasino.webp";

const projects = [
  {
    id: 1,
    title: "Twist&Tonic",
    description:
      "A website that combines an attractive UI with data from a REST API and offers appealing cocktail recipes for all tastes.",
    imageUrl: twistTonic,
    githubUrl: "https://github.com/CristianIlie15/Twist-Tonic",
    demoUrl: "https://twist-tonic.vercel.app/",
    technologies: [
      <FaReact key="react" aria-label="React" />,
      <SiTailwindcss key="tailwind" aria-label="Tailwind CSS" />,
      <SiJavascript key="js" aria-label="JavaScript" />,
    ],
  },
  {
    id: 2,
    title: "Slots Machine",
    description:
      "A short JavaScript game with a simple UI, focused on symbol generation logic, line calculation, betting, and user input handling.",
    imageUrl: slots,
    githubUrl: "https://github.com/CristianIlie15/SlotsMachine-2.0",
    demoUrl: "https://slots-machine-2-0.vercel.app/",
    technologies: [
      <FaCss3Alt key="CSS" aria-label="CSS3" />,
      <FaHtml5 key="HTML" aria-label="HTML5" />,
      <SiJavascript key="js" aria-label="JavaScript" />,
    ],
  },
  {
    id: 3,
    title: "FBI Most Wanted",
    description:
      "A website with smooth background transitions, using React and CSS, integrated with REST API data about currently most wanted individuals.",
    imageUrl: fbiMW,
    githubUrl: "https://github.com/CristianIlie15/FBIwebPage",
    demoUrl: "https://fbi-webpage.vercel.app/",
    technologies: [
      <FaReact key="react" aria-label="React" />,
      <SiTailwindcss key="tailwind" aria-label="Tailwind CSS" />,
      <SiJavascript key="js" aria-label="JavaScript" />,
    ],
  },
];

function Projects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = startParticlesBackground(canvasRef.current);
    return () => cleanup();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900 py-20 px-4 md:px-12 lg:px-20 xl:px-32 text-white">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="mb-16" id="projects"></div>

      <div className="relative max-w-screen-2xl mx-auto z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl lg:text-5xl font-bold font-ubuntu bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>{" "}
          🚀
        </motion.h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="flex flex-col lg:flex-row items-center bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-amber-400/30 transition-all duration-500 group hover:scale-[1.015]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="lg:w-2/5 w-full h-72 lg:h-[300px] bg-black overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 w-full p-6 md:p-10 space-y-5 bg-gray-900">
                <header>
                  <h3 className="text-2xl md:text-3xl font-semibold font-ubuntu bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text group-hover:from-yellow-300 group-hover:via-pink-500 group-hover:to-purple-600 transition duration-300">
                    {project.title}
                  </h3>
                </header>

                <p className="text-text3 text-md md:text-lg font-lora font-bold">
                  {project.description}
                </p>

                <div className="flex gap-4 text-2xl text-[#fa7ed1fb] mt-4">
                  {project.technologies.map((icon, idx) => (
                    <span
                      key={idx}
                      className="transition transform hover:scale-110"
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm md:text-lg font-semibold text-secondaryText bg-gray-800 rounded-xl hover:bg-gray-700 hover:text-[#f08acefb] transition"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold bg-gradient-to-r from-[#0b08bd] via-[#663bd3] to-[#bb44f3] rounded-xl text-white hover:scale-[1.12] transition transform focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
