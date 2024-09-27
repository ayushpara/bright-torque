"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/star.svg";
import viewArrowIcon from "../../static/icons/viewArrow.svg";
import { homeProjects } from "@/data";
import { rotateVariants } from "@/utilities/helpers";

const HomeBanner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full bg-primary">
      <div className="p-5 sm:px-[120px] sm:py-16">
        <div className="w-full grid flex-row sm:grid-cols-4">
          <div className="sm:col-span-3 flex flex-col order-last sm:order-none">
            <p className="sm:text-[72px] text-[31px] sm:leading-[84px] leading-[40px] text-green-1 ">
              Design Experts.
            </p>
            <p className="sm:text-[72px] text-[31px]  sm:leading-[84px] leading-[40px] text-secondary text-green-2 ">
              Helping Mission-Focused
            </p>
            <p className="sm:text-[72px] text-[31px]  sm:leading-[84px] leading-[40px] text-green-1 ">
              B2B Saas Companies.
            </p>
            <p className="text-green-3 sm:text-xl text-base mt-5">
              We’re a Product Design & Branding Agency <br />
              who specializes in B2B SaaS platforms, complex Web Apps <br />
              and diverse UI/UX design projects. Based in India...
            </p>
          </div>
          <div className="flex flex-row justify-end items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={rotateVariants}
            className="sm:col-span-1 justify-end items-center flex sm:h-[123px] sm:w-[123px] w-[45px] h-[45px]"
            style={{ transformOrigin: "center center" }} 
          >
             
            <motion.div
              className="absolute  "
              style={{ width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Image
                style={{ transformOrigin: "center center" }}
                src={starIcon}
                alt="star"
                layout="fill" 
                className="object-cover absolute w-full h-full"
              />
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>
      <div className="p-5 sm:px-[70px] sm:py-16">
        <div className="sm:rounded-[40px] rounded-xl bg-secondary sm:p-10 p-5">
          <>
            <motion.div
              key={selectedIndex}
              initial={{ x: 400, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex "
            >
              <p className="text-white sm:text-[120px] text-[29px] leading-[29px] sm:leading-[120px]">
                {homeProjects[selectedIndex].heading}
              </p>
            </motion.div>

            <motion.div
              key={`desc-${selectedIndex}`}
              initial={{ x: 400, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex "
            >
              <p className="text-white sm:text-lg text-[5px] sm:mt-5 mt-2">
                {homeProjects[selectedIndex].description}
              </p>
            </motion.div>
          </>

          <div className="flex flex-row sm:gap-10 gap-5 sm:mt-10 mt-5">
            {homeProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative flex-grow transition-all duration-300 sm:h-[512px] hover:cursor-pointer  ${
                  selectedIndex === index ? "col-span-3" : "col-span-1"
                }`}
                onClick={() => setSelectedIndex(index)}
                style={{
                  flex: selectedIndex === index ? "5" : "1",
                  // height: "512px",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.heading}
                  className={`w-full h-full ${
                    selectedIndex === index
                      ? "object-cover w-full"
                      : "object-cover sm:w-auto  w-[49px]"
                  } rounde sm:rounded-[20px] rounded-xl sm:h-full h-[128px]`}
                />
                <div
                  className={`absolute sm:bottom-10 bottom-3 sm:px-10 px-2 w-full flex flex-row justify-between ${
                    selectedIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="sm:space-x-3 space-x-1 flex flex-row items-center">
                    {project.tags.map((tag) => (
                      <div className="bg-black-2 sm:p-2 p-2 rounded-lg sm:h-[32px] h-[8px] justify-center flex items-center ">
                        <p className="sm:text-xs text-[5px] text-white">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="sm:rounded-[1440px] rounded-[312px] sm:h-[56px] sm:w-[208px] w-[40px] h-[13.83px] bg-white justify-center flex items-center">
                      <div className="flex flex-row sm:space-x-7 space-x-2 items-center">
                        <p className="text-black-2 sm:text-lg text-[4.34px]">
                          View
                        </p>
                        <div className="relative w-[6.84px] h-[5px] sm:w-[30px] sm:h-[21px]">
                          <Image src={viewArrowIcon} alt="view" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
