import React, { useState } from "react";
import myProject from "../utilities/projects";
import { FaLocationArrow } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" dark:bg-[#151C25] text-black dark:text-white"
    >
      <div className=" max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <h2 className="text-[40px] font-bold font-primary text-primary text-center pt-20">
          Recent Projects
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-40 gap-y-10 py-10 ">
          {myProject.map(({ id, title, descript, image, tech, link }) => (
            <div
              key={id}
              className=" rounded-xl flex justify-center items-center sm:w-96 w-[80vw] shadow-2xl dark:bg-[#4F698B]"
            >
              <div title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] rounded-xl overflow-hidden h-[20vh] lg:h-[30vh] mb-7">
                  <img src={image} alt={title} className="z-10 absolute" />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-3">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 px-3 ">
                  {descript}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3 px-3">
                  <div className="flex items-center ">
                    {tech.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center cursor-pointer">
                    <a
                      className="flex lg:text-xl md:text-xs text-sm text-primary"
                      href={link}
                      target="_blank"
                    >
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
