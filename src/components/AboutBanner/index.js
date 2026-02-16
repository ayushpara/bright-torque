"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/aboutStar.svg";
import { rotateVariants } from "@/utilities/helpers";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
const syne = Syne({
  weight:['400'],
  subsets:["latin"]
})
const AboutBanner = () => {
  return (
    <div className="w-full bg-primary">
      <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-16">
        <div className="w-full sm:flex-row flex-col flex ">
          <div className="flex flex-col order-last sm:order-none sm:w-3/4">
            <h1 className={`sm:text-[72px] text-[35px]  sm:leading-[74px] leading-[40px] text-green-1 ${syne.className}`}>
              Transforming your ideas into{" "}
              <span className="text-secondary">Brand & Products</span>
            </h1>
            <h1 className={`text-green-3 sm:text-xl text-base sm:pt-5 pt-3 ${jarkata.className} `}>
              Breaking new ground to transform the industry.
            </h1>
          </div>
          <div className="flex flex-row justify-end items-center flex-1 relaive">
            <motion.div
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              className="relative sm:h-[123px] sm:w-[123px] w-[45px] h-[45px] bg-cover"
              style={{ transformOrigin: "center center", backgroundImage:`url(${starIcon.src})` }}
            >
            </motion.div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutBanner;
