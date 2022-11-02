import React from 'react'
import Image from 'next/image'
import useDarkMode from 'hooks/use-dark-mode'
import Input from 'components/form/search-input'

export default function Header() {
  const { theme, setTheme } = useDarkMode()
  return (
    <header className='w-full h-16 sticky left-0 top-0 drop-shadow-sm tm-base border-b px-3 sm:px-0'>
      <div className='max-w-screen-2xl mx-auto h-full items-center flex justify-between'>
        <Image
          alt='logo'
          height={70}
          src='/images/logo.png'
          width={125}
        />
        <Input />
        <i className='bx bx-menu text-xl flex lg:hidden' />
        <div className='hidden lg:flex'>
          {theme === 'dark' ? (
            <i
              className='bx bxs-sun text-xl cursor-pointer'
              onClick={() => setTheme('light')}
            />
          ) : (
            <i
              className='bx bxs-moon text-xl cursor-pointer'
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </div>
    </header>
  )
}
