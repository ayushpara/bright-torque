import HomeBanner from "@/components/HomeBanner";
import BusinessPartners from "@/components/BusinessPartners";
import DesignService from "@/components/DesignService";
import HelpBusiness from "@/components/HelpBusiness";

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
