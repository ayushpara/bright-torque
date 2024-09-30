import { Button } from "antd";
import Image from "next/image";
import arrowIcon from "../../static/icons/arrow.svg";

const JoinForces = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col sm:space-y-10 space-y-5 ">
        <div className="sm:w-[84px] sm:h-[84px] h-[32px] w-[32px] relative">
          <Image
            src={arrowIcon}
            alt="arrow"
            className="object-cover w-full h-full absolute"
          />
        </div>
        <div className="sm:px-20">
          <p className="text-green-3 sm:text-[44px] text-base sm:leading-[58px] text-center">
            We collaborate with companies committed to meeting genuine human
            needs. By utilizing our comprehensive digital capabilities, we craft
            brands, experiences, and products that enhance the lives of millions
            every day.
          </p>
        </div>
        <Button className="flex min-h-[37px]" type="primary" style={{borderRadius:48}}>
          Let's Chat
        </Button>
      </div>
    </div>
  );
};

export default JoinForces;
