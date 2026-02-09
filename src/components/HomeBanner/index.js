"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/star.svg";
import viewArrowIcon from "../../static/icons/viewArrow.svg";
import { homeProjects } from "@/data";
import { rotateVariants } from "@/utilities/helpers";
import { Plus_Jakarta_Sans } from "next/font/google";
import OurStats from "../OurStats";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const HomeBanner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full bg-primary">
      <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-16">
        <div className="w-full grid flex-row sm:grid-cols-4">
          <div className="sm:col-span-4 flex flex-col order-last sm:order-none">
            <p className="sm:text-[72px] text-[31px] sm:leading-[84px] leading-[40px] text-green-1 ">
              Design Experts.
            </p>
            <p className="sm:text-[72px] text-[31px]  sm:leading-[84px] leading-[40px] text-secondary text-green-2 ">
              Design Decisions, Made Visible.
            </p>
            <p
              className={`text-green-3 sm:text-xl text-base mt-5 ${jarkata.className} sm:block hidden `}
            >
              We’re a Product Design & Branding Agency  who specializes in B2B SaaS,<br /> Ecommerce platforms, complex web apps and diverse UI/UX design projects.
            </p>
            <p
              className={`text-green-3 sm:text-xl text-base mt-5 ${jarkata.className} sm:hidden  `}
            >
              We’re a Product Design & Branding<br /> Agency  who specializes in B2B SaaS,<br /> Ecommerce platforms, complex web apps and<br /> diverse UI/UX design projects.
            </p>
          </div>
        </div>
      </div>
      <div className={`p-5 sm:px-[70px] sm:py-16 ${jarkata.className}`}>
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
              <p className="text-white font-normal sm:text-lg text-[5px] sm:mt-5 mt-2">
                {homeProjects[selectedIndex].description}
              </p>
            </motion.div>
          </>

          <div className="flex flex-row sm:gap-10 gap-5 sm:mt-10 mt-5">
            {homeProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative flex-grow transition-all duration-300 sm:h-[512px] h-[129px] hover:cursor-pointer  ${
                  selectedIndex === index ? "col-span-3" : "col-span-1"
                }`}
                onClick={() => setSelectedIndex(index)}
                style={{
                  flex: selectedIndex === index ? "5" : "1",
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
                    {project.tags.map((tag, index) => (
                      <div className="bg-black-2 sm:p-2 p-2 rounded-lg sm:h-[32px] h-[8px] justify-center flex items-center " key={index}>
                        <p className="sm:text-xs text-[5px] text-white">
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="sm:rounded-[1440px] border border-secondary rounded-[312px] sm:h-[56px] sm:w-[208px] w-[40px] h-[13.83px] bg-white justify-center flex items-center">
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
          <OurStats/>
      </div>
    </div>
  );
};

export default HomeBanner;
