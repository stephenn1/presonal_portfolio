import React, { useState } from "react";
import whiteBanner2 from "../assets/white-banner2.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Developer.", "Designer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <section className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-between pb-10 md:pb-0">
        {/* Text Area */}
        <div className="md:mt-44 mt-7 text-center md:text-left font-primary ">
          <h3 className="text-lg md:text-2xl font-semibold font-secondary">
            Hello!
          </h3>
          <h2 className="md:text-[40px] text-[25px] font-bold">I'm Stephen,</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">
            a Web <span className="text-primary">{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#007AFF"
            />
          </h1>
          <p className="mt-5 font-medium text-lg md:text-xl font-secondary mb-4">
            I bring innovative ideas to life, <br />
            from creative design to flawless development.
          </p>
          <a
            href="#contact"
            className="font-medium text-lg font-secondary py-2 px-5 bg-[#007AFF] rounded-3xl text-white"
          >
            Hire Me
          </a>
        </div>
        {/* Img Area */}
        <div className="mr-6 order-first md:order-last flex justify-center items-center">
          <img
            src={whiteBanner2}
            alt="white-banner"
            className="w-[200px] h-[300] md:w-full md:h-full rounded-full md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
