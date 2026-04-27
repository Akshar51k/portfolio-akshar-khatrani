import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData, contactData } from "../data/content";

function Typewriter({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="text-accent"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="cursor-blink ml-0.5 text-accent">|</span>
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          {heroData.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="text-xl sm:text-2xl font-light mb-6"
        >
          <Typewriter words={heroData.roles} />
        </motion.div>

        <motion.p
          variants={item}
          className="text-text-muted text-lg leading-relaxed mb-4 max-w-2xl"
        >
          {heroData.tagline}{" "}
          <a
            href={heroData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-text transition-colors"
          >
            LinkedIn
          </a>{" "}
          /{" "}
          <a
            href={heroData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-text transition-colors"
          >
            GitHub
          </a>{" "}
          /{" "}
          <a
            href={heroData.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-text transition-colors"
          >
            LeetCode
          </a>{" "}
          /{" "}
          <a
            href={heroData.x}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-text transition-colors"
          >
            X
          </a>{" "}
          /{" "}
          <a
            href={`mailto:${contactData.email}`}
            className="underline underline-offset-4 hover:text-text transition-colors"
          >
            Email
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
