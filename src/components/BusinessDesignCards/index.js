"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { businessDesigns } from "@/data";
import { scrollContainer } from "@/utilities/helpers";
import LetsChat from "../LetsChat";
import useMediaQuery from "../useMedia";

const BusinessDesignCard = ({
  businessDesign,
  index,
  selectedDesign,
  onChangeDesign,
}) => {
  return (
    <div
      className=" justify-between flex flex-col space-y-8 hover:cursor-pointer sm:w-full "
      onClick={() => onChangeDesign(index)}
    >
      <div className="space-y-3 flex flex-col">
        <p className="text-white text-[32px]">{businessDesign.heading}</p>
        <p className="text-white text-sm break-words break-all">
          {businessDesign.description}
        </p>
      </div>
      <div
        className={`w-full h-[2px]  ${
          selectedDesign === index ? "bg-[#EDB757]" : "bg-white"
        } `}
      />
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
  const [selectedDesign, setSelectedDesign] = useState(0);
  const images = businessDesigns.flatMap((item) => item.images);

  const containerRef = useRef(null);
  const businessContainerRef = useRef(null);

  const getImageSize = (index) => {
    const imagePosition = index + 1;
    if (imagePosition % 3 === 1) return "min-w-[132px] min-h-[132px]";
    if (imagePosition % 3 === 2)
      return "sm:w-[295px] sm:h-[295px] min-w-[187px] min-h-[187px] item-center flex justify-center ";
    if (imagePosition % 3 === 0) return "min-w-[185px] min-h-[185px]";
  };

  const getImageContainerStyles = (index) => {
    const imagePosition = index + 1;
    const startIndex = selectedDesign * 3;
    const endIndex = startIndex + 3;
    if (imagePosition % 3 === 1)
      return `flex items-start ${
        startIndex <= index && index < endIndex ? "" : "opacity-45"
      }`;
    if (imagePosition % 3 === 2)
      return `flex sm:items-center ${
        startIndex <= index && index < endIndex ? "" : "opacity-45"
      }`;
    if (imagePosition % 3 === 0)
      return `flex sm:items-end sm:relative absolute bottom-0 left-0 ${
        startIndex <= index && index < endIndex ? "" : "opacity-45"
      }`;
  };

  const onChangeDesign = (val) => {
    if (isMobile) {
      if (val > selectedDesign) {
        scrollContainer(isMobile ? 400 : 500, containerRef);
        isMobile && scrollContainer(300, businessContainerRef);
      } else {
        scrollContainer(isMobile ? -400 : -500, containerRef);
        isMobile && scrollContainer(-300, businessContainerRef);
      }
      setSelectedDesign(val);
      return;
    }

    const container = containerRef.current;
    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    if (val === 0) {
      scrollContainer(-container.scrollLeft, containerRef);
    } else if (val === 3) {
      scrollContainer(totalScrollWidth, containerRef);
    } else {
      const scrollPosition = (totalScrollWidth / 4) * (val + 1);
      scrollContainer(scrollPosition - container.scrollLeft, containerRef);
    }

    setSelectedDesign(val);
  };

  return (
    <div className=" flex flex-col sm:w-full w-screen">
      <div
        ref={businessContainerRef}
        className="order-2 sm:order-1 sm:grid sm:grid-cols-4 flex flex-row gap-10 sm:px-20 px-5 sm:mb-0 mb-5 overflow-x-auto scrollbar-hidden "
      >
        {businessDesigns.map((businessDesign, index) => (
          <div
            className="flex justify-center  min-w-[75%] sm:w-auto"
            key={index}
          >
            <BusinessDesignCard
              businessDesign={businessDesign}
              index={index}
              onChangeDesign={onChangeDesign}
              selectedDesign={selectedDesign}
            />
          </div>
        ))}
      </div>

      <div className=" order-1 sm:order-2 sm:py-20 py-5">
        {!isMobile ? (
          <div
            className="scrollbar-hidden flex sm:space-x-7 space-x-7 overflow-x-auto sm:h-[316px] h-[330px] pl-5 relative w-full"
            ref={containerRef}
          >
            {images.map((image, index) => {
              return (
                <div className="relative">
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
              <MobileImageConainer businessDesign={businessDesign} />
            ))}
          </div>
        )}
      </div>
      <div className="sm:px-20 px-5 order-3 sm:pb-20 pb-5">
        <LetsChat />
      </div>
    </div>
  );
};

export default BusinessDesignCards;
