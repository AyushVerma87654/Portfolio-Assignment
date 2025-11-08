import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-12 bg-gradient-to-r from-cyan-500 via-teal-400 to-green-500 
             dark:from-gray-500 dark:via-gray-700 dark:to-gray-900 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 dark:text-gray-200">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 20px rgba(255, 182, 193, 0.7), 0 0 30px rgba(255, 105, 180, 0.5)`,
            }}
            className="flex flex-col items-center p-6 rounded-xl
             bg-gradient-to-br from-orange-300 via-rose-300 to-pink-300
             dark:from-gray-800/60 dark:via-purple-900/50 dark:to-pink-900/40
             backdrop-blur-md border border-white/20 dark:border-gray-700/30
             transition-all duration-300"
          >
            <div className="relative w-24 h-24 mb-4">
              {/* Circular background */}
              <svg className="w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  strokeWidth="10%"
                  className="text-gray-200 dark:text-gray-700"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              {/* Animated gradient circle */}
              <motion.svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  strokeWidth="10%"
                  strokeLinecap="round"
                  fill="transparent"
                  stroke="url(#gradient)"
                  strokeDasharray="283"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <h3 className="text-lg font-semibold dark:text-yellow-300 text-center">
              {skill.name}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
              {skill.info}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
