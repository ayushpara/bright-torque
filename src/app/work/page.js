import WorkBanner from "@/components/WorkBanner"
import Projects from "@/components/Projects"
import BeyondDesign from "@/components/BeyondDesign"
import LetsChat from "@/components/LetsChat"

const Work=()=>{
    return(
        <div>
            <WorkBanner />
            <Projects/>
            <div className="sm:p-[70px] p-5 bg-primary" >
            <BeyondDesign/>
            </div>
            <div className="sm:p-[70px] p-5 bg-primary  pb-16" >
            <LetsChat/>
            </div>
        </div>
    )
}

export default Work