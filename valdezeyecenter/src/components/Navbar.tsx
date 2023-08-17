'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.png';
import { navItems } from '@/data/navItems';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full h-20 flex items-center justify-between px-6 border-b-4 border-double bg-blue-400">
      <Link href='/' className='text:md sm:text-2xl flex items-center gap-4 hover:text-black'>
        <Image src={logo} alt='logo' className='h-[35px] w-[35px]' />
        <span className=''>ValdezEyeCenter</span>
      </Link>
      <button className='block xl:hidden p-2 rounded-full hover:bg-blue-800' onClick={() => setSidebarOpen(true)} >
        <GiHamburgerMenu className='text-2xl' />
      </button>
      <div className={`hidden xl:flex items-center gap-x-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`text-xl ${item.isContact ? 'rounded-lg text-black bg-white border border-2 p-2 hover:bg-blue-700 hover:text-white' : 'hover:text-black'}`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </nav>
  )
}
