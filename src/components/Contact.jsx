import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B] dark:text-white"
    >
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <h2 className="text-5xl font-bold font-primary text-primary text-center pt-14">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row py-14 space-y-10 md:space-y-0 md:space-x-10">
          {/* Let's Talk section */}
          <div className="md:w-1/2">
            <h2 className="text-[30px] font-bold text-primary">Let's Talk</h2>
            <p className="mt-5 font-medium md:text-xl text-lg font-secondary mb-4">
              I’m open to discussing web development projects and partnership
              opportunities.
            </p>
            <div className="flex space-x-4 items-center">
              <div className="px-4 py-4 bg-white rounded-full hover:bg-[#B5D8FF]">
                <IoIosMail className="text-primary size-6 block" />
              </div>
              <p>Okonkwostephen79@gmail.com</p>
            </div>
            <div className="flex space-x-4 pt-5 items-center">
              <div className="px-4 py-4 bg-white rounded-full w-14 hover:bg-[#B5D8FF]">
                <FaPhoneAlt className="text-primary size-6 block" />
              </div>
              <p>08122808880</p>
            </div>
            <div className="flex space-x-4 pt-5 items-center">
              <div className="px-4 py-4 bg-white rounded-full w-14 hover:bg-[#B5D8FF]">
                <FaLocationDot className="text-primary size-6 block" />
              </div>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2">
            <form action="" className="w-full">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-primary font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="block w-full md:w-2/3 py-2 px-3 rounded-sm focus:outline-none"
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-primary font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full md:w-2/3 py-2 px-3 rounded-sm focus:outline-none"
                  required
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="mb-10">
                <label
                  htmlFor="message"
                  className="block text-primary font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full md:w-2/3 py-2 px-3 rounded-sm focus:outline-none"
                  required
                  placeholder="Type your message here..."
                />
              </div>
            </form>
            <a
              type="submit"
              href="#contact"
              className="font-medium text-lg font-secondary py-2 px-5 bg-[#007AFF] rounded-3xl text-white sm:mx-auto"
            >
              Send
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
