'use client'

import { Collapse } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { accordionItems } from '@/data'
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import ClientSay from '../ClientsSay'

const jarkata = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
});

const syne = Syne({ subsets: ["latin"] });
const HomeAccordion = () => {
    const [activeKey, setActiveKey] = useState()

    return (
        <div className={`${jarkata.className}`}>
            <div className='flex flex-col md:flex-row sm:px-[70px] p-5'>
                <div className='flex-1 flex items-center'>
                    <div className='max-w-[330px]'>
                        <h3 className={`text-[44px] leading-[54px] ${syne.className} text-black-3`}>
                            Core AI Capabilities
                        </h3>
                        <p className={`${jarkata.className} font-normal text-black-3`}>
                            Leveraging large language models and generative design patterns to build software that thinks.
                        </p>
                    </div>
                </div>
                <div
                    onMouseLeave={() => setActiveKey(undefined)}
                    className={`${syne.className} flex-1 mt-8 sm:mt-10`}
                >
                    <Collapse
                        className='bg-white border-[#E6F4F4] accordion'
                        id="home-accordion"
                        activeKey={activeKey}
                        expandIconPlacement="end"
                        bordered={false}
                        expandIcon={() => null}
                        styles={{
                            header: {
                                padding: 0
                            }
                        }}
                        items={accordionItems.map((item) => ({
                            ...item,
                            label: (
                                <div
                                    onMouseEnter={() => setActiveKey(item.key)}
                                    className={`cursor-pointer font-medium text-2xl leading-[40px] sm:text-[2rem] flex items-center justify-between py-4 pl-0 sm:pl-0 ${syne.className}`}
                                >
                                    <span>
                                        {item.label}
                                    </span>     <div className='text-xl py-2 px-3 rounded-full border border-1 border-[#E6F4F4]'><PlusOutlined
                                        style={{
                                            transform: activeKey === item.key ? "rotate(45deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease"
                                        }}
                                    /></div>
                                </div>
                            ),
                        }))}
                    />
                </div>
            </div>
            <style global jsx>
                {`
                    .accordion .ant-collapse-item .ant-collapse-header{
                   padding: 0 !important;
                    padding:0;
                    }
                    .accordion .ant-collapse-item{
                    border-color:#E6F4F4;
                    }
                       .accordion .ant-collapse-content, .accordion .ant-collapse-content-box{
                    padding-left:0 !important;
                    }
                    `}
            </style>
            <div className="sm:px-[70px] p-0 py-5 block">
                <ClientSay />
                <div>
                    <h3 className={`text-[2rem] leading-[40px] sm:text-[44px] sm:leading-[64px] text-black-3 ${syne.className}`}>
                        Our Clients Can’t Say Enough About Us...
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default HomeAccordion
