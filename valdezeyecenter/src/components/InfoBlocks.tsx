import { infoBlocks } from '@/data/infoBlocks'
import Image from 'next/image'
import Link from "next/link";

export default function InfoBlocks() {

  return (
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
            <p className='text-lg w-full md:w-1/2 landscape-sm:w-full landscape-sm:px-4'>{content.text1}</p>
            <p className='text-lg w-full md:w-1/2 landscape-sm:w-full landscape-sm:px-4'>{content.text2}</p>
            <Link href={content.linkHref} className='text-3xl underline hover:text-gray-500'>{content.linkText}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
