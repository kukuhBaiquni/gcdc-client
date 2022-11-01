import React from 'react'

export default function Input() {
  return (
    <div className='flex w-1/3'>
      <input
        className='p-1.5 px-3 hidden lg:flex w-full tm-base rounded-l-full border'
        placeholder='Search'
        type='text'
      />
      <button className='w-12 rounded-r-full dark:bg-neutral-700 bg-neutral-200' type='button'>
        <i className='bx bx-search-alt-2 text-xl' />
      </button>
    </div>
  )
}
