import AboutBanner from "@/components/AboutBanner"
import Capabilities from "@/components/Capabilities"
import JoinForces from "@/components/JoinForces"
import HightLights from "@/components/Highlights"

const About=()=>{
    return(
        <div className="w-full">
            <AboutBanner/>
            <Capabilities />
            <div className="sm:py-[70px] lg:px-[120px] sm:px-[70px] p-5  pb-16" >
            <JoinForces/>
            </div>
            <HightLights/>
        </div>
    )
}

export default About