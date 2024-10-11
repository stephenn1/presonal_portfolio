import React from "react";
import waveIcon from "../assets/wave-icon.png";
import mailBox from "../assets/mail-box.png";

const Cta = () => {
  return (
    <section className="h-72 dark:bg-[#151C25] text-black dark:text-white">
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <div>
          <h2 className="md:text-[40px] text-2xl font-bold  pt-14 font-primary text-center ">
            Have a project in mind? <br /> Let’s talk about the next big thing
            <div className="inline-block mx-5 ">
              <div className="flex items-center space-x-5">
                <img src={waveIcon} alt="wave" className="inline-block" />
                <img src={mailBox} alt="mail" className="hidden md:flex" />
              </div>
            </div>
          </h2>
          <div className="justify-center items-center flex pt-8">
            <a
              href="#contact"
              className="font-medium text-lg font-secondary py-2 px-5 bg-[#007AFF] rounded-3xl text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
