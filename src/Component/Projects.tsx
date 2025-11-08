import { motion } from "framer-motion";
import { Button } from "./Button";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-12
             bg-linear-to-r from-red-500 via-amber-400 to-yellow-300 
             dark:from-gray-800 dark:via-gray-900 dark:to-gray-700
             text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 dark:text-gray-200">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-xl overflow-hidden flex flex-col justify-between pt-4 pb-12 
                       hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300
                       bg-linear-to-br from-white/80 via-white/60 to-white/50 dark:bg-gray-900 shadow-md"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-yellow-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-yellow-300 
                               text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 mx-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.live, "_blank")}
                className="flex-1 cursor-pointer"
              >
                Live
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.github, "_blank")}
                className="flex-1 cursor-pointer"
              >
                GitHub
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
