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
  index,
}) => {
  return (
    <div
      className={`justify-between items-center flex flex-col sm:flex-row space-y-8 hover:cursor-pointer sm:w-full ${jarkata.className} `}
      // onClick={() => onChangeDesign(index)}
    >
      <div className="flex flex-col">
        <p className="text-white text-[32px]">{businessDesign.heading}</p>
        <p className="text-white text-sm ">
          {businessDesign.description}
        </p>
        <p className="text-white text-sm mt-[30px]">
          What you get
        </p>
        <p className="text-white text-sm ">
          {businessDesign.whatYouget.map((item, index)=>(
            <span key={index}>{item} {index!== businessDesign.whatYouget.length-1?<span > | </span>:""}</span>
          ))}
        </p>
        <div className="gap-4 flex flex-col mt-[80px]">
          <p className="text-white text-sm ">Tools we use</p>
          <div className="gap-4 flex">

          {businessDesign.imagesToolsWeUse.map((item, index)=>(
            <div className="p-4 rounded-full border text-white border-1 border-[#16CCEA] flex items-center justify-center text-base" key={index}>{item}</div>
          ))}
          </div>
        </div>
      </div>
      <Image src={businessDesign.cardImage} width={250} height={300} alt="discover" className="w-[50%] h-[100%]" />
    </div>
  );
};

const MobileImageConainer = ({ businessDesign }) => {
  return (
    <div className="relative min-w-full h-[316px]">
      <Image
        width={132}
        height={132}
        src={businessDesign.images[0]}
        alt="image"
        className=" absolute "
      />
      <Image
        width={187}
        height={187}
        src={businessDesign.images[1]}
        alt="image"
        className="absolute top-0 right-0 "
      />
      <Image
        width={187}
        height={187}
        src={businessDesign.images[2]}
        alt="image"
        className="absolute left-[10%] bottom-0 "
      />
    </div>
  );
};

const BusinessDesignCards = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className=" flex flex-col sm:w-full w-screen">
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
          
            />
          </div>
        ))}
      </div>

      {/* <div className=" order-1 sm:order-2 sm:py-20 py-5">
        {!isMobile ? (
          <div
            className="scrollbar-hidden flex sm:space-x-7 space-x-7 overflow-x-auto sm:h-[316px] h-[330px] pl-5 relative w-full"
            ref={containerRef}
          >
            {images.map((image, index) => {
              return (
                <div className="relative" key={index}>
                  <div className={`${getImageContainerStyles(index)}`}>
                    <div
                      className={`${getImageSize(
                        index
                      )} relative rounded-full w-full flex `}
                    >
                      <Image
                        src={image}
                        alt="image"
                        className="absolute w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            ref={containerRef}
            className="flex flex-row min-w-full overflow-x-auto space-x-3 pl-5 scrollbar-hidden"
          >
            {businessDesigns.map((businessDesign, index) => (
              <MobileImageConainer businessDesign={businessDesign} key={index} />
            ))}
          </div>
        )}
      </div> */}
      <div className="sm:px-20 px-5 order-3 sm:pb-20 pb-5">
      <div className="w-full rounded-[20px] h-[5px] bg-[#FFFFFF1A] my-16">
        <div className="w-[310px] bg-[#FFEA5A] h-[5px] rounded-[20px]" />
      </div>
      <Faq/>
        <LetsChat />
      </div>
    </div>
  );
};

export default BusinessDesignCards;
