import Image from "next/image";
import HomeBanner from "@/components/HomeBanner/indx";
import BusinessPartners from "@/components/BusinessPartners";
import DesignService from "@/components/DesignService";
import HelpBusiness from "@/components/HelpBusiness";
import MobileFooterNavigator from "@/components/MobileFooterNavigator";

export default function Home() {
  return (
    <div className="w-full">
      <HomeBanner />
      <BusinessPartners />
      <DesignService/>
      <HelpBusiness/>
    </div>
  );
}
