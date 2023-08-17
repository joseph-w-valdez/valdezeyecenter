import Image from 'next/image'
import clinic from '../assets/images/clinic.png'

export default function Clinic() {

  return (
    <section className='w-full bg-[#d3d3d3] flex flex-wrap justify-evenly px-4 md:py-24 md:px-20 landscape-sm:px-0 landscape-sm:items-center' id='clinic'>
      <div className='flex flex-col w-full md:w-1/3'>
        <h1 className='py-20 md:py-24 text-center text-2xl md:text-5xl'>Experience Top-Quality Eye Care</h1>
        <p className='text-xl'>At our clinic, we&apos;re dedicated to providing you with the highest standard of eye care services. Our expert teams are
          committed to delivering personalized care and top-quality treatments to ensure your eye health is our top priority. With a strong emphasis on
          advanced technologies and a patient-centered approach, we&apos;re here to help you achieve and maintain optimal vision, so you can experience life with
          clarity and confidence.</p>
      </div>
      <div className='w-full md:w-1/2 flex justify-center'>
        <div className='h-36 w-36 md:w-[600px] md:h-[600px] my-8 md:my-0 rounded-full overflow-hidden'>
          <Image
            src={clinic} alt='clinic'
            className='object-cover h-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
      </div>
    </section>
  );
}
