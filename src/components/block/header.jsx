import React from 'react'
import Image from 'next/image'
import useDarkMode from 'hooks/use-dark-mode'

export default function Header() {
  const { theme, setTheme } = useDarkMode()
  return (
    <header className='w-full h-24 sticky left-0 top-0 drop-shadow-sm tm-base'>
      <div className='max-w-screen-2xl mx-auto h-full items-center flex justify-between'>
        <Image
          alt='logo'
          height={70}
          src='/images/logo.png'
          width={200}
        />
        <div>
          {theme === 'dark' ? (
            <i
              className='bx bxs-sun text-2xl cursor-pointer'
              onClick={() => setTheme('light')}
            />
          ) : (
            <i
              className='bx bxs-moon text-2xl cursor-pointer'
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </div>
    </header>
  )
}
