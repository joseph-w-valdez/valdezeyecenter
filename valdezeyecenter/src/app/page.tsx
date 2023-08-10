import Image from 'next/image'
import splash from '../assets/images/splash.jpg'
import Link from 'next/link'
import insuranceIcon from '../assets/images/insurance.png'
import glassesIcon from '../assets/images/glasses.png'
import doctorsIcon from '../assets/images/doctors.png'

const divContent = [
  {
    title: 'We welcome many insurances!',
    text1: 'At ValdezEyeCenter, we proudly welcome all insurances and provide affordable options for all our patients. Our dedicated team works tirelessly to ensure that you can access the eye care you need without any financial burdens.',
    text2: 'Whether you have private insurance, government coverage, or are self-paying, we have solutions to accommodate your needs and preferences.',
    icon: insuranceIcon,
    linkText: 'CHECK COVERAGE',
    linkHref: '/'
  },
  {
    title: 'High-Quality Eyewear',
    text1: 'As a leading provider of eye health services, we offer a comprehensive selection of popular glasses and brands for every budget and lifestyle. Our expert opticians are passionate about helping you find the perfect eyewear that not only enhances your vision but also complements your style.',
    text2: 'From classic designs to the latest trends, we have eyewear options that cater to diverse tastes.',
    icon: glassesIcon,
    linkText: 'VIEW OUR BRANDS',
    linkHref: '/'
  },
  {
    title: 'Our Doctors',
    text1: 'At ValdezEyeCenter, we understand the importance of personalized care. Our experienced and highly-trained doctors are dedicated to working closely with you to create a Stay Well Care Plan - a personalized wellness plan that addresses your unique eye health needs.',
    text2: 'We believe that building a strong doctor-patient relationship is the foundation of exceptional eye care, and our doctors are committed to providing you with the highest quality of service.',
    icon: doctorsIcon,
    linkText: 'MEET OUR DOCTORS',
    linkHref: '/'
  }
];

export default function Home() {
  return (
    <main className="w-full flex flex-wrap justify-center">
      <div className='w-full h-full max-h-[800px] overflow-hidden flex justify-center'>
        <Image
          src={splash} alt='splash image'
          className='object-cover w-full'
          height={0} width={0} sizes='100vw'
          priority
        />
      </div>
      <div className='w-full text-center text-white bg-gray-500 py-40 text-5xl'>
        <h1>Helping You See the Path to Eye Care Excellence!</h1>
      </div>
      <div className='w-full text-center py-40'>
        <h1 className='text-5xl'>Our Patient-Focused Approach</h1>
        <div className='flex mt-12 text-center'>
          {divContent.map((content, index) => (
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
      </div>
    </main>
  )
}
