"use client"
import { headerButtons } from "@/data"
import { usePathname, useRouter } from "next/navigation";

export const HeaderButton = ({ headerButton, index, pathname }) => {
    const router = useRouter();
    console.log('chck header footer button->', headerButton, headerButton.redirect === pathname)
    return (
      <div
        onClick={() => router.push(headerButton.redirect)}
        className={`${
          headerButton.redirect === pathname ? "bg-secondary" : "bg-white"
        }  h-[32px] w-fit py-1 px-4 rounded-3xl items-center justify-center flex hover:cursor-pointer`}
      > 
        <p
          className={`${
            headerButton.redirect === pathname ? "text-white" : "text-black-1"
          } text-xs`}
        >
          {headerButton.name}
        </p>
      </div>
    );
  };


const MobileFooterNavigator=()=>{
    const pathname = usePathname();

    return (
        <div className="px-5 py-[10px] bg-primary">
             <div className="h-[50px] bg-white rounded-[1074px] flex flex-row items-center px-3 justify-between ">
          {headerButtons.map((headerButton, index) => (
            <HeaderButton
              headerButton={headerButton}
              index={index}
              pathname={pathname}
            />
          ))}
        </div>
        </div>
    )
}

export default MobileFooterNavigator