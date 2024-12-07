import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'

export default function page() {
  return (
    <div className='text-white'>
      <Header/>
      <main className='font-staatliches'>
        <div className='mt-16 bg-white w-screen h-96 flex'>
          <div className='w-1/2 h-full bg-[#87cefa] flex flex-col items-center justify-center'>
            <h1 className='text-7xl w-3/4'
            >Olá, Sou Broggine, programador em 
            <span className="animate-color-change"> NEXT.JS14</span></h1>
            <div className='flex items-center w-full pl-20 space-x-2'>
              <a href="https://github.com/joaobroggine" target='_blank'>
                <Image className='hover:scale-110 duration-300'
                src="/img/githubicon.webp" alt='Github Icon' width={50} height={50}></Image>
              </a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-broggine-5b92a02b2/?trk=opento_sprofile_goalscard" target='_blank'>
                <Image className='hover:scale-110 duration-300'
                src="/img/linkedin.png" alt='Linkedin Icon' width={42} height={42}></Image>
              </a>
            </div>
          </div>
          <div className='w-1/2 h-full bg-[#87cefa] flex items-center justify-center'>
            <Image className='rounded-full hover:scale-110 duration-500 shadow-xl'
             src="/img/me.png" alt='Broggine' width={400} height={400}/>
          </div>
        </div>
      </main>
      <section>

      </section>
    </div>
  )
}
