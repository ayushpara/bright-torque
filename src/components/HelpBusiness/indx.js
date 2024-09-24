
import Image from "next/image"
import businessStarIcon from "../../static/icons/businessStar.svg"

const HelpBusiness=()=>{
    return(
        <div className="bg-secondary">
            <div className="p-5 sm:px-[120px] sm:py-[136px]">
            <div className="flex flex-row justify-between">
                <Image src={businessStarIcon} alt="help business" />
                <p>Process that help business  <br></br>
                design products that scale</p>
                <Image src={businessStarIcon} alt="help business" />
            </div>
            </div>
        </div>
    )
}

export default HelpBusiness