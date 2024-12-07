import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className=''>
      <nav className='flex justify-center space-x-10 pt-5 mr-16 font-dosis font-bold text-xl text-white'>
        <ul>Idiomas</ul>
        <ul><a href="/cv/curriculoprofissional.pdf"
                    download
            >Baixar Currículo</a></ul>
        <ul><Link href="/">Home</Link></ul>
        <ul>Linguagens</ul>
        <ul>Sobre mim</ul>
      </nav>
    </div>
  )
}
