import Image from "next/image";
import beyondStarIcon from "../../static/icons/beyondStar.svg";
import youFirstIcon from "../../static/icons/youFirst.svg";
import cuttingEdgeIcon from "../../static/icons/cuttingEdge.svg";
import hideNothingIcon from "../../static/icons/hideNothing.svg";
import freshAnglesIcon from "../../static/icons/freshAngles.svg";

const BeyondDesign = () => {
  return (
    <div className="smlp-0 pt-7">
      <div className="grid sm:grid-cols-2">
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
          <p className="sm:text-[120px] sm:leading-[150px] leading-[40px] text-[32px] sm:text-right text-black-3">
            Beyond <br /> Design
          </p>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-3 sm:gap-10 gap-5 sm:pt-20 sm:pb-8 pt-5">
          <div className="bg-[#F6D0DB] rounded-[48px] sm:p-[56px] py-10 px-5 justify-between  flex flex-col col-span-1 h-auto gap-[64px] ">
            <div className="relative h-[88px] w-[88px]">
              <Image
                src={youFirstIcon}
                alt="you First"
                className="object-cover absolute w-full h-full"
              />
            </div>
            <div className="space-y-5">
              <p className="text-black-3 text-[40px] leading-[48px]">
                You First
              </p>
              <p className="text-black-3 text-[17.72px] ">
                You’re the reason we’re here, full stop. We value collaboration
                above ego and tackle the extra mile to achieve your vision with
                a can-do attitude.
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 w-full ">
            <div className="bg-white rounded-[48px] sm:p-[56px] p-10 justify-between  flex flex-col col-span-1 sm:h-[422px] gap-[64px]">
            <div className="relative h-[88px] w-[88px]">
              <Image src={cuttingEdgeIcon} alt="cutting edge" className="object-cover absolute w-full h-full" />
              
              </div>
              <div className="space-y-5">
                <p className="text-black-3 text-[40px] leading-[48px]">
                  Cutting Edge
                </p>
                <p className="text-black-3 text-lg ">
                  Proactive about adopting the latest technologies, we deliver
                  forward-thinking brand solutions that evolve to serve future
                  needs.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 sm:mt-10 mt-5">
              <div className="bg-[#B6D5D8] rounded-[48px] sm:p-[56px] p-10 justify-between  flex flex-col col-span-1 sm:h-[422px] gap-[64px]">
              <div className="relative h-[88px] w-[88px]">
                <Image src={hideNothingIcon} alt="hide nothing" className="object-cover absolute w-full h-full" />
                </div>
                <div className="space-y-5">
                  <p className="text-black-3 text-[40px] leading-[48px]">
                    Hide Nothing
                  </p>
                  <p className="text-black-3 text-lg ">
                    “Transparency” isn’t a buzzword for us — it’s how we roll.
                    You’re behind-the-scenes with our team, following our every
                    move.
                  </p>
                </div>
              </div>
              <div className="bg-[#FFE5B6] rounded-[48px] sm:p-[56px] sm:py-10 py-10 px-5 justify-between flex flex-col col-span-1 h-[422px]">
              <div className="relative h-[88px] w-[88px]">
                <Image src={freshAnglesIcon} alt="you First" className="object-cover absolute w-full h-full" />
                </div>
                <div className="space-y-5">
                  <p className="text-black-3 text-[40px] leading-[48px]">
                    Fresh Angles
                  </p>
                  <p className="text-black-3 text-lg ">
                    Explore. Adapt. Stay curious. Our team lives by these
                    values, designing to inspire and create a better, more
                    interesting world.
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
