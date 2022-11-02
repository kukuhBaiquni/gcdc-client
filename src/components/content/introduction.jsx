import React from 'react'
import Image from 'next/image'

export default function Introduction() {
  return (
    <div className='mt-8 w-auto bg-neutral-700 py-2 px-4'>
      <h1 className='text-2xl'>
        Welcome to <strong className='text-sky-500'>GrandChase</strong> Dimensional Chaser <strong className='text-sky-500'>TODAY!</strong>
      </h1>
      <p className='font-nunito mt-6'>
        First of all, we say thank you to KOG for making this game. We glad to annouce that
        we&apos;ve build a website for GrandChase Dimensional Chaser Community.
        We hope this can be a bridge to new player or veteran player for share their game play,
        strategy, tips & trick, or even a lookin for a guild.
      </p>
      <p className='mt-2'>
        Regards, Developer team
      </p>
      <div className='mt-8 flex flex-col items-center justify-center gap-6'>
        <h6>UPCOMING HERO <strong className='text-sky-400'>GENYMEDE</strong>!</h6>
        <Image
          alt='hero-genymede'
          className='rounded-full border-sky-400 border-4'
          height={250}
          src='/images/genymede.webp'
          width={250}
        />
      </div>

    </div>
  )
}
