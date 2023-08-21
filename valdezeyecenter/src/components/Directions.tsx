import Image from 'next/image';
import Clinic from '../assets/images/clinic-street-view.png';
import AppleValleySurgeryCenter from '../assets/images/apple-valley-surgery-center.png'
import VictorvilleSurgeryCenter from '../assets/images/victorville-surgery-center.png'

interface Location {
  title: string;
  imageSrc: any;
  directions: string;
  address: string;
  phone: string;
}

const locations: Location[] = [
  {
    title: 'Our Clinic',
    imageSrc: Clinic,
    directions: 'We are located just west of St. Mary Medical Center. When you reach the hospital, you can take Outer Highway 18 and turn on Tuscola Road and you\'ll find us next to the Knolls Medical Center.',
    address: '16031 Tuscola Rd, Apple Valley, CA 92307',
    phone: '(760) 946-2020',
  },
  {
    title: 'Neighboring Surgery Center',
    imageSrc: AppleValleySurgeryCenter,
    directions: 'Our Surgery Center in Apple Valley is located just on outer Highway 18 just a block away from St. Mary Medical Center.',
    address: '18122 Outer Hwy 18 S, Apple Valley, CA 92307',
    phone: '(760) 946-5920',
  },
  {
    title: 'Other Surgery Center',
    imageSrc: VictorvilleSurgeryCenter,
    directions: 'Our other Surgery Center in Victorville is located in the Wells Fargo complex.',
    address: '12567 Hesperia Rd, Victorville, CA 92395',
    phone: '(760) 241-7754',
  },
];

const Directions: React.FC = () => {
  return (
    <section className='w-full bg-white flex flex-col gap-4 flex-wrap justify-evenly px-4 py-12 md:py-24 md:px-20 landscape-sm:px-0 landscape-sm:items-center ' id='directions'>
      <h1 className='text-center text-2xl md:text-5xl'>Find Us</h1>
      <div className="flex flex-col gap-4">
        {locations.map((location, index) => (
          <div key={index} className="text-3xl flex flex-col gap-4 items-center text-start mt-20">
            <h3 className='font-bold'>{location.title}</h3>
            <div className='w-full h-full max-h-[600px] overflow-hidden flex justify-center my-12'>
              <Image
                src={location.imageSrc} alt={`${location.title} Exterior`}
                className='object-cover w-full'
                width={0} height={0} sizes='100vw'
                priority
              />
            </div>
            <p className='w-2/3'>Directions: <br />{location.directions}</p>
            <p className='w-2/3'>Address: {location.address}</p>
            <p className='w-2/3'>Phone: <a href={`tel:${location.phone}`} className='underline text-blue-500 hover:text-blue-300'>{location.phone}</a></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Directions;
