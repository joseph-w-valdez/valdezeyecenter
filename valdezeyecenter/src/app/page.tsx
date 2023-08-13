import Image from 'next/image'
import Link from 'next/link'
import clinic from '../assets/images/clinic.png'
import coverage from '../assets/images/coverage.png'
import optical from '../assets/images/optical.png'
import splash from '../assets/images/splash.png'
import { doctors } from '@/data/doctors'
import { infoBlocks } from '@/data/infoBlocks'
import { acceptedInsurances } from '@/data/insurances'
import { eyeglassBrands } from '@/data/brands'
import BackToTopButton from '@/components/BackToTopButton'

export default function Home() {
  return (
    <main className="relative w-full flex flex-wrap justify-center">
      <BackToTopButton />
      <section className='w-full h-full max-h-[500px] overflow-hidden flex justify-center' id='splash'>
        <Image
          src={splash} alt='splash image'
          className='object-cover w-full'
          height={0} width={0} sizes='100vw'
          priority
        />
      </section>
      <section className='w-full text-center text-white bg-black bg-opacity-90 py-20 md:py-40 text-2xl md:text-5xl px-4' id='slogan'>
        <h1>Helping You See the Path to Eye Care Excellence!</h1>
      </section>
      <section className='w-full text-center py-20 text-2xl md:text-5xl' id='info-blocks'>
        <h1>Our Patient-Focused Approach</h1>
        <div className='flex flex-wrap text-center'>
          {infoBlocks.map((content, index) => (
            <div key={index} className='mt-12 mx-4 md:mx-0 w-full md:w-1/3 flex flex-col items-center gap-8'>
              <div className='mb-4'>
                <Image
                  src={content.icon} alt='section icon'
                  className='object-contain h-16'
                  height={0} width={0} sizes='100vw'
                  priority
                />
              </div>
              <h2 className='text-3xl'>{content.title}</h2>
              <p className='text-lg w-full md:w-1/2 landscape:w-full landscape:px-4'>{content.text1}</p>
              <p className='text-lg w-full md:w-1/2 landscape:w-full landscape:px-4'>{content.text2}</p>
              <Link href={content.linkHref} className='text-3xl underline hover:text-gray-500'>{content.linkText}</Link>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full bg-[#d3d3d3] flex flex-wrap justify-evenly px-4 md:py-24 md:px-20 landscape:px-0 landscape:items-center' id='clinic'>
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
      <section className='w-full text-start md:text-center text-white bg-blue-400 pb-16 text-xl flex flex-col gap-4 items-center' id='coverage'>
        <div className='w-full h-full max-h-[500px] overflow-hidden flex justify-center'>
          <Image
            src={coverage} alt='coverage'
            className='object-cover w-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
        <div className='md:px-20 pt-20 flex flex-col gap-12 w-2/3' >
          <h1 className='text-2xl md:text-5xl'>Insurances We Accept</h1>
          <ul className='grid md:grid-cols-3 landscape:grid-cols-2 gap-4 text-start'>
            {acceptedInsurances.map((insurance, index) => (
              <li key={index} className='text-xl flex items-center'>
                <span className='mr-2'>•</span>
                <a href={insurance.url} className='underline hover:text-blue-500' target='_blank' rel='noopener noreferrer'>
                  {insurance.name}
                </a>
              </li>
            ))}
          </ul>
          <p className='leading-8 md:leading-0'>We proudly accept a wide range of insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and more. If you
            don&apos;t immediately see your coverage, our dedicated insurance support team is here to assist. Contact us, and we&apos;ll work to verify your
            coverage and guide you through the process, ensuring you can access the eyewear you need with the insurance you trust.</p>
        </div>
      </section>
      <section className='w-full text-center text-white bg-gray-800 text-xl flex flex-col gap-4 items-center' id='optical'>
        <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center'>
          <Image
            src={optical} alt='optical'
            className='object-cover w-full'
            height={0} width={0} sizes='100vw'
            priority
          />
        </div>
        <div className='px-4 md:px-20 py-20 flex flex-col gap-8 w-full md:w-2/3' >
          <h1 className='text-2xl md:text-5xl'>Welcome to Our Optical Shop</h1>
          <p>Discover a world of stylish eyewear and professional eye care services at our optical shop. We are dedicated to providing you with top-quality eyeglasses, sunglasses, and contact lenses that suit your unique style and vision needs.</p>
          <p>Our experienced opticians are here to assist you in finding the perfect eyewear and ensuring a comfortable fit. Whether you&apos;re looking for fashion-forward frames or advanced lens technologies, we have a wide selection to meet your preferences.</p>
          <p>Visit our optical shop and experience the difference in clarity and style. We take pride in offering personalized service to help you see and look your best, enhancing both your vision and confidence.</p>
        </div>
        <div className='bg-blue-400 w-full flex justify-center px-4 md:px-20 pt-12 pb-20 text-start md:text-center'>
          <div className='flex flex-col gap-12 w-full md:w-2/3' >
            <h1 className='text-2xl md:text-5xl text-center'>Brands We Carry</h1>
            <ul className='grid md:grid-cols-3 landscape:grid-cols-2 gap-4'>
              {eyeglassBrands.map((brand, index) => (
                <li key={index} className='text-xl flex items-center'>
                  <span className='mr-2'>•</span>
                  <a href={brand.url} className='underline hover:text-blue-500' target='_blank' rel='noopener noreferrer'>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <p>At our optical shop, we take great pride in offering an extensive range of options, each reflecting distinct styles. From classic styles with enduring appeal to sophisticated pieces
              that exude luxury, our collection spans a wide spectrum of fashion-forward choices. </p>
            <p>We also welcome you to bring in your own frames for a personalized touch. Our skilled opticians will thoughtfully fit them with custom lenses that align
              with your prescription, seamlessly integrating cutting-edge technology with your individual preferences. This approach ensures both impeccable visual clarity and a
              continuation of the unique story behind your frames.</p>
          </div>
        </div>
      </section>
      <section className='w-full bg-white px-4 py-20 md:px-20 flex flex-wrap flex-col gap-16' id='doctors'>
        <h1 className='text-2xl md:text-5xl text-center'>Meet Our Doctors!</h1>
        {doctors.map((doctor, index) => (
          <>
            {/* Flip the orientation depending on even/odd index on mobile devices */}
            <div
              key={index}
              className={`w-full flex flex-wrap justify-center md:justify-between md:p-20 landscape:px-0 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex flex-col gap-8 w-full md:w-1/3 ${index % 2 !== 0 ? 'md:text-right' : ''}`}
              >
                <h1 className='text-2xl md:text-5xl'>{doctor.name}</h1>
                <p className='text-xl'>{doctor.bio}</p>
              </div>
              <div className='w-36 h-36 md:w-[400px] md:h-[400px] my-8 md:my-0 rounded-full overflow-hidden shadow-2xl'>
                <Image
                  src={doctor.image} alt={doctor.name}
                  className='object-cover w-full'
                  height={0} width={0} sizes='100vw'
                  priority
                />
              </div>
            </div>
            {index < doctors.length - 1 && (
              <hr className="w-full bg-gray-300 h-1" /> // Add a line break only between doctors
            )}
          </>
        ))}
      </section>
    </main>
  )
}
