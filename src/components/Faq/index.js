import React, { useState } from 'react'
import { Collapse } from 'antd';
import { faqs } from '@/data';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FiArrowUpRight } from 'react-icons/fi';
const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Faq = () => {
    const [activeKey, setActiveKey] = useState(-1)
    console.log(activeKey, "activekey")
  return (
    <div className={`my-10 order-3 sm:order-2 ${jarkata.className}`}>
      <h3 className='text-white text-[3rem] leading-[52px] mb-10'>FAQ</h3>
      <div className={`border border-1 text-white border-[#3BADE266] rounded-[10px] p-5 ${jarkata.className}`}>
        <Collapse accordion className='bg-transparent border border-1 text-white border-[#3BADE266] rounded-[10px] accordion text-sm faq'
          id="home-accordion" bordered={false} items={faqs.map((item) => ({
                            ...item,
                            label: (
                                <div className={`text-white text-sm py-5 flex gap-4 ${jarkata.className}`} >
                                      <FiArrowUpRight className='text-[#3BADE2]' color='#3BADE2' size={20}  style={{
                                            transform: activeKey === item.key ? "rotate(90deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease"
                                        }} /> <p>What's unique about Nebula?</p></div>
                            ),
                        }))}
          expandIcon={() => null} 
          onChange={(key) => setActiveKey(...key)}
        />
      </div>
      <style global jsx>
        {`
                  
                    .faq .ant-collapse-item{
                    border-color:#BCE5F75C;
                    }
                 
                    `}
      </style>
    </div>
  )
}

export default Faq