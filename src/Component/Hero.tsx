import { useEffect } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import profileImg from "/ayush.jpg";
import { Link as ScrollLink } from "react-scroll";
import { compactIntroText, fullIntroText } from "../data";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React.js | Redux | Tailwind CSS",
      "AdonisJs | Node.js",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const leftBlob = useAnimationControls();
  const rightBlob = useAnimationControls();

  useEffect(() => {
    const updateAnimation = () => {
      if (window.innerWidth < 640) {
        // Mobile: more dynamic corner blobs
        leftBlob.start({
          x: [0, 20, -10, 0],
          y: [0, -20, 10, 0],
          // scale: [1, 1.1, 0.95, 1],
          rotate: [0, 5, -5, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
        rightBlob.start({
          x: [0, -20, 10, 0],
          y: [0, 20, -10, 0],
          // scale: [1, 1.05, 0.95, 1],
          rotate: [0, -5, 5, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
          },
        });
      } else {
        // Desktop: keep your previous larger animation
        leftBlob.start({
          x: [0, 60, 0],
          y: [0, -40, 0],
          transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
        });
        rightBlob.start({
          x: [0, -60, 0],
          y: [0, 40, 0],
          transition: { duration: 12, repeat: Infinity, repeatType: "mirror" },
        });
      }
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, [leftBlob, rightBlob]);

  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 500], [0, 50]);
  const yRight = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      className="relative min-h-screen py-4 flex flex-col justify-center items-center text-white text-center px-6
      bg-linear-to-r from-purple-500 to-blue-500 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        className="absolute top-5 left-5 w-20 h-20 sm:w-56 sm:h-56 bg-purple-100 dark:bg-purple-700 sm:bg-purple-200 sm:dark:bg-purple-700/80 rounded-full blur-xl opacity-80"
        animate={leftBlob}
        style={{ y: yLeft }}
      />
      <motion.div
        className="absolute bottom-5 right-5 w-20 h-20 sm:w-56 sm:h-56 bg-cyan-100 dark:bg-cyan-500 sm:bg-cyan-200 sm:dark:bg-cyan-500/80 rounded-full blur-xl opacity-80"
        animate={rightBlob}
        style={{ y: yRight }}
      />

      {/* Profile image */}
      <motion.img
        src={profileImg}
        alt="Ayush Verma"
        className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-white dark:border-yellow-300 shadow-lg mb-6 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold mb-4 z-10 dark:text-yellow-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ayush Verma
      </motion.h1>

      {/* Typewriter role */}
      <motion.p
        className="text-lg sm:text-2xl mb-6 z-10 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {text}
        <span className="blinking-cursor">|</span>
      </motion.p>
      <motion.p
        className="hidden md:block bg-black/30 backdrop-blur-sm px-4 py-3 rounded-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {fullIntroText}
      </motion.p>
      <motion.p
        className="mx-4 md:hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {compactIntroText}
      </motion.p>

      {/* CTA button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-10"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <button className="bg-white dark:bg-gray-700 text-purple-700 dark:text-yellow-300 hover:bg-purple-50 dark:hover:bg-gray-600 hover:text-purple-800 dark:hover:text-yellow-400 px-6 py-3 rounded-lg font-semibold mt-4 transition-all duration-300 cursor-pointer">
              View Projects
            </button>
          </ScrollLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-10"
        >
          <ScrollLink
            to="skills"
            smooth={true}
            duration={1600}
            className="cursor-pointer"
          >
            <button className="bg-white dark:bg-gray-700 text-purple-700 dark:text-yellow-300 hover:bg-purple-50 dark:hover:bg-gray-600 hover:text-purple-800 dark:hover:text-yellow-400 px-6 py-3 rounded-lg font-semibold mt-4 transition-all duration-300 cursor-pointer">
              View Skills
            </button>
          </ScrollLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="z-10"
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={2000}
            className="cursor-pointer"
          >
            <button className="bg-white dark:bg-gray-700 text-purple-700 dark:text-yellow-300 hover:bg-purple-50 dark:hover:bg-gray-600 hover:text-purple-800 dark:hover:text-yellow-400 px-6 py-3 rounded-lg font-semibold mt-4 transition-all duration-300 cursor-pointer">
              View Contact Details
            </button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
