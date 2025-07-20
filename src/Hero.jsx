import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useFramerTypewriter from "./Hero/Typewriter";
import ShadowBubble from "./Hero/ShadowBubble";
import heroBackground from "./Hero/heroBackground.jpg";
import heroPic1 from "./Hero/heroPic.png";

const dynamicWords = [
  "Frontend Developer.💻",
  "Chess Player.♟️",
  "React Enthusiast.⚛️",
  "Tech Explorer.👨‍💻",
  "Guitar Player.🎸",
];

function Hero() {
  const animatedTypewriter = useFramerTypewriter(dynamicWords);

  return (
    <motion.section
      className="w-full min-h-[70vh] md:min-h-[80vh] bg-gray-90 py-12 px-6 relative overflow-hidden md:bg-[heroBackground]"
      style={{ backgroundImage: `url(${heroBackground})` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Blur bubbles */}
      <ShadowBubble
        position="top-20 left-10"
        size="w-40 h-40"
        blur="blur-3xl md:blur-xl"
        colors={["#0b08bd", "#3431ee", "#52a2ec"]}
        duration={3}
        opacity={0.4}
      />
      <ShadowBubble
        position="top-40 right-20 md:top-12 sm:right-7"
        size="w-60 h-60"
        blur="md:blur-2xl blur-3xl"
        colors={["#f071bd", "#b755e6", "#fc77db"]}
        duration={4}
        opacity={0.1147}
      />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-center px-0 lg:px-16 space-y-18 lg:space-y-0 relative z-10 pb-25 md:pb-20 pt-15 md:pt-20 mt-14 lg:mt-20">
        {/* Text + Buttons */}
        <motion.div
          className="flex-1 flex flex-col items-center text-left space-y-2 md:items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          id ="hero"
        >
          <div className="flex items-start justify-start">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primaryText text-left max-w-full min-h-[7.5rem] relative leading-tight font-lexend"
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hi!👋 I'm Cristian,
              <br className="block lg:hidden" />
              <span className="inline">
                {" "}a <span className="">{animatedTypewriter}</span>
              </span>

              {/* Ghost words (for layout stability) */}
              <div className="absolute opacity-0 pointer-events-none top-0 left-0">
                {dynamicWords.map((text, i) => (
                  <div key={i} className="font-mono">{text}</div>
                ))}
              </div>
            </motion.h1>
          </div>

          <motion.h3
            className="text-xl md:text-2xl text-text3 max-w-xl px-2 lg:mx-0 mx-12 md:mt-10 md:mx-0 text-center md:text-left font-chonburi "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I'm passionate about building intuitive and engaging web interfaces.
            I love crafting clean code and beautiful designs. Let's create
            something amazing!
          </motion.h3>

          <div className="flex gap-4 md:gap-6 lg:gap-8 mt-4">
<button 
  className="bg-gradient-to-r from-[#0b08bd] via-[#663bd3] to-[#bb44f3] rounded-2xl py-3 px-4 mt-4 md:mt-6 md:py-4 hover:scale-110 transition transform hover:cursor-pointer shadow-lg hover:shadow-[0_0_15px_#bb44f3] active:scale-95 active:shadow-inner">
  <a className="text-md md:text-lg lg:text-xl text-primaryText font-ubuntu" href="#contact">Contact me😎</a>
</button>

<button 
  className="bg-transparent border-pink1 rounded-lg py-3 px-6 mt-4 md:mt-6 md:py-4 hover:scale-110 transition transform hover:cursor-pointer border-2 hover:font-bold  active:scale-95 active:border-boxColor2 active:font-extrabold">
  <a className="text-md md:text-lg lg:text-xl text-secondaryText font-ubuntu btn-download" href="../public/CV Ilie Claudiu-Cristian.docx">Download CV📰</a>
</button>

          </div>
        </motion.div>

        {/* Img + Icons */}
        <motion.div
          className="flex-1 relative flex justify-center items-center mt-12 lg:mt-4 lg:ml-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-[30%_60%_60%_40%/65%_40%_60%_38%] bg-boxColor2 overflow-hidden shadow-lg lg:mt-20 mr-2 md:mr-0">
            <img
              src={heroPic1}
              alt="Despre mine"
              className="object-cover w-full h-full "
            />
          </div>

          <motion.div
            className="absolute bottom-0 -right-8 flex gap-2 md:gap-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="https://github.com/CristianIlie15"
              target="_blank"
              rel="noreferrer"
              className="bg-boxColor2 p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaGithub className="text-3xl text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/claudiu-cristian-ilie-78529a290/"
              target="_blank"
              rel="noreferrer"
              className="bg-boxColor2 p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaLinkedin className="text-3xl text-blue-600" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
