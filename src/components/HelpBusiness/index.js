import Image from "next/image";
import businessStarIcon from "../../static/icons/businessStar.svg";
import BusinessDesignCards from "../BusinessDesignCards";

const HelpBusiness = () => {
  return (
    <div className="bg-secondary">
      <div className="p-5 sm:px-[120px] sm:py-[136px]">
        <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-7">
          <div className="relative sm:w-[77px] w-[32px] h-[32px] sm:h-[77px]">
            <Image
              src={businessStarIcon}
              alt="help business"
              className="absolute w-full h-full"
            />
          </div>

          <p className="text-white sm:text-[42px] text-[32px] leading-[36px] sm:leading-[57px] font-semibold sm:text-start text-center">
            Process that help business <br />
            design products that scale
          </p>
          <div className="relative sm:w-[77px] sm:h-[77px]  w-[32px] h-[32px]">
            <Image
              src={businessStarIcon}
              alt="help business"
              className="absolute w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="pb-10">
        <BusinessDesignCards />
      </div>
    </div>
  );
};

export default HelpBusiness;
