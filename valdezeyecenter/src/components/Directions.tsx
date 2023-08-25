import Image from 'next/image';
import Link from 'next/link'
import { locations } from '@/data/locations';

const Directions: React.FC = () => {
  return (
    <section className='w-full bg-white flex flex-col gap-4 flex-wrap justify-evenly px-4 py-12 md:py-24 md:px-20 landscape-sm:px-0 landscape-sm:items-center ' id='directions'>
      <h1 className='text-center text-2xl md:text-5xl'>Find Us</h1>
      <div className="flex flex-col gap-4">
        {locations.map((location, index) => (
          <div key={index} className="text-4xl flex flex-col gap-4 items-center text-start mt-20">
            <h3 className='font-bold'>{location.title}</h3>
            <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center my-4 rounded-xl'>
              <Image
                src={location.imageSrc} alt={`${location.title} Exterior`}
                className='object-cover w-full'
                width={0} height={0} sizes='100vw'
                priority
              />
            </div>
            {/* Google Map embed */}
            <div className='w-full flex flex-col lg:flex-row lg:flex-wrap justify-around items-center min-h-[700px] mt-8 mx-12'>
              <div className='w-full lg:w-1/2 max-w-[800px] h-full max-h-[400px] lg:max-h-[600px] overflow-hidden flex justify-center my-4'>
                <iframe
                  src={location.embed}
                  width="100%" height="100%"
                  loading="lazy"
                >
                </iframe>
              </div>
              <div className='w-full lg:w-1/2 text-lg md:text-2xl flex flex-col gap-8 lg:px-4 px-12'>
                <p className='w-full'>Directions:</p>
                <p>{location.directions}</p>
                <p className='w-full'>Address: {location.address}</p>
                <p className='w-full'>Phone Number: <a href={`tel:${location.phone}`} className='underline text-blue-500 hover:text-blue-300'>{location.phone}</a></p>
                <Link
                  href={location.link} target='_blank' rel='noreferrer'
                  className='text-xl sm:text-2xl text-blue-500 underline hover:text-black hover:text-blue-300'
                >
                  Click here to expand the map
                </Link>
              </div>
            </div>
            {index < locations.length - 1 && (
              <hr className="w-full bg-gray-300 h-1 mt-8" /> // Add a line break only between locations
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Directions;
