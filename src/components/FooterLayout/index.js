import Image from "next/image";
import coloredLogoImage from "../../static/images/coloredLogo.png";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const FooterLayout = () => {
  return (
    <div
      className={`relative sm:py-20 p-5 bg-green-1 flex flex-col items-center justify-center w-full ${jarkata.className}`}
    >
      <div className="flex sm:flex-row flex-col sm:gap-20 gap-5 sm:mt-0 mt-5 items-center justify-center ">
        <p className="sm:text-[24px] text-base text-white items-center  flex">
          more yummy
        </p>
        <p className="sm:text-[24px] text-base text-white items-center flex">
          you first
        </p>
        <p className="sm:text-[24px] text-base text-white items-center flex">
          cutting edge
        </p>
        <p className="sm:text-[24px] text-base text-white items-center flex">
          hide nothing
        </p>
        <p className="sm:text-[24px] text-base text-white items-center flex">
          more yummy
        </p>
      </div>
      <div className="absolute top-[-35px]">
        <div className="relative w-[72px] h-[72px]">
          <Image
            src={coloredLogoImage}
            alt="logo"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
