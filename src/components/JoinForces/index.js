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
              We join forces with companies dedicated to addressing real human
              needs. Leveraging our full- cycle digital capabilities, we shape
              brands, experiences, and products that enrich the lives of
              millions every single day.
            </p>
          </div>
          <Button className="flex min-h-[37px]" type="primary">Let's Chat</Button>
        </div>
    </div>
  );
};

export default JoinForces;
