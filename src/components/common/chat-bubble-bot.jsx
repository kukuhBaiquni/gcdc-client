import React from 'react'

export default function ChatBubbleBot() {
  return (
    <div className='w-full flex justify-start text-sm'>
      <div class='flex items-center mb-2 lg:w-[200px] w-[50%]'>
        <div class='flex-1 bg-white dark:bg-gray-400 text-gray-700 dark:text-gray-900 p-2 rounded-lg mb-2 relative'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <p className='text-xs font-titillium float-right mt-2 text-gray-800'>20:18</p>
          <div class='absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-400' />
        </div>
      </div>
    </div>
  )
}
