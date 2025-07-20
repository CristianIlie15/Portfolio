import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/xeozqklo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formBody,
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="w-full min-h-[80vh] bg-gradient-to-br from-gray-800 to-black px-6 py-20 max-w-screen-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id = "contact"
    >
      <div className="text-center mb-16 " >
        <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-400 font-ubuntu mb-6">
          Let’s Build Something Beautiful Together
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-lora">
          Whether it’s a vision, a dream, or just a hello —{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
            I’m here to listen and bring ideas to life.
          </span>
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/10 dark:bg-white/10 shadow-2xl rounded-3xl max-w-3xl mx-auto px-8 py-10 md:px-12 md:py-14 flex flex-col gap-6 border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        noValidate
      >
        <label className="flex flex-col">
          <span className="mb-2 font-semibold text-secondaryText dark:text-white font-lora text-lg">
            Name
          </span>
<input
  type="text"
  name="name"
  placeholder="John Doe"
  className="rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none text-white placeholder-white"
  required
  value={formData.name}
  onChange={handleChange}
  disabled={isSubmitting}
/>

        </label>

        <label className="flex flex-col">
          <span className="mb-2 font-semibold text-secondaryText dark:text-white font-lora text-lg">
            Email
          </span>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-amber-300 outline-none text-white placeholder-white"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 font-semibold text-secondaryText dark:text-white font-lora text-lg">
            Message
          </span>
          <textarea
            name="message"
            placeholder="What would you like to talk about?"
            rows={5}
            className="rounded-xl px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none text-white placeholder-white"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </label>

        <motion.button
          whileTap={{ scale: 0.9, y: 1 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          disabled={isSubmitting}
          className={`mx-auto w-1/2 bg-gradient-to-r from-pink-400 to-amber-400 text-white text-lg font-semibold font-ubuntu py-3 rounded-xl cursor-pointer shadow-md transition-all duration-200 ${
            isSubmitting ? "cursor-not-allowed opacity-60" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "SUCCESS" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#17d340] font-semibold mt-4 text-center md:text-xl font-ubuntu"
          >
            ✅ Thanks for your message! I'll get back to you soon. 👍
          </motion.p>
        )}

        {status === "ERROR" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#dd0b0bf1] font-semibold mt-4 text-center md:text-xl font-ubuntu"
          >
            ❌ Oops! Something went wrong. Please try again later. 🤞
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
}
