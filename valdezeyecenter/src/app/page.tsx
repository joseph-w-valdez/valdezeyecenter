import Image from 'next/image'
import Link from 'next/link'
import clinic from '../assets/images/clinic-2.JPG'
import coverage from '../assets/images/coverage.jpg'
import flowers from '../assets/images/flowers-1.png'
import optical from '../assets/images/optical-banner/optical-banner-3.png'
// best optical: 3 8 10 12 13 14 15
import splash from '../assets/images/splash.jpg'
import { doctors } from '@/data/doctors'
import { infoBlocks } from '@/data/infoBlocks'
import { acceptedInsurances } from '@/data/insurances'
import { eyeglassBrands } from '@/data/brands'
import BackToTopButton from '@/components/BackToTopButton'

export default function Home() {
  return (
    <main className="w-full flex flex-wrap justify-center">
      <BackToTopButton />
      <section className='w-full h-full max-h-[800px] overflow-hidden flex justify-center' id='splash'>
        <Image
          src={splash} alt='splash image'
          className='object-cover w-full'
          height={0} width={0} sizes='100vw'
          priority
        />
      </section>
      <section className='w-full text-center text-white bg-black bg-opacity-90 py-40 text-5xl' id='slogan'>
        <h1>Helping You See the Path to Eye Care Excellence!</h1>
      </section>
      <section className='w-full text-center py-40' id='info-blocks'>
        <h1 className='text-5xl'>Our Patient-Focused Approach</h1>
        <div className='flex mt-12 text-center'>
          {infoBlocks.map((content, index) => (
            <div key={index} className='mt-12 w-1/3 flex flex-col items-center gap-8'>
              <div className='mb-4'>
                <Image
                  src={content.icon} alt='section icon'
                  className='object-contain h-16'
                  height={0} width={0} sizes='100vw'
                  priority
                />
              </div>
              <h2 className='text-3xl'>{content.title}</h2>
              <p className='text-lg w-1/2'>{content.text1}</p>
              <p className='text-lg w-1/2'>{content.text2}</p>
              <Link href={content.linkHref} className='text-3xl underline hover:text-gray-500'>{content.linkText}</Link>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full h-full max-h-[600px] overflow-hidden flex justify-center' id='spacer'>
        <Image
          src={flowers} alt='splash image'
          className='object-cover w-full'
          height={0} width={0} sizes='100vw'
          priority
        />
      </section>
      <section className='bg-[#F5F3F2] flex justify-evenly py-24 px-20' id='clinic'>
         <div className='flex flex-col w-1/3 gap-8'>
          <h1 className='text-6xl'>Experience Top-Quality Eye Care</h1>
          <p className='text-xl'>At our clinic, we&apos;re dedicated to providing you with the highest standard of eye care services. Our expert teams are committed to delivering personalized care and top-quality treatments to ensure your eye health is our top priority. With a strong emphasis on advanced technologies and a patient-centered approach, we're here to help you achieve and maintain optimal vision, so you can experience life with clarity and confidence.</p>
         </div>
         <div className='w-1/2 flex justify-center'>
            <div className='w-[600px] h-[600px] rounded-full overflow-hidden'>
              <Image
                src={clinic} alt='clinic'
                className='object-cover h-full'
                height={0} width={0} sizes='100vw'
                priority
              />
            </div>
         </div>
      </section>
      <section className='w-full text-center text-white bg-blue-400 pb-16 text-xl flex flex-col gap-4 items-center' id='coverage'>
        <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center'>
          <Image
            src={coverage} alt='coverage'
            className='object-cover w-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
        <div className='px-20 pt-4 flex flex-col gap-12 w-2/3' >
          <h1 className='text-6xl'>Insurances We Accept</h1>
          <ul className='grid grid-cols-3 gap-4'>
            {acceptedInsurances.map((insurance, index) => (
              <li key={index} className='text-xl flex items-center'>
                <span className='mr-2'>•</span>
                <a href={insurance.url} className='underline hover:text-blue-500' target='_blank' rel='noopener noreferrer'>
                  {insurance.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='w-full text-center text-white bg-blue-800 text-xl flex flex-col gap-4 items-center' id='optical'>
        <div className='w-full h-full max-h-[650px] overflow-hidden flex justify-center'>
          <Image
            src={optical} alt='optical'
            className='object-cover w-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
        <div className='px-20 py-16 flex flex-col gap-8 w-2/3' >
          <h1 className='text-6xl'>Welcome to Our Optical Shop</h1>
          <p>Discover a world of stylish eyewear and professional eye care services at our optical shop. We are dedicated to providing you with top-quality eyeglasses, sunglasses, and contact lenses that suit your unique style and vision needs.</p>
          <p>Our experienced opticians are here to assist you in finding the perfect eyewear and ensuring a comfortable fit. Whether you&apos;re looking for fashion-forward frames or advanced lens technologies, we have a wide selection to meet your preferences.</p>
          <p>Visit our optical shop and experience the difference in clarity and style. We take pride in offering personalized service to help you see and look your best, enhancing both your vision and confidence.</p>
        </div>
        <div className='bg-gray-700 w-full flex justify-center px-20 pt-12 pb-20'>
          <div className='flex flex-col gap-12 w-2/3' >
            <h1 className='text-6xl'>Brands We Carry</h1>
            <ul className='grid grid-cols-3 gap-4'>
              {eyeglassBrands.map((brand, index) => (
                <li key={index} className='text-xl flex items-center'>
                  <span className='mr-2'>•</span>
                  <a href={brand.url} className='underline hover:text-blue-500' target='_blank' rel='noopener noreferrer'>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='w-full bg-white p-20 flex flex-col gap-16' id='doctors'>
        <h1 className='text-6xl text-center'>Meet Our Doctors!</h1>
        {doctors.map((doctor, index) => (
          <>
            {/* Flip the orientation depending on even/odd index  */}
            <div
              key={index}
              className={`w-full flex justify-between p-20 items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex flex-col gap-8 w-1/3 ${index % 2 !== 0 ? 'text-right' : ''}`}
              >
                <h1 className='text-5xl'>{doctor.name}</h1>
                <p className='text-xl'>{doctor.bio}</p>
              </div>
              <div className='w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl'>
                <Image
                  src={doctor.image} alt={doctor.name}
                  className='object-cover w-full'
                  height={0} width={0} sizes='100vw'
                  priority
                />
              </div>
            </div>
            {index < doctors.length - 1 && (
              <hr className="w-full bg-gray-300 h-1 shadow-xl" /> // Add a line break only between doctors
            )}
          </>
        ))}
      </section>
    </main>
  )
}
