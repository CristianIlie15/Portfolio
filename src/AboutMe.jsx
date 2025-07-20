import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./About/ServiceCard";
import ShadowBubble from "./Hero/ShadowBubble";
import Img1 from "./About/aboutImage.jpg";

export default function AboutMe() {
  return (
    <motion.section
      className="w-full min-h-[70vh] bg-[#0F043A] px-6 py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
                   id ="about"
    >
      <ShadowBubble
        position="top-[40%] left-15 md:top-12 lg:top-19 md:left-10"
        size="lg:w-111 h-40 w-52 md:w-56 md:h-65"
        blur="blur-3xl"
        colors={["#f2e69d", "#ebd871", "#ebc642"]}
        duration={3.76}
        opacity={0.0786}
      />

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 px-0 lg:px-16 relative z-10">
        {/* Imaginea */}
        <motion.div
          className="w-full md:w-[40%] flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[18%] overflow-hidden shadow-2xl bg-white border border-gray-300">
            <img
              src={Img1}
              alt="About me image"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.35 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold font-ubuntu text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            About Me
          </h1>

          <p className="text-text3 text-lg lg:text-2xl md:text-xl leading-relaxed max-w-xl font-chonburi px-2 md:px-0">
            I'm Cristian, a passionate frontend developer who loves crafting clean,
            responsive, and user-friendly interfaces. I thrive on building things that
            not only look great but also solve real-world problems. Whether it's through code,
            design, or collaboration, I'm always pushing forward. When I'm not coding, I
            enjoy playing guitar 🎸, chess ♟️, and exploring new tech trends. Let’s connect
            and create something meaningful!
          </p>
        </motion.div>
      </div>

      {/* Section */}
      <div className="mt-24 w-full">
        <h2 className="text-3xl md:text-4xl text-center font-bold font-ubuntu text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-400 mb-16">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 max-w-screen-xl mx-auto md:px-4 mb-2 ">
          <ServiceCard
            icon={FaPaintBrush}
            title="UI/UX Design"
            description="Intuitive and modern design, focused on user experience and clean aesthetics."
            delay={0.1}
          />
          <ServiceCard
            icon={FaCode}
            title="Frontend Development"
            description="I build high-performance, responsive interfaces using modern technologies like React & Tailwind."
            delay={0.25}
          />
          <div className="sm:col-span-2 lg:col-span-1 justify-self-center">
            <ServiceCard
              icon={FaMobileAlt}
              title="Responsive Design"
              description="Websites that look and work flawlessly across all devices — mobile, tablet, and desktop."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
