import Link from 'next/link'
import Image from 'next/image'
import logoFull from '../assets/images/logo-full.png'

export default function Navbar() {

  return (
    <footer className="w-full h-fit md:h-64 flex flex-wrap justify-center text-center border-t-4 border-double bg-blue-400 py-20" id='footer'>
      <h1 className='text-3xl md:text-5xl'>Get started with ValdezEyeCenter</h1>
      <p className='w-full text-2xl md:text-4xl pt-4 px-4'>Schedule an appointment today!</p>
      <div className='w-full h-[1px] bg-white mx-12 mt-12'></div>
      <div className='flex flex-wrap flex-col md:flex-row gap-12 md:gap-0 justify-between text-start text-xl py-20 px-4 landscape:px-4 md:px-40 w-full bg-blue-400'>
        <div className='w-full md:w-[10%] landscape:w-1/4'>
          <Image src={logoFull} alt='full logo' />
        </div>
        <div className='w-full md:w-1/4 landscape:w-1/3'>
          <p>Phone: <a href="tel:760-946-2020" className='underline'>(760) 946-2020</a></p>
          <p>Address: 16031 Tuscola Rd, Apple Valley, CA 92307</p>
        </div>
        <div className='w-full md:w-1/4 landscape:w-1/3'>
          <div><p>Hours:</p></div>
          <div><span>Monday: </span><span>8 AM-5 PM</span></div>
          <div><span>Tuesday: </span><span>8 AM-5 PM</span></div>
          <div><span>Wednesday: </span><span>8 AM-5 PM</span></div>
          <div><span>Thursday: </span><span>8 AM-5 PM</span></div>
          <div><span>Friday: </span><span>8 AM-5 PM</span></div>
          <div><span>Saturday: </span><span>Closed</span></div>
          <div><span>Sunday: </span><span>Closed</span></div>
        </div>
      </div>
      <div className='bg-white w-full flex justify-start md:pl-20 pl-4 py-2 text-black'><p>© 2023 ValdezEyeCenter. All rights reserved.</p></div>
    </footer>
  )
}
