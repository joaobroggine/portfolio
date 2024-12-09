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
    <header className="bg-[#87cefa] shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center h-16 px-4 md:px-8">
        {/* Menu Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-dosis text-xl text-white font-bold">
          <Link href="/idiomas" className="hover:text-gray-800 hover:underline">
            Idiomas
          </Link>
          <a
            href="/cv/curriculoprofissional.pdf"
            download
            className="hover:text-gray-800 hover:underline"
          >
            Baixar Currículo
          </a>
          <Link href="/" className="hover:text-gray-800 hover:underline">
            Home
          </Link>
          <Link href="/linguagens" className="hover:text-gray-800 hover:underline">
            Linguagens
          </Link>
          <Link href="/sobre" className="hover:text-gray-800 hover:underline">
            Sobre mim
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#87cefa] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          <FiX />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white font-dosis text-xl font-bold">
          <Link href="/idiomas" onClick={toggleMenu} className="hover:underline">
            Idiomas
          </Link>
          <a
            href="/cv/curriculoprofissional.pdf"
            download
            onClick={toggleMenu}
            className="hover:underline"
          >
            Baixar Currículo
          </a>
          <Link href="/" onClick={toggleMenu} className="hover:underline">
            Home
          </Link>
          <Link href="/linguagens" onClick={toggleMenu} className="hover:underline">
            Linguagens
          </Link>
          <Link href="/sobre" onClick={toggleMenu} className="hover:underline">
            Sobre mim
          </Link>
        </div>
      </div>
    </header>
  );
}
