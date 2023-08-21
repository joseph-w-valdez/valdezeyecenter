import Image from 'next/image';
import Clinic from '../assets/images/clinic.png'

const Directions: React.FC = () => {
  return (
    <section className='w-full bg-white flex flex-col gap-4 flex-wrap justify-evenly px-4 md:py-24 md:px-20 landscape-sm:px-0 landscape-sm:items-center ' id='directions'>
      <h1 className='text-center text-2xl md:text-5xl'>Find Us</h1>
      <div className="flex flex-col gap-4">
        <div className="text-3xl flex flex-col gap-4 items-center text-start">
          <h3>Our Clinic</h3>
          <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center my-12'>
            <Image
              src={Clinic} alt="Clinic Exterior"
              className='object-cover w-full'
              width={0} height={0} sizes='100vw'
              priority
            />
          </div>
          <p className='w-2/3'>
            Directions: <br />We are located just west of St. Mary Hospital. When you reach the hospital, you can take Outer Highway 18 and turn on Tuscola Road and you&apos;ll find us right there.
          </p>
          <p className='w-2/3'>Address: 16031 Tuscola Rd, Apple Valley, CA 92307</p>
          <p className='w-2/3'>Phone: <a href="tel:760-946-2020" className='underline text-blue-500 hover:text-blue-300'>(760) 946-2020</a></p>
        </div>
        <div className="text-3xl flex flex-col gap-4 items-center text-start mt-20">
          <h3>Neighboring Surgery Center</h3>
          <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center my-12'>
            <Image
              src={Clinic} alt="Clinic Exterior"
              className='object-cover w-full'
              width={0} height={0} sizes='100vw'
              priority
            />
          </div>
          <p className='w-2/3'>
            Directions: <br />Our Surgery Center in Apple Valley is located just behind the St. Mary Hospital.
          </p>
          <p className='w-2/3'>Address: 18122 Outer Hwy 18 S, Apple Valley, CA 92307</p>
          <p className='w-2/3'>Phone: <a href="tel:760-946-5920" className='underline text-blue-500 hover:text-blue-300'>(760) 946-5920</a></p>
        </div>
      </div>
    </section>
  );
};

export default Directions;
