import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function useFramerTypewriter(
  words,
  typingSpeed = 96,
  deletingSpeed = 39,
  delayBetween = 1600
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index];
    const fullArray = Array.from(currentWord);

    if (!isDeleting) {
      if (charIndex < fullArray.length) {
        timeoutRef.current = setTimeout(() => {
          setText(fullArray.slice(0, charIndex + 1).join(""));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(fullArray.slice(0, charIndex - 1).join(""));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, index, words, typingSpeed, deletingSpeed, delayBetween]);

  const emojiMatches = text.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu) || [];
  const textWithoutEmoji = text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="inline-block min-w-[220px] text-left"
    >
      <span className="text-gradient-main">{textWithoutEmoji}</span>
      <span>{emojiMatches.join("")}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block"
      >
      </motion.span>
    </motion.span>
  );
}
