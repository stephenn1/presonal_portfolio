import React from "react";
import figma from "../assets/figma.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript2.png";
import tailwind from "../assets/tailwind2.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase11.png";
import framer from "../assets/framer2.png";
import github from "../assets/github2.png";
import react from "../assets/react2.png";
import typescript from "../assets/typescript2.png";
import next from "../assets/next2.png";
import redux from "../assets/redux.png";

const Skills = () => {
  return (
    <section
      id="services"
      className=" pt-24 bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B] dark:text-white"
    >
      <div className=" max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <div className="">
          <h2 className="text-[40px] font-bold font-primary text-primary text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-5">
            <img src={figma} alt="figma" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={tailwind} alt="tailwind" />
            <img src={react} alt="react" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <img src={redux} alt="figma" />
            <img src={typescript} alt="html" />
            <img src={next} alt="css" />
            <img src={github} alt="javascript" />
            <img src={firebase} alt="tailwind" />
            <img src={framer} alt="react" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
