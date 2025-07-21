import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
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
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiJavascript key="js" />,
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
      <FaCss3Alt key="CSS" />,
      <FaHtml5 key="HTML" />,
      <SiJavascript key="js" />,
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
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiJavascript key="js" />,
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

      <div className="relative max-w-screen-2xl mx-auto z-10 ">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl lg:text-5xl font-bold font-ubuntu text-center mb-16 bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>{" "}
          🚀
        </motion.h2>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col lg:flex-row items-center bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-400/30 border border-gray-700 hover:scale-[1.015] transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Img */}
              <div className="lg:w-2/5 w-full h-72 lg:h-[300px] overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 w-full p-6 md:p-10 space-y-5 bg-gray-900">
                <h3
                  className="
                  text-2xl md:text-3xl font-semibold font-ubuntu bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text md:text-white md:bg-none md:text-opacity-100  md:group-hover:bg-gradient-to-r md:group-hover:from-yellow-300 md:group-hover:via-pink-500 md:group-hover:to-purple-600md:group-hover:text-transparent md:group-hover:bg-clip-texttransition duration-300"
                >
                  {project.title}
                </h3>

                <p className="text-text3 text-md md:text-lg font-lora font-bold">
                  {project.description}
                </p>

                <div className="flex gap-4 text-2xl md:text-amber-300 mt-4 text-[#fa7ed1fb] ">
                  {project.technologies.map((icon, idx) => (
                    <span
                      key={idx}
                      className="hover:text-[#fa7ed1fb] transition transform hover:scale-110"
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Butoane GitHub & Demo */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-secondaryText bg-gray-800 rounded-xl hover:bg-gray-700 transition md:text-lg hover:text-[#f08acefb]"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-lg px-4 py-2 text-sm font-semibold text-secondaryText bg-gradient-to-r from-[#0b08bd] via-[#663bd3] to-[#bb44f3] transition rounded-xl hover:cursor-pointer hover:scale-[1.12] md:px-6 py-3"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
