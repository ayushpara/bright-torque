import { Plus_Jakarta_Sans } from "next/font/google";
import BeyondDesign from "../BeyondDesign";
import LetsChat from "../LetsChat";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const DesignService = () => {
  const design1 = ["Branding", "Print", "Stratrgy", "Logos", "Consulting"];
  const design2 = [
    "Web Design",
    "Illustration",
    "Copywriting",
    "Developement",
    "UI/UX",
  ];
  const design3 = ["Product", "Apps", "Icons", "Design Systems", "Prototyping"];
  return (
    <div className={`bg-secondary ${jarkata.className} `}>
      <div className="bg-primary sm:px-[70px] p-5 rounded-b-[64px] ">
        <div className="bg-white sm:rounded-[48px] rounded-[24px] sm:p-10 sm:py-28 p-5 py-10 ">
          <div className="grid sm:grid-cols-7 sm:gap-10">
            <div className="col-span-3">
              <p className="text-black-3 sm:text-[64px] text-[32px] sm:leading-[76px] leading-[44px] hidden sm:block ">
                Bright torque's Design <br />
                Service
              </p>
              <p className="text-black-3 sm:text-[64px] text-[32px] sm:leading-[76px] leading-[44px] sm:hidden ">
                Bright torque's Design
                Service
              </p>
            </div>
            <div className="col-span-4 grid sm:grid-cols-3 sm:items-center mt-10">
              <div className="flex flex-col space-y-2">
                {design1.map((design) => (
                  <p className="text-lg text-black-3">{design}</p>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {design2.map((design) => (
                  <p className="text-lg text-black-3">{design}</p>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {design3.map((design) => (
                  <p className="text-lg text-black-3">{design}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-20 pt-5">
        <BeyondDesign/>
        </div>
      </div>
    </div>
  );
};

export default DesignService;
