import { Plus_Jakarta_Sans } from "next/font/google";
import { projects } from "@/data";
import Image from "next/image";
import JoinForces from "../JoinForces";

const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <>
    <div className={`sm:py-[80px] lg:px-[120px] sm:px-[70px] p-5 ${jarkata.className}`}>
      <div>
        <p className="text-[#001325F2] font-medium text-[44px] leading-[44px] ">
          Look at the projects we’ve delivered !
        </p>
        <p className="text-[#001325A3] text-xl pt-5">
        We collaborate with SaaS and tech companies worldwide, including industry leaders.
          <br />
          In 2023 alone, we supported our clients in securing significant funding by creating user-centric, visually striking products.
         
         
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:gap-20 gap-10 pt-20">
        {projects.map((project, index) => (
          <div className="sm:space-y-3 space-y-2" key={index}>
            <div className="relative sm:h-[356px] h-[196px] w-full">
              <Image
                src={project.image}
                alt="project"
                className="absolute w-full h-full object-cover rounded-[12px] sm:rounded-[20px]"
              />
            </div>
            <p className="sm:text-[32px] text-lg sm:leading-[43px] text-black-3">
              {project.heading}
            </p>
            <p className="sm:text-base text-[14px] sm:leading-[27px] text-black-3">
              {project.description}
            </p>
            <div className="flex flex-row sm:space-x-5 space-x-3">
                {project.tags.map((tag, index)=>
                    <div className="bg-[#F8FBFF] sm:h-[40px] h-[23px] sm:px-5 px-3 flex items-center justify-center rounded-[28px]" key={index}>
                        <p className=" sm:text-xs text-[11px] text-[#032825] ">{tag}</p>    
                    </div>
                )}
                </div>
          </div>
        ))}
      </div>
  
     
    </div>
    <div className="px-5 pb-5 lg:px-[120px] sm:px-[70px] sm:pb-[80px]">
      <JoinForces />
      </div>
    </>
  );
};

export default Projects;
