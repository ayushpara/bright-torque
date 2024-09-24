import Image from "next/image";
import { Button } from "antd";
import arrowIcon from "../../static/icons/arrow.svg";
import startupIcon from "../../static/icons/startup.svg";
import establishedIcon from "../../static/icons/established.svg";
import enterpriseIcon from "../../static/icons/enterprise.svg";

const BusinessPartners = () => {
  const partners = [
    {
      image: startupIcon,
      name: "Startup",
    },
    {
      image: establishedIcon,
      name: "Established",
    },
    {
      image: enterpriseIcon,
      name: "Enterprise",
    },
  ];
  return (
    <div className="bg-white ">
      <div className="p-5 sm:px-[120px] sm:py-[80px]">
        <div className="flex items-center justify-center flex-col space-y-10 ">
          <div className="sm:w-[84px] sm:h-[84px] relative">
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
          <Button type="primary">Let's Chat</Button>
        </div>
      </div>
      <div className="p-5 sm:px-[40px] sm:py-[80px]">
        <div className="border rounded-xl border-primary grid sm:grid-cols-2 sm:p-10 p-5 sm:gap-20 gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-black-3 sm:text-[64px] text-[32px] sm:leading-[84px] leading-[36px]">
                Buddies & <br /> Business Partners
              </p>
            </div>
            <div className="flex flex-row sm:space-x-16 sm:justify-start justify-between sm:mt-0 mt-8">
              {partners.map((partner) => (
                <div className="flex flex-col space-y-2 items-start w-fit">
                  <div className="relative sm:w-[104px] w-[52px] sm:h-[104px] h-[52px]">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      className="object-cover absolute w-full h-full"
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center w-full">
                  <p className="text-sm text-secondary items-center flex">
                    {partner.name}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary sm:h-[620px] h-[320px] w-full rounded-[40px]">

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
