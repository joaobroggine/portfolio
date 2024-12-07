import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#87cefa] shadow-md h-16 fixed top-0 w-full z-50'>
      <nav className='flex justify-center space-x-10 pt-5 mr-16 font-dosis font-bold text-xl text-white'>
        <ul className='hover:scale-110 transform transition duration-300 ease-in-out hover:text-gray-800 hover:text-shadow-xl'>
        <Link href="/idiomas">Idiomas</Link>
        </ul>
        <ul className='hover:scale-110 transform transition duration-300 ease-in-out hover:text-gray-800 hover:text-shadow-xl'>
          <a href="/cv/curriculoprofissional.pdf" download>
            Baixar Currículo
          </a>
        </ul>
        <ul className='hover:scale-110 transform transition duration-300 ease-in-out hover:text-gray-800 hover:text-shadow-xl'>
          <Link href="/">Home</Link>
        </ul>
        <ul className='hover:scale-110 transform transition duration-300 ease-in-out hover:text-gray-800 hover:text-shadow-xl'>
        <Link href="/linguagens">Linguagens</Link>
        </ul>
        <ul className='hover:scale-110 transform transition duration-300 ease-in-out hover:text-gray-800 hover:text-shadow-xl'>
        <Link href="/sobre">Sobre mim</Link>
        </ul>
      </nav>
    </div>
  )
}
