import Image from 'next/image'
import splash from '../assets/images/splash.png'
import BackToTopButton from '@/components/BackToTopButton'
import InfoBlocks from '@/components/InfoBlocks'
import Clinic from '@/components/Clinic'
import Directions from '@/components/Directions'
import Coverage from '@/components/Coverage'
import Optical from '@/components/Optical'
import Doctors from '@/components/Doctors'

export default function Home() {
  return (
    <main className="mt-12 relative w-full flex flex-wrap justify-center">
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
      <InfoBlocks />
      <Clinic />
      <Directions />
      <Coverage />
      <Optical />
      <Doctors />
    </main>
  )
}
