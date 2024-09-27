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
    <div className={`sm:py-[80px] sm:px-[120px] p-5 ${jarkata.className}`}>
      <div>
        <p className="text-[#001325F2] font-medium text-[44px] leading-[44px] ">
          Look at the projects we’ve delivered !
        </p>
        <p className="text-[#001325A3] text-xl pt-5">
          We partner with SaaS and tech companies globally and count industry{" "}
          <br />
          heavyweights among our clients. In 2023 alone, we helped our clients{" "}
          <br />
          raise over 8MN USD by building user-centric and visually stunning{" "}
          <br />
          products.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-20 gap-10 pt-20">
        {projects.map((project) => (
          <div className="sm:space-y-3 space-y-2">
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
            <p className="sm:text-base text-[9px] sm:leading-[27px] text-black-3">
              {project.description}
            </p>
            <div className="flex flex-row sm:space-x-5 space-x-3">
                {project.tags.map(tag=>
                    <div className="bg-[#F8FBFF] sm:h-[40px] h-[23px] sm:px-5 px-3 flex items-center justify-center rounded-[28px]">
                        <p className=" sm:text-xs text-[11px] text-[#032825] ">{tag}</p>    
                    </div>
                )}
                </div>
          </div>
        ))}
      </div>
      <div className="sm:py-20 py-5">
        <JoinForces/>
      </div>
     
    </div>
  );
};

export default Projects;
