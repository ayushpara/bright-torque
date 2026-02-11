import React from 'react'
import TypingDots from '../TypingDots'

const ClientSay = () => {
  return (
    <div>
        <div className='rounded-full flex gap-2 items-center w-auto bg-primary p-4 max-w-[240px]'>
            <p className='text-sm'>several people are typing</p><TypingDots />
        </div>
    </div>
  )
}

export default ClientSay