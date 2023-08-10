import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo.png'

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-10 w-full h-20 flex items-center justify-between px-6 border-b-4 border-double bg-blue-400">
        <Link href='/' className='text-2xl flex items-center gap-x-2 hover:text-black'>
          <div className='bg-white rounded-full p-2 border border-4 border-blue-400 border-double'>
            <Image src={logo} alt='logo' className='h-[35px] w-[35px]' />
          </div>
          <span className=''>ValdezEyeCenter</span>
        </Link>
      <div className='flex items-center gap-x-4'>
        <Link href='/' className='text-2xl hover:text-black'>Our Staff</Link>
        <Link href='/' className='text-2xl rounded-lg text-black bg-white border border-2 p-2 hover:bg-blue-700 hover:text-white'>Contact Us</Link>
      </div>
    </nav>
  )
}
