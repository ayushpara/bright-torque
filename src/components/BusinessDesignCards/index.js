"use client";
import { useRef } from "react";
import Image from "next/image";
import { businessDesigns } from "@/data";
import LetsChat from "../LetsChat";
import useMediaQuery from "../useMedia";
import { Plus_Jakarta_Sans } from "next/font/google";
import Faq from "../Faq";
import { motion, useScroll, useTransform } from "framer-motion";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});


const BusinessDesignCard = ({
  businessDesign,
}) => {
  return (
    <div
      className={`flex flex-col sm:w-full ${jarkata.className} `}
    // onClick={() => onChangeDesign(index)}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-[100%] sm:w-[60%]">
          <p className="text-white text-[32px] font-semibold sm:font-bold">{businessDesign.heading}</p>
          <p className="text-white text-sm mt-6 font-medium leading-5">
            {businessDesign.description}
          </p>
          <p className="text-white text-base leading-7 mt-[30px]">
            What you get
          </p>
          <div className="text-white text-base leading-7 mt-4 sm:mt-6 flex gap-2 flex-wrap">
            {businessDesign.whatYouget.map((item, index) => (
              <span key={index} >{item} {index !== businessDesign.whatYouget.length - 1 ? <span className="ml-2" > | </span> : ""}</span>
            ))}
          </div>
          <div className="gap-4 flex flex-col mt-6 sm:mt-[80px] sm:hidden">
            <p className="text-white text-base leading-7 ">Tools we use</p>
            <div className="gap-4 flex flex-wrap">

              {businessDesign.imagesToolsWeUse.map((item, index) => (
                <div className="p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-base" key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <Image src={businessDesign.cardImage} width={250} height={300} alt="discover" className=" w-[100%] sm:w-[40%] h-[100%] max-h-[250px] object-contian" />
      </div>
      <div className="gap-4 sm:flex flex-col mt-6 hidden">
        <p className="text-white text-sm ">Tools we use</p>
        <div className="gap-4 flex flex-wrap">

          {businessDesign.imagesToolsWeUse.map((item, index) => (
            <div className="p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-base leading-7" key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BusinessDesignCards = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center end", "center start"]
  });

  // Move from -30% to +30% of its width
  const xMove = useTransform(scrollYProgress, [0, 1], ["200%", "-450%"]);
  const barMove = useTransform(scrollYProgress, [0, 1], ["-150%", "300%"]);


  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Scroll Section */}
      <section
        ref={sectionRef}
        className="relative flex flex-col justify-center overflow-hidden mb-10"
      >
        {/* Mask wrapper prevents horizontal scrollbar */}
        <div className="overflow-hidden">

          {/* Cards */}
          <motion.div
            style={{ x: xMove }}
            className="flex flex-row gap-10 sm:px-20 px-5"
          >
            {businessDesigns.map((businessDesign, index) => (
              <div
                className="flex justify-center min-w-[80%] sm:w-auto"
                key={index}
              >
                <BusinessDesignCard businessDesign={businessDesign} />
              </div>
            ))}
          </motion.div>

        </div>

        {/* Progress Bar */}
        <div className="sm:px-20 px-5 mt-20">
          <div className="w-full rounded-[20px] h-[5px] bg-[#FFFFFF1A] relative overflow-hidden">
            <motion.div
              style={{ x: barMove }}
              className="w-[25%] bg-[#FFEA5A] h-[5px] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* Rest of page */}
      <div className="sm:px-20 px-5 sm:pb-20 pb-5 flex flex-col">
        <Faq />
        <LetsChat />
      </div>

    </div>
  );
};


export default BusinessDesignCards;
