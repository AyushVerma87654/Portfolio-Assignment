import type { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        I'm an MCA student passionate about full-stack development, problem
        solving, and building scalable web applications. I'm always learning and
        love contributing to open source.
      </p>
    </section>
  );
};

export default About;
