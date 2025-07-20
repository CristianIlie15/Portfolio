import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="relative bg-text3 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.06] hover:shadow-2xl hover:cursor-pointer pb-10 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className="relative p-8 rounded-full mb-4 shadow-inner bg-gradient-to-tr from-purple-900 via-gray-300 to-purple-300"
        whileHover={{ rotate: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Icon className="text-4xl text-pink1 group-hover:animate-bounce transition-all duration-300" />
        <div className="absolute inset-0 rounded-full blur-md opacity-30 bg-pink-200 z-[-1]" />
      </motion.div>

      <h3 className="text-xl font-bold font-lora text-gradient-main mb-3 md:text-2xl group-hover:drop-shadow-glow transition">
        {title}
      </h3>

      <p className="text-gray-800 font-ubuntu text-lg md:text-xl">{description}</p>
    </motion.div>
  );
}
