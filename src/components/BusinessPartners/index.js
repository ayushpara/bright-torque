import Image from "next/image";
import startupIcon from "../../static/icons/startup.svg";
import establishedIcon from "../../static/icons/established.svg";
import enterpriseIcon from "../../static/icons/enterprise.svg";
import PartnerImage from "../../static/images/partner_section.png";
import JoinForces from "../JoinForces";
import HomeAccordion from "../HomeAccordion";


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
        <HomeAccordion />
      </div>
    </div>
  );
};

export default BusinessPartners;
