import Image from "next/image";
import beyondStarIcon from "../../static/icons/beyondStar.svg";
import youFirstIcon from "../../static/icons/youFirst.svg";
import cuttingEdgeIcon from "../../static/icons/cuttingEdge.svg";
import hideNothingIcon from "../../static/icons/hideNothing.svg";
import freshAnglesIcon from "../../static/icons/freshAngles.svg";
import { Plus_Jakarta_Sans } from "next/font/google";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const BeyondDesign = () => {
  return (
    <div className={`smlp-0 pt-7 ${jarkata.className}`}>
      <div className="grid sm:grid-cols-2 sm:items-center">
        <div>
          <div className="space-y-5">
            <Image src={beyondStarIcon} alt="beyond design" />
            <p className="text-lg text-black-3">
              Your brand isn’t an aesthetic. It’s a living <br /> organism. We
              help it thrive by bringing a <br /> dynamic perspective and
              collaborative <br />
              expertise to everything we build.
            </p>
          </div>
        </div>
        <div className="sm:py-0 py-5">
          <p className="sm:text-[120px] sm:leading-[150px] leading-[40px] text-[32px] sm:text-right text-black-3 sm:font-normal font-medium ">
            Beyond <br /> Design
          </p>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-3 sm:gap-10 gap-5 sm:pt-20 sm:pb-8 pt-5">
          <div className="bg-[#F6D0DB] rounded-[48px] sm:p-[56px] md:p-[32px] py-10 px-5 justify-between  flex flex-col col-span-1 h-auto gap-[64px] ">
            <div className="relative h-[88px] w-[88px]">
              <Image
                src={youFirstIcon}
                alt="you First"
                className="object-cover absolute w-full h-full"
              />
            </div>
            <div className="space-y-5">
              <p className="text-black-3 sm:text-[40px] text-[32px] leading-[48px]">
                Business First
              </p>
              <p className="text-black-3 text-[17.72px] ">
                You're the reason we exist, period. We prioritize collaboration
                over ego and go the extra mile with a can-do attitude to bring
                your vision to life.
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 w-full ">
            <div className="bg-white rounded-[48px] sm:p-[56px] md:p-[32px] p-10 justify-between  flex flex-col col-span-1 sm:h-[422px] gap-[64px]">
              <div className="relative h-[88px] w-[88px]">
                <Image
                  src={cuttingEdgeIcon}
                  alt="cutting edge"
                  className="object-cover absolute w-full h-full"
                />
              </div>
              <div className="space-y-5">
                <p className="text-black-3 sm:text-[40px] text-[32px] leading-[48px]">
                  Cutting Edge
                </p>
                <p className="text-black-3 text-lg ">
                  We stay ahead by embracing the latest technologies, delivering
                  innovative brand solutions that adapt to future needs.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 sm:mt-10 mt-5">
              <div className="bg-[#B6D5D8] rounded-[48px] sm:p-[56px] md:p-[32px] sm:py-10 py-10 px-5 justify-between flex flex-col col-span-1 min-h-[422px] gap-10">
                <div className="relative h-[88px] w-[88px]">
                  <Image
                    src={hideNothingIcon}
                    alt="hide nothing"
                    className="object-cover absolute w-full h-full"
                  />
                </div>
                <div className="space-y-5">
                  <p className="text-black-3 sm:text-[40px] text-[32px] leading-[48px]">
                    Hide Nothing
                  </p>
                  <p className="text-black-3 text-lg ">
                    For us, transparency isn't just a buzzword—it's our way of
                    working. You'll be behind the scenes with our team, staying
                    in the loop every step of the way.
                  </p>
                </div>
              </div>
              <div className="bg-[#FFE5B6] rounded-[48px] sm:p-[56px] md:p-[32px] sm:py-10 py-10 px-5 justify-between flex flex-col col-span-1 min-h-[422px]">
                <div className="relative h-[88px] w-[88px]">
                  <Image
                    src={freshAnglesIcon}
                    alt="you First"
                    className="object-cover absolute w-full h-full"
                  />
                </div>
                <div className="space-y-5">
                  <p className="text-black-3 sm:text-[40px] text-[32px] leading-[48px]">
                    Fresh Angles
                  </p>
                  <p className="text-black-3 text-lg ">
                    Explore, adapt, and stay curious. These are the values our
                    team lives by, designing to inspire and build a more
                    engaging & better world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeyondDesign;
