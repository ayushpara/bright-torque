"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logoImage from "../../static/images/logo.png";
import { headerButtons } from "@/data";

const HeaderButton = ({ headerButton, index, pathname }) => {
  const router = useRouter();

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

  console.log("check path naem-->", pathname);

  return (
    <div className=" bg-primary sm:h-[95px] h-[71px] w-full sm:px-[120px] px-5 header-layout">
      <div className="flex flex-row justify-between h-full items-center">
        <div className="flex items-center justify-center">
          <Image src={logoImage} alt="logo" />
        </div>

        <div className="h-[68px] bg-white w-[479px] rounded-[1440px] sm:flex flex-row items-center px-5 justify-between hidden ">
          {headerButtons.map((headerButton, index) => (
            <HeaderButton
              headerButton={headerButton}
              index={index}
              pathname={pathname}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
