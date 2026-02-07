"use client"
import React from 'react';
import { InstagramFilled, LinkedinFilled, XOutlined, YoutubeFilled } from '@ant-design/icons';
import footerLogo from "../../static/images/footerlogo.svg";
import Arrow from "../../static/icons/thickArrow.svg";
import Image from 'next/image';
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import Link from 'next/link';
import { headerButtons } from '@/data';
import { useRouter } from 'next/navigation';
import { CONTACT, HOME } from '@/contants/routes';
const inter = Syne({ subsets: ["latin"] });
const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
    const date = new Date()
    const router = useRouter()
    return (
        <div className={`p-5 lg:px-[120px] sm:px-[70px] sm:py-16 ${inter.className} bg-[#033941] text-white`}>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center justify-center hover:cursor-pointer">
                    <div>
                        <div className="relative w-[162px] h-[24px]">
                            <Image src={footerLogo} alt="logo" onClick={() => router.push(HOME)} className="object-cover w-full h-full absolute" />
                        </div>
                        <p className='text-white mt-6 text-base sm:text-xl leading-8'>Design Experts.  Helping Mission-Focused  Zero-to-One Startups</p>
                    </div>
                </div>
                <div className='w-full sm:w-auto mt-6 sm:mt-0'>
                    <button  onClick={()=> router.push(CONTACT,{ scroll: true })} className='text-green-1 bg-secondary w-full px-6 py-6 h-9 rounded-full text-center flex items-center justify-center bg-white text-base font-semibold leading-normal mt-2 w-full sm:w-[183px]'>
                        Chat with us <Image src={Arrow} alt="arrow" width={20} height={20} className='ml-2' />
                    </button>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8'>
                <div className={`flex flex-col sm:flex-row ${jarkata.className} gap-6`}>
                    {headerButtons.map((headerButton, index) => (
                        <Link key={index} href={headerButton.redirect} className='text-xs'>
                            {headerButton.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10'>
                <div>
                    <p className='text-white text-xs'>&copy; {date.getFullYear()} Bright Torque Private Limited. All rights reserved.</p>
                </div>
                <div className='flex flex-row gap-4 w-[183px] item-center justify-around mt-4 sm:mt-0'>
                    <XOutlined />
                    <LinkedinFilled />
                    <YoutubeFilled />
                    <InstagramFilled />
                </div>
            </div>
        </div>
    )
}

export default Footer