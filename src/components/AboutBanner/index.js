"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import starIcon from "../../static/icons/aboutStar.svg";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const AboutBanner = () => {
  const rotateVariants = {
    animate: {
      rotateY: 360,
      x: "0%",
      y: "0%",
      translateX: "-50%",
      translateY: "-50%",
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
    initial: {
      x: "50%",
      y: "50%",
    },
  };
  return (
    <div className="w-full bg-primary">
      <div className="p-5 sm:px-[120px] sm:py-16">
        <div className="w-full sm:flex-row flex-col flex ">
          <div className="flex flex-col order-last sm:order-none sm:w-3/4">
            <p className="sm:text-[72px] text-[35px]  sm:leading-[74px] leading-[40px] text-base text-green-1">
              Tranforming your ideas into{" "}
              <span className="text-secondary">Brand & Prodicts</span>
            </p>
            <p className="text-green-3 sm:text-xl text-base sm:pt-5 pt-3">
              Breaking new ground to transform the industry.
            </p>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={rotateVariants}
            className=" justify-end items-center flex"
          >
            <div className="relative sm:w-[123px] sm:h-[123px] w-[45px] h-[45px]">
              <Image
                style={{ transformOrigin: "center center" }}
                src={starIcon}
                alt="star"
                className="object-cover absolute w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutBanner;
