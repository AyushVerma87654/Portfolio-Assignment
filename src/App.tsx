import type { FC } from "react";
import Hero from "./Component/Hero";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import DarkModeToggle from "./Component/DarkModeToggle";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <DarkModeToggle />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
