import Image from "next/image";
import highlightStarIcon from "../../static/icons/highlightStar.svg";
import { hightlights } from "@/data";
import desktopImage from "../../static/images/desktop.png";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import BeyondDesign from "../BeyondDesign";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const syne = Syne({
  weight:["600"],
  subsets:["latin"]
})
const HightLights = () => {
  return (
    <div className="bg-white">
      <div
        className={`sm:p-[70px] p-5 pb-16 w-full rounded-t-[64px] bg-primary ${jarkata.className}`}
      >
        <div className="sm:mt-0 mt-10">
          <div className=" flex sm:flex-row flex-col justify-between">
            <p className={`sm:text-[48px] text-[24px] leading-[32px] sm:leading-[68px] text-black-3 w-full ${syne.className} font-semibold`}>
              This is what we've <br />
              been up to lately...{" "}
            </p>
            <div className="justify-end flex w-full ">
              <div className="relative sm:w-[120px] sm:h-[120px] w-[45px] h-[45px] ">
                <Image src={highlightStarIcon} alt="highlights" />
              </div>
            </div>
          </div>
          <div className="sm:grid flex flex-col sm:grid-cols-7 sm:mt-20 mt-5 sm:gap-20 gap-5">
            <div className="col-span-4 grid sm:grid-cols-2 md:gap-20 gap-10 h-fit">
              {hightlights.map((highlight, index) => (
                <div className="" key={index}>
                  <p className="text-[#097B85] text-[32px] leading-[40px] font-bold">
                    {highlight.heading}
                  </p>
                  <p className="text-[#000000D6] text-base">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="sm:col-span-3 w-full sm:my-0 my-5 ">
              <div className="md:h-[466px] h-[320px] w-full relative">
                <Image
                  src={desktopImage}
                  alt="desktop"
                  className="absolute w-full object-fill h-full rounded-[20px] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-20 pt-5" >
        <BeyondDesign/>
        </div>
      </div>
    </div>
  );
};

export default HightLights;
