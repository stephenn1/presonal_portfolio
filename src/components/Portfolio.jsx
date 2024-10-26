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
        <h2 className="text-[40px] font-bold font-primary text-primary text-center pt-20">
          My Portfolio
        </h2>
        <div className="justify-center items-center flex relative">
          <FaArrowLeft className="text-primary size-11" onClick={prevSlide} />
          {myProject.map((item, index) => {
            return (
              <div
                key={index}
                className={` items-center mt-20 mx-7 ${
                  slide === index ? "flex flex-col" : "hidden"
                }`}
              >
                <h3 className="text-2xl font-semibold py-5">{item.title}</h3>
                <div>
                  <img
                    src={item.image}
                    alt="image-one"
                    className="w-[400px] h-[300px]"
                  />
                </div>
                <p className="p-5 text-lg">{item.descript}</p>
                <p className="space-x-3 text-lg">Technologies: {item.tech}</p>
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
