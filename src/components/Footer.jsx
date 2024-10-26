import React from "react";
import whatsapp from "../assets/whats-work.svg";
import linkedIn from "../assets/linkedin-work.svg";
import instagram from "../assets/instag-work.svg";
import twitter from "../assets/x-work.svg";

const Footer = () => {
  return (
    <section className=" pt-10 bg-gradient-to-r from-[#E5F1FF] to-[#B5D8FF] via-[#E5F1FF] via-65% dark:bg-gradient-to-r dark:from-[#151C25] dark:via-[#151C25] dark:via-50% dark:to-[#4F698B] dark:text-white">
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-16">
        <div className="flex justify-between border-b-2 border-primary flex-col md:flex-row">
          {/* Stephen Section */}
          <div>
            <h2 className="text-[30px] font-bold text-primary">Stephen</h2>
            <p className="mt-5 font-medium md:text-xl text-lg font-secondary mb-4">
              Full-Stack Developer based in Nigeria, <br /> specializing in web
              design and development.
            </p>
          </div>
          {/* Icons Section */}
          <div>
            <div>
              <h2 className="text-[30px] font-bold text-primary">
                Connect with me:
              </h2>
            </div>

            <div className="py-5  flex space-x-4">
              <a href="">
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className="md:size-12 size-9"
                />
              </a>
              <a href="">
                <img
                  src={linkedIn}
                  alt="linkedin"
                  className="md:size-12 size-9"
                />
              </a>
              <a href="">
                <img
                  src={instagram}
                  alt="instagram"
                  className="md:size-12 size-9"
                />
              </a>

              <a href="">
                <img
                  src={twitter}
                  alt="twitter"
                  className="md:size-12 size-9"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="mt-5 font-medium text-base md:text-xl font-secondary mb-4">
              © 2024 Stephen. All rights reserved
            </p>
          </div>
          <div>
            <p className="mt-5 font-medium text-base md:text-xl font-secondary mb-4">
              Privacy Teams of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
