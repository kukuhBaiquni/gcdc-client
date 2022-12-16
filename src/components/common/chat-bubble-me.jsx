import React from 'react'

export default function ChatBubbleMe() {
  return (
    <div className='w-full flex justify-end text-sm'>
      <div class='flex items-center flex-row-reverse mb-2 lg:w-[200px] w-[50%] text-white'>
        <div class='flex-1 bg-primary p-2 rounded-lg mb-2 relative'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <p className='text-xs font-titillium float-right mt-2 text-gray-200'>20:18</p>
          <div class='absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-3 h-3 bg-primary' />
        </div>
      </div>
    </div>
  )
}
