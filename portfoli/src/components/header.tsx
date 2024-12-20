"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex sm:justify-center items-center h-16 px-4 md:px-8">
        {/* Menu Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-dosis text-xl text-black font-bold">
          <Link href="/idiomas" className="text-black no-underline hover:bg-slate-200 duration-300">
            Idiomas
          </Link>
          <a
            href="/cv/curriculoprofissional.pdf"
            download
            className="text-black no-underline hover:bg-slate-200 duration-300"
          >
            Baixar Currículo
          </a>
          <Link href="/" className="text-black no-underline hover:bg-slate-200 duration-300">
            Home
          </Link>
          <Link href="/certificados" className="text-black no-underline hover:bg-slate-200 duration-300">
            Certificados
          </Link>
          <Link href="/sobre" className="text-black no-underline hover:bg-slate-200 duration-300">
            Sobre mim
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-black text-3xl"
        >
          <FiX />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-black font-dosis text-xl font-bold">
          <Link href="/idiomas" onClick={toggleMenu} className="text-black no-underline">
            Idiomas
          </Link>
          <a
            href="/cv/curriculoprofissional.pdf"
            download
            onClick={toggleMenu}
            className="text-black no-underline"
          >
            Baixar Currículo
          </a>
          <Link href="/" onClick={toggleMenu} className="text-black  no-underline">
            Home
          </Link>
          <Link href="/certificados" onClick={toggleMenu} className="text-black no-underline">
            Certificados
          </Link>
          <Link href="/sobre" onClick={toggleMenu} className="text-black no-underline">
            Sobre mim
          </Link>
        </div>
      </div>
    </header>
  );
}
