import React from "react";
import aboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section
      id="about"
      className=" dark:bg-[#151C25] text-black dark:text-white"
    >
      <div className="pb-16 max-w-7xl mx-auto sm:px-6 px-4 lg:px-16 flex justify-between flex-col md:flex-row">
        {/* Img Area */}
        <div className="mt-5 md:w-2/4 w-full flex justify-center items-center">
          <img
            src={aboutImg}
            alt="about-img"
            className="md:w-[400px] md:h-[500px] w-[200px] h-[250px] rounded-full md:rounded-none"
          />
        </div>
        {/* Text Area */}
        <div className="md:mt-48 mt-5 md:w-2/4 w-full  text-center md:text-left">
          <h2 className="text-5xl font-bold font-primary text-primary">
            About Me
          </h2>
          <p className=" font-medium md:text-lg font-secondary text-base">
            I’m Stephen, a web developer and designer with a background in
            Electrical and Electronics Engineering. My passion for solving
            technical problems has led me to explore the exciting world of web
            development, to create engaging digital experiences. I specialize in
            front-end development using React, Next.js, and Tailwind CSS, while
            Figma helps me design intuitive interfaces. For the backend, I use
            Firebase to ensure smooth functionality. Beyond coding, I enjoy
            solving complex problems, reading, staying updated on web
            development trends, and watching football.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
