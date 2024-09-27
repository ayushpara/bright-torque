"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { businessDesigns } from "@/utilities/helpers";
import { scrollContainer } from "@/utilities/helpers";
import LetsChat from "../LetsChat";

const BusinessDesignCard = ({
  businessDesign,
  index,
  selectedDesign,
  onChangeDesign,
}) => {
  return (
    <div
      className=" justify-between flex flex-col space-y-8 hover:cursor-pointer w-full "
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

const BusinessDesignCards = () => {
  const [selectedDesign, setSelectedDesign] = useState(0);
  const images = businessDesigns.flatMap((item) => item.images);

  const containerRef = useRef(null);

  const getImageSize = (index) => {
    const imagePosition = index + 1;
    if (imagePosition % 3 === 1) return "w-[132px] h-[132px]";
    if (imagePosition % 3 === 2)
      return "sm:w-[295px] sm:h-[295px] w-[187px] h-[187px] item-center flex justify-center ";
    if (imagePosition % 3 === 0) return "w-[185px] h-[185px]";
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
    if (val > selectedDesign) {
      scrollContainer(500, containerRef);
    } else {
      scrollContainer(-500, containerRef);
    }
    setSelectedDesign(val);
  };

  return (
    <div className=" flex flex-col sm:w-full w-screen">
      <div className="order-2 sm:order-1 grid sm:grid-cols-4 gap-10 sm:px-20 px-5 sm:mbo-0 mb-5 ">
        {businessDesigns.map((businessDesign, index) => (
          <BusinessDesignCard
            businessDesign={businessDesign}
            index={index}
            onChangeDesign={onChangeDesign}
            selectedDesign={selectedDesign}
          />
        ))}
      </div>

      <div className=" order-1 sm:order-2 sm:py-20 py-5">
        <div
          className="scrollbar-hidden flex sm:space-x-7 space-x-7 overflow-x-auto sm:h-[316px] h-[330px] pl-5 relative "
          ref={containerRef}
        >
          {images.map((image, index) => {
            return (
              <div className={`${getImageContainerStyles(index)} `}>
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
            );
          })}
        </div>
      </div>
      <div className="sm:px-20 px-5 order-3 sm:pb-20 pb-5">
        <LetsChat/>
        </div>
    </div>
  );
};

export default BusinessDesignCards;
