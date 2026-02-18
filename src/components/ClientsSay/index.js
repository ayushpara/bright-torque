import React from 'react'
import TypingDots from '../TypingDots'

const ClientSay = () => {
  return (
    <div>
        <div className='rounded-full flex gap-2 items-center w-auto bg-primary p-4 max-w-[270px] mb-5'>
            <p className='text-sm text-black-3'>several people are writing</p><TypingDots />
        </div>
    </div>
  )
}

export default ClientSay