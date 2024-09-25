import Image from "next/image";
import arrowIcon from "../../static/icons/viewArrow.svg";

import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});


const LetsChat = () => {
  return (
    <div className={`bg-[#B6D5D8] sm:py-[64px] sm:px-[80px] p-5 w-full flex flex-col rounded-[48px] ${jarkata.className}`}>
      <div className="grid sm:flex flex-col sm:flex-row sm:grid-cols-1 sm:justify-between sm:space-y-0 space-y-5 justify-center items-center">
        <div className="space-y-5">
          <p className="text-green-1 sm:text-[160px] text-[64px] leading-[64px] sm:leading-[144px]">
            Let's Chat
          </p>
          <p className="text-black-3 sm:text-[24px] text-base sm:leading-[33px]">
            Want to grab a virtual coffee and talk about your project?
          </p>
        </div>
        <div className="sm:w-auto w-full flex sm:justify-end justify-center">
        <div className="bg-white rounded-full sm:w-[204px] sm:h-[204px] w-[140px] h-[140px] items-center flex justify-center ">
          <div className="relative sm:w-[130px] sm:h-[130px] w-[76px] h-[76px]">
            <Image
              src={arrowIcon}
              alt="let's chat"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LetsChat;
