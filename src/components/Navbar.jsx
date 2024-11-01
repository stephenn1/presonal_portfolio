import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };
  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <div>
      <nav
        className={`w-full text-black dark:text-white fixed top-0 z-20 transition-colors duration-300 ${
          color ? "bg-white dark:bg-slate-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
          <div className="h-16 flex justify-between items-center">
            <a href="#" className="font-primary font-semibold text-2xl">
              <span className="text-[#007AFF] font-extrabold text-3xl">S</span>
              tephen
            </a>

            <div className="space-x-8 hidden md:flex">
              {menuItems.map((items, index) => (
                <a
                  onClick={() => handleMenuClick(items.name)}
                  key={index}
                  href={items.href}
                  className={`font-medium text-lg font-secondary hover:text-primary ${
                    activeItem === items.name ? "text-[#409BFF]" : ""
                  }`}
                >
                  {items.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="md:hidden">
                <button onClick={darkModeHandler} className="">
                  {dark ? (
                    <IoSunny className="text-gray-800 dark:text-white size-5" />
                  ) : (
                    <IoMoon className="text-gray-800 dark:text-white size-5" />
                  )}
                </button>
              </div>

              <div onClick={toggleMenu} className="md:hidden flex items-center">
                <button>
                  {isOpen ? (
                    <IoMdClose className="size-5" />
                  ) : (
                    <HiOutlineMenuAlt3 className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <button onClick={darkModeHandler} className="">
                {dark ? (
                  <IoSunny className="text-gray-800 dark:text-white size-5" />
                ) : (
                  <IoMoon className="text-gray-800 dark:text-white size-5" />
                )}
              </button>
              <a
                href="#contact"
                className="font-medium text-lg font-secondary py-2 px-5 bg-[#007AFF] rounded-3xl text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 dark:text-white shadow-md">
            <div className="px-4 pt-2 pb-3 space-y-3 sm:p-3 bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B] dark:text-white">
              {menuItems.map((items, index) => (
                <a
                  onClick={() => handleMenuClick(items.name)}
                  key={index}
                  href={items.href}
                  className={`block font-medium hover:text-primary ${
                    activeItem === items.name ? "text-[#409BFF]" : ""
                  }`}
                >
                  {items.name}
                </a>
              ))}
            </div>
            <div className="bg-primary rounded-lg ">
              <a href="#contact">Hire Me</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
