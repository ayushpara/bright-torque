import React from 'react'
import { Collapse } from 'antd';
import { faqs } from '@/data';
import { Plus_Jakarta_Sans } from 'next/font/google';
const jarkata = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Faq = () => {
  return (
    <div className={`my-10 order-3 sm:order-2 ${jarkata.className}`}>
      <h3 className='text-white text-[3rem] leading-[52px] mb-10'>FAQ</h3>
      <div className={`border border-1 text-white border-[#3BADE266] rounded-[10px] p-5 ${jarkata.className}`}>
        <Collapse accordion className='bg-transparent border border-1 text-white border-[#3BADE266] rounded-[10px] accordion text-sm faq'
          id="home-accordion" bordered={false} items={faqs}
          expandIcon={() => null}
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