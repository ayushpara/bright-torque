"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logoImage from "../../static/images/logo.png";
import { headerButtons } from "@/data";
import { HOME } from "@/contants/routes";

const HeaderButton = ({ headerButton, pathname, router }) => {
  

  return (
    <div
      onClick={() => router.push(headerButton.redirect)}
      className={`${
        headerButton.redirect === pathname ? "bg-secondary" : "bg-white"
      }  h-[44px] py-1 px-6 rounded-3xl items-center justify-center flex hover:cursor-pointer`}
    >
      <p
        className={`${
          headerButton.redirect === pathname ? "text-white" : "text-black-1"
        } text-xl`}
      >
        {headerButton.name}
      </p>
    </div>
  );
};

const HeaderLayout = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className=" bg-primary sm:h-[95px] h-[71px] w-full lg:px-[120px] sm:px-[70px] px-5 header-layout">
      <div className="flex flex-row justify-between h-full items-center">
        <div className="flex items-center justify-center hover:cursor-pointer">
          <div className="relative w-[162px] h-[24px] ">
          <Image src={logoImage} alt="logo" onClick={()=>router.push(HOME)} className="object-cover w-full h-full absolute" />
          </div >
        </div>

        <div className="h-[68px] bg-white w-[579px] rounded-[1440px] sm:flex flex-row items-center px-5 justify-between hidden ">
          {headerButtons.map((headerButton, index) => (
            <HeaderButton
              headerButton={headerButton}
              index={index}
              pathname={pathname}
              router={router}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
