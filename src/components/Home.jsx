import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B] dark:text-white">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
