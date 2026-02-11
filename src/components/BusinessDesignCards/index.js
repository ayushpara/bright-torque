"use client";
import Image from "next/image";
import { businessDesigns } from "@/data";
import LetsChat from "../LetsChat";
import useMediaQuery from "../useMedia";
import { Plus_Jakarta_Sans } from "next/font/google";
import Faq from "../Faq";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});


const BusinessDesignCard = ({
  businessDesign,
  index,isMobile
}) => {
  return (
    <div
      className={`justify-between items-center flex flex-col sm:flex-row space-y-8 hover:cursor-pointer sm:w-full ${jarkata.className} `}
    // onClick={() => onChangeDesign(index)}
    >
      <div className="flex flex-col">
        <p className="text-white text-[32px]">{isMobile?businessDesign.mobileHeading:businessDesign.heading}</p>
        <p className="text-white text-sm ">
          {businessDesign.description}
        </p>
        <p className="text-white text-sm mt-[30px]">
          What you get
        </p>
        <p className="text-white text-sm mt-4 sm:mt-6">
          {businessDesign.whatYouget.map((item, index) => (
            <span key={index}>{item} {index !== businessDesign.whatYouget.length - 1 ? <span > | </span> : ""}</span>
          ))}
        </p>
        <div className="gap-4 flex flex-col mt-6 sm:mt-[80px]">
          <p className="text-white text-sm ">Tools we use</p>
          <div className="gap-4 flex flex-wrap">

            {businessDesign.imagesToolsWeUse.map((item, index) => (
              <div className="p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-base" key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <Image src={businessDesign.cardImage} width={250} height={300} alt="discover" className="w-[50%] h-[100%] min-h-[250px] object-contian" />
    </div>
  );
};

const BusinessDesignCards = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="flex flex-col sm:w-full w-screen">
      <div
        className="flex flex-row gap-10 sm:px-20 px-5 sm:mb-0 mb-5 overflow-x-auto scrollbar-hidden"
      >
        {businessDesigns.map((businessDesign, index) => (
          <div
            className="flex justify-center  min-w-[80%] sm:w-auto"
            key={index}
          >
            <BusinessDesignCard
              businessDesign={businessDesign}
              index={index}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>
      <div className="sm:px-20 px-5 order-3 sm:pb-20 pb-5 flex flex-col">
        <div className="w-full rounded-[20px] h-[5px] bg-[#FFFFFF1A] my-16">
          <div className="w-20 sm:w-[310px] bg-[#FFEA5A] h-[5px] rounded-[20px]" />
        </div>
        <Faq />
        <LetsChat />
      </div>
    </div>
  );
};

export default BusinessDesignCards;
