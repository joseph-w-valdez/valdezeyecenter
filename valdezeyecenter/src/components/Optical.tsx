import Image from 'next/image'
import optical from '../assets/images/optical.png'
import { eyeglassBrands } from '@/data/brands'

export default function Optical() {

  return (
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
        <div className='flex flex-col gap-12 w-full md:w-3/4' >
          <h1 className='text-2xl md:text-5xl text-center'>Brands We Carry</h1>
          <ul className='grid md:grid-cols-3 landscape-sm:grid-cols-3 gap-4'>
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
  );
}
