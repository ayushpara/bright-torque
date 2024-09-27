
import ContactBanner from "@/components/ContactBanner"
import LetsChat from "@/components/LetsChat"
import JoinForces from "@/components/JoinForces"
import BeyondDesign from "@/components/BeyondDesign"

const Contact=()=>{
    return(
        <div className="w-full">
            <ContactBanner />
            <div className="p-5 sm:px-[70px] sm:py-16">
            <JoinForces/>
            </div>
            <div className="p-5 sm:px-[70px] sm:py-16 bg-primary">
                <BeyondDesign/>
                </div>
                <div className="px-5 sm:px-[70px] sm:pb-[70px] pb-5 bg-primary">
                <LetsChat/>
                </div>

        </div>
    )
}

export default Contact