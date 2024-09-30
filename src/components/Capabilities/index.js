import { strategies, designs } from "@/data";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Capabilities = () => {
  return (
    <div className="bg-white">
      <div className="sm:px-[120px] sm:py-[60px] p-5 sticky sm:top-20 top-10 z-10 bg-white" key="1">
        <p className="text-[#032825] sm:text-[54px] text-[32px] leading-[84px] font-semibold">
          Our Capabilities
        </p>
        <p className="text-[#032825] text-xl">
          We believe in mastery, not mediocrity. Our focus is always on sharp,
          exceptional and 'whoa' kinda results.
        </p>
      </div>
      <div key="2" className="sm:px-[120px] sm:py-[60px] p-5">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[#001325F2] text-[44px]">strategy</p>
          <div className="flex justify-end">
            <p className="text-[#001325F2] sm:text-[24px]">1/2</p>
          </div>
        </div>
        <div className="h-[1px] bg-primary w-full mt-5" />
        <div className="grid sm:grid-cols-2 sm:gap-20 gap-10 mt-10 w-full">
          {strategies.map((strategy) => (
            <div className="w-full" key={strategy.heading}>
              <p className="text-[#001325D6] text-[24px]">{strategy.heading}</p>
              <p className={`text-sm text-[#001325D6] sm:w-3/4 ${jarkata.className}`}>{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div key="3" className="sm:px-[120px] sm:py-[60px] p-5 bg-primary">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[#001325F2] text-[44px]">Design</p>
          <div className="flex justify-end">
            <p className="text-[#001325F2] sm:text-[24px]">2/2</p>
          </div>
        </div>
        <div className="h-[1px] bg-primary w-full mt-5" />
        <div className="grid sm:grid-cols-2 sm:gap-20 gap-10 sm:mt-10 mt-5">
          {designs.map((design) => (
            <div key={design.heading}>
              <p className="text-[#001325D6] text-[24px]">{design.heading}</p>
              <p className={`text-sm text-[#001325D6] sm:w-3/4 ${jarkata.className}`}>{design.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
