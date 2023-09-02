import Image from 'next/image'
import { doctors } from '@/data/doctors'
import staff from '../assets/images/staff.png'
import staffFunny from '../assets/images/staff-funny.png'

export default function Doctors() {

  return (
    <section className='w-full bg-white px-4 py-20 md:px-20 flex flex-wrap flex-col gap-16' id='staff'>
      <h1 className='text-2xl md:text-5xl text-center'>Meet Our Doctors!</h1>
      {doctors.map((doctor, index) => (
        <>
          {/* Flip the orientation depending on even/odd index on mobile devices */}
          <div
            key={index}
            className={`w-full flex flex-wrap justify-center md:justify-between md:p-20 landscape-sm:px-0 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`flex flex-col gap-8 w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}
            >
              <h1 className='text-2xl md:text-5xl'>{doctor.name}</h1>
              <p className='text-xl'>{doctor.bio}</p>
            </div>
            <div className='w-36 h-36 md:w-[300px] md:h-[300px] my-8 md:my-0 rounded-full overflow-hidden shadow-2xl'>
              <Image
                src={doctor.image} alt={doctor.name}
                className='object-cover h-full'
                height={0} width={0} sizes='100vw'
                priority
              />
            </div>
          </div>
          <hr className="w-full bg-gray-300 h-1" />
        </>
      ))}
      <div>
        <h1 className='text-2xl md:text-5xl text-center mb-12'>Meet Our Staff!</h1>
        <div className='w-full h-full max-h-[900px] flex justify-center'>
          <Image
            src={staff} alt='staff photo'
            className='object-contain h-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
      </div>
    </section>
  );
}
