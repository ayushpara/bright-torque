import React from 'react'
import { Collapse } from 'antd';
import { faqs } from '@/data';
const Faq = () => {
  return (
    <div className='my-10 order-3 sm:order-2'>
      <h3 className='text-white text-[3rem] leading-[52px] mb-10'>FAQ</h3>
      <div className='border border-1 text-white border-[#3BADE266] rounded-[10px] p-5'>
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