import Image from "next/image";
import startupIcon from "../../static/icons/startup.svg";
import establishedIcon from "../../static/icons/established.svg";
import enterpriseIcon from "../../static/icons/enterprise.svg";
import PartnerImage from "../../static/images/partner_section.png";
import JoinForces from "../JoinForces";


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
      <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-[80px]">
      <JoinForces />
      </div>
      
      <div className="p-5 sm:px-[40px] sm:py-[80px]">
        <div className="border sm:rounded-[48px] rounded-[24px] border-primary grid sm:grid-cols-2 sm:p-10 p-5 sm:gap-20 gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-black-3 sm:text-[64px] text-[32px] sm:leading-[84px] leading-[36px]">
                Buddies & <br /> Business Partners
              </p>
            </div>
            <div className="flex flex-row sm:space-x-16 sm:justify-start justify-between sm:mt-0 mt-8">
              {partners.map((partner, index) => (
                <div className="flex flex-col space-y-2 items-start w-fit" key={index}>
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

          <div className="bg-primary sm:h-[620px] h-[320px] w-full rounded-[24px] sm:rounded-[40px]">
            <Image
              src={PartnerImage}
              alt="Our Partners"
              className="object-cover w-full h-full rounded-[24px] sm:rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
