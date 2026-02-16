"use client";
import { useRef } from "react";
import Image from "next/image";
import { businessDesigns } from "@/data";
import LetsChat from "../LetsChat";
import { Plus_Jakarta_Sans } from "next/font/google";
import Faq from "../Faq";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../useMedia";

const jarkata = Plus_Jakarta_Sans({
  weight: ["400","500","600"],
  subsets: ["latin"],
});

const BusinessDesignCard = ({
  businessDesign,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div
      className={`flex flex-col sm:w-full ${jarkata.className} pt-8 sm:pt-0 h-full`}
    >
      <div className="flex flex-col sm:flex-row justify-between h-full pt-6 pb-10">
        <div className="flex flex-col w-[100%] sm:w-[60%]">
          <p className="text-white text-2xl sm:text-[32px] font-semibold sm:font-bold">{businessDesign.heading}</p>
          <p className="text-white text-sm mt-6 font-medium leading-5">
            {businessDesign.description}
          </p>
          <p className="text-white text-sm sm:text-base leading-7 mt-3 sm:mt-[30px] font-semibold">
            What you get
          </p>
          <div className="text-white text-sm sm:text-base leading-7 mt-4 sm:mt-6 flex gap-1 sm:gap-2 flex-wrap">
            {businessDesign.whatYouget.map((item, index) => (
              <span key={index} >{item} {index !== businessDesign.whatYouget.length - 1 ? <span className="ml-0 sm:ml-2" >|</span> : ""}</span>
            ))}
          </div>
          {/* Mobile tools we use */}
          <div className="gap-4 flex flex-col mt-6 sm:mt-[80px] sm:hidden">
            <p className="text-white text-sm sm:text-base leading-7 font-semibold">Tools we use</p>
            <div className="gap-4 flex flex-wrap h-[50px] sm:h-[70px] sm:h-auto overflow-hidden sm:overflow-visible">

              {businessDesign.imagesToolsWeUse.map((item, index) => {
                if (item.image) {
                  return (
                    <div
                      tabIndex={0}
                      className="group relative w-12 h-12 sm:w-14 sm:h-14
             rounded-full border border-[#16CCEA]
             flex items-center justify-center"
                      key={index}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        height={isMobile ? 15 : 30}
                        width={isMobile ? 15 : 30}
                      />

                      <div
                        className="absolute -top-10 left-1/2 -translate-x-1/2
               whitespace-nowrap
               bg-black text-white text-xs
               px-3 py-1 rounded-md
               opacity-0 
               group-hover:opacity-100 
               group-focus:opacity-100
               transition-opacity duration-200
               pointer-events-none"
                      >
                        {item.title}
                      </div>
                    </div>

                  )
                } else {
                  return (
                    <div className="px-3 py-3 sm:p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-sm text-base" key={index}>
                      <p>{item.text}</p>
                    </div>
                  )
                }
              }

              )}
            </div>
          </div>
        </div>

        <Image src={businessDesign.cardImage} width={250} height={300} alt="discover" className=" w-[100%] sm:w-[40%] h-[100%] max-h-[250px] object-contian" />
      </div>
      {/* Desktop tools we use */}
      <div className="gap-2 sm:gap-4 sm:flex flex-col mt-6 hidden">
        <p className="text-white text-sm sm:text-base font-semibold">Tools we use</p>
        <div className="gap-4 flex flex-wrap overflow-hidden sm:overflow-visible">

          {businessDesign.imagesToolsWeUse.map((item, index) => {
            if (item.image) {
              return (
                <div
                  className="group relative w-12 h-12 sm:w-14 sm:h-14
             rounded-full border border-[#16CCEA]
             flex items-center justify-center"
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={isMobile ? 15 : 30}
                    width={isMobile ? 15 : 30}
                  />

                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2
               whitespace-nowrap
               bg-black-3 text-white text-xs
               px-3 py-1 rounded-md
               opacity-0 group-hover:opacity-100
               transition-opacity duration-200
               pointer-events-none"
                  >
                    {item.title}
                  </div>
                </div>
              )
            } else {
              return (
                <div className="px-3 py-3 sm:p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-sm text-base" key={index}>
                  <p>{item.text}</p>
                </div>
              )
            }
          }

          )}
        </div>
      </div>
    </div>
  );
};

const BusinessDesignCards = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="flex flex-col w-full">
      <section ref={sectionRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
          <motion.div
            style={{ x }}
            className="flex flex-row gap-[30px] px-5 sm:px-20"
          >
            {businessDesigns.map((businessDesign, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[60vw] flex-shrink-0"
              >
                <BusinessDesignCard businessDesign={businessDesign} />
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-10 left-0 w-full px-5 sm:px-20">
            <div className="w-full rounded-[20px] h-[5px] bg-[#FFFFFF1A] relative overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute left-0 top-0 bottom-0 w-full bg-[#FFEA5A] origin-left"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="sm:px-20 px-5 sm:pb-20 pb-5 flex flex-col">
        <Faq />
        <LetsChat />
      </div>
    </div>
  );
};


export default BusinessDesignCards;
