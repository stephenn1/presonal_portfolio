import React from "react";
import waveIcon from "../assets/wave-icon.png";
import mailBox from "../assets/mail-box.png";
import smile from "../assets/face1.svg";

const Cta = () => {
  return (
    <section className="dark:bg-[#151C25] text-black dark:text-white">
      <div className="max-w-7xl mx-auto md:py-20 py-10  sm:px-6 px-4 lg:px-16">
        <div className="flex justify-center items-center ">
          <h2 className="md:text-5xl text-2xl font-bold font-primary text-center ">
            Have a project in mind? <br />
            Let’s talk about the next big thing
            <div className="inline-block mx-5 ">
              <div className="flex items-center space-x-5">
                <img
                  src={smile}
                  alt="mail"
                  className="hidden md:flex size-6 md:size-9"
                />
                <img
                  src={waveIcon}
                  alt="wave"
                  className=" hidden md:flex size-6 md:size-9"
                />
              </div>
            </div>
          </h2>
        </div>
        <div className="justify-center items-center flex md:pt-8">
          <a
            href="#contact"
            className="font-medium text-lg font-secondary py-2 px-5 bg-[#007AFF] rounded-3xl text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
