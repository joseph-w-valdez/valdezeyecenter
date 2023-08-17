import Image from 'next/image'
import coverage from '../assets/images/coverage.png'
import { acceptedInsurances } from '@/data/insurances'

export default function Coverage() {

  return (
    <section className='w-full text-start md:text-center text-white bg-blue-400 pb-16 text-xl flex flex-col gap-4 items-center' id='coverage'>
      <div className='w-full h-full max-h-[500px] overflow-hidden flex justify-center'>
        <Image
          src={coverage} alt='coverage'
          className='object-cover w-full'
          height={0} width={0} sizes='100vw'
          priority
        />
      </div>
      <div className='md:px-20 pt-20 flex flex-col gap-12 w-3/4' >
        <h1 className='text-2xl md:text-5xl'>Insurances We Accept</h1>
        <ul className='grid md:grid-cols-3 landscape-sm:grid-cols-3 gap-4 text-start'>
          {acceptedInsurances.map((insurance, index) => (
            <li key={index} className='text-xl flex items-center'>
              <span className='mr-2'>•</span>
              <a href={insurance.url} className='underline hover:text-blue-500' target='_blank' rel='noopener noreferrer'>
                {insurance.name}
              </a>
            </li>
          ))}
        </ul>
        <p className='leading-8 md:leading-0 italic text-xl'>If you do not see your insurance listed, please contact us. Our dedicated insurance support team is here to assist.
          Contact us, and we&apos;ll work to verify your coverage.</p>
      </div>
    </section>
  );
}
