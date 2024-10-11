import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { servicesData } from "../utilities/services";

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px (tablets and phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B]">
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <div>
          <h2 className="text-[40px] pt-20 font-bold font-primary text-primary text-center">
            What I Do
          </h2>
        </div>
        {/* Card Slider */}
        <div className="mt-10 pb-20">
          <Slider {...settings}>
            {servicesData.map((items, index) => (
              <div
                key={index}
                className="mx-auto py-5 px-2 bg-white max-w-xs md:max-w-sm lg:max-w-md h-72 hover:bg-[#B5D8FF] rounded-lg shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex justify-center items-center pt-5">
                  <img src={items.image} alt="images" className="size-8" />
                </div>
                <h3 className="text-center text-lg font-semibold pt-5">
                  {items.title}
                </h3>
                <p className="text-center pt-4">{items.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Card;
