import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo.png'
import { navItems } from '@/data/navItems'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 w-full h-20 flex items-center justify-between px-6 border-b-4 border-double bg-blue-400">
      <Link href='/' className='text-2xl flex items-center gap-4 hover:text-black'>
        <Image src={logo} alt='logo' className='h-[35px] w-[35px]' />
        <span className=''>ValdezEyeCenter</span>
      </Link>
      <div className='flex items-center gap-x-4'>
        {navItems.map((item, index) => (
          <Link href={item.href} key={index} passHref className={`text-2xl ${item.isContact ? 'rounded-lg text-black bg-white border border-2 p-2 hover:bg-blue-700 hover:text-white' : 'hover:text-black'}`}>
              {item.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}
