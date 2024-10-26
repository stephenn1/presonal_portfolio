import React from "react";
import { servicesData } from "../utilities/services";

const Card = () => {
  return (
    <section className="bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B]">
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <div>
          <h2 className="text-[40px] pt-5 font-bold font-primary text-primary text-center">
            What I Do
          </h2>
        </div>
        {/* Card Slider */}
        <div className="">
          <div className="grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-14 gap-y-8 pb-16">
            {servicesData.map((card, index) => (
              <div key={index} className="w-full bg-white rounded-2xl mb-5 p-6">
                <div className=" flex justify-center items-center ">
                  <img src={card.image} alt="images" className="size-14" />
                </div>

                <h3 className="text-center text-lg font-semibold mt-4 ">
                  {card.title}
                </h3>
                <p className="text-center pt-4 mb-3">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
