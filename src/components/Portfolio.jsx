import React, { useState } from "react";
import myProject from "../utilities/projects";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === myProject.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? myProject.length - 1 : slide - 1);
  };
  return (
    <section
      id="portfolio"
      className=" dark:bg-[#151C25] text-black dark:text-white"
    >
      <div className=" max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <h2 className="text-5xl font-bold font-primary text-primary text-center pt-16">
          My Portfolio
        </h2>
        <div className="justify-center items-center flex relative">
          <FaArrowLeft className="text-primary size-11" onClick={prevSlide} />
          {myProject.map((item, index) => {
            return (
              <div
                key={index}
                className={` items-center mt-16 mx-7 mb-4 ${
                  slide === index ? "flex flex-col" : "hidden"
                }`}
              >
                <h3 className="text-3xl font-semibold text-primary py-5">
                  {item.title}
                </h3>
                <div>
                  <img
                    src={item.image}
                    alt="image-one"
                    className="w-[300px] md:w-[400px] h-auto"
                  />
                </div>
                <p className="p-5 md:text-xl text-base md:w-3/4">
                  {item.descript}
                </p>
                <p className="space-x-3 text-base md:text-lg">
                  Technologies: {item.tech}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Go Live
                </a>
              </div>
            );
          })}
          <FaArrowRight className="text-primary size-11" onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
