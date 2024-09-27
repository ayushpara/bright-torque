"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/workStar.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import { rotateVariants } from "@/utilities/helpers";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const WorkBanner = () => {
  return (
    <div className="w-full bg-primary">
      <div className="p-5 sm:px-[120px] sm:py-16">
        <div className="w-full sm:flex-row flex-col flex">
          <div className="flex flex-col order-last sm:order-none">
            <p className="text-base text-green-1">OUR WORK</p>
            <p className="sm:text-[72px] text-[31px] sm:leading-[74px] leading-[40px] text-secondary text-green-2 sm:block hidden">
              Breaking new ground to
            </p>
            <p className="sm:text-[72px] text-[31px] sm:leading-[74px] leading-[40px] text-green-1 sm:block hidden">
              transform design across industry...
            </p>
            <p className="sm:text-[72px] text-[31px] sm:leading-[74px] leading-[40px] text-green-1 sm:hidden">
              Breaking new ground to{" "}
              <span className="text-secondary">
                transform design across industry...
              </span>
            </p>
            <p className={`text-green-3 sm:text-xl text-base sm:pt-5 pt-3 ${jarkata.className} `}>
              Transforming pixels into meaningful designs
            </p>
          </div>
          <div className="flex flex-row justify-end items-center flex-1">
            <motion.div
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              className="relative sm:h-[123px] sm:w-[123px] w-[45px] h-[45px]"
              style={{ transformOrigin: "center center" }}
            >
              <Image
                src={starIcon}
                alt="star"
                layout="fill"
                className="object-cover absolute w-full h-full"
                style={{ borderRadius: "50%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={`relative sm:py-10 p-5 bg-secondary flex flex-col items-center justify-center w-full ${jarkata.className}`}
      >
        <div className="flex sm:flex-row flex-col sm:gap-20 gap-5 items-center justify-center">
          <p className="sm:text-[24px] text-base text-white">more yummy</p>
          <p className="sm:text-[24px] text-base text-white">you first</p>
          <p className="sm:text-[24px] text-base text-white">cutting edge</p>
          <p className="sm:text-[24px] text-base text-white">hide nothing</p>
          <p className="sm:text-[24px] text-base text-white">more yummy</p>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
