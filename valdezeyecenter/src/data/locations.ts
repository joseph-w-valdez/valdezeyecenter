import Clinic from '../assets/images/clinic-street-view.png';
import AppleValleySurgeryCenter from '../assets/images/apple-valley-surgery-center.png'
import VictorvilleSurgeryCenter from '../assets/images/victorville-surgery-center.png'

interface Location {
  title: string;
  imageSrc: any;
  directions: string;
  address: string;
  phone: string;
  embed: string;
}

export const locations: Location[] = [
  {
    title: 'Our Clinic',
    imageSrc: Clinic,
    directions: 'We are located just west of St. Mary Medical Center. When you reach the hospital, you can take Outer Highway 18 and turn on Tuscola Road and you\'ll find us next to the Knolls Medical Center.',
    address: '16031 Tuscola Rd, Apple Valley, CA 92307',
    phone: '(760) 946-2020',
    embed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13145.724878988078!2d-117.268739!3d34.5426357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c364782066a9a3%3A0x7ee21d2e5b9a233e!2sValdez%20Eye%20Center!5e0!3m2!1sen!2sus!4v1692234983300!5m2!1sen!2sus'
  },
  {
    title: 'Neighboring Surgery Center',
    imageSrc: AppleValleySurgeryCenter,
    directions: 'The closest Surgery Center is in Apple Valley is located just on outer Highway 18 just a block away from St. Mary Medical Center.',
    address: '18122 Outer Hwy 18 S, Apple Valley, CA 92307',
    phone: '(760) 946-5920',
    embed: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1161.9540643203743!2d-117.26903627754885!3d34.540833098196394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c3655b3ba6ba91%3A0xf06f262d0a73452c!2s18122%20Outer%20Hwy%2018%20S%2C%20Apple%20Valley%2C%20CA%2092307!3m2!1d34.541095!2d-117.268559!5e0!3m2!1sen!2sus!4v1692906594759!5m2!1sen!2sus'
  },
  {
    title: 'Other Surgery Center',
    imageSrc: VictorvilleSurgeryCenter,
    directions: 'The other Surgery Center we use is in Victorville is located in the Wells Fargo complex.',
    address: '12567 Hesperia Rd, Victorville, CA 92395',
    phone: '(760) 241-7754',
    embed: 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2325.630320274995!2d-117.29054402909652!3d34.47909857632683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c366c2425557d9%3A0x627be3e78b120eb3!2s12567%20Hesperia%20Rd%2C%20Victorville%2C%20CA%2092395!3m2!1d34.4794206!2d-117.28951749999999!5e0!3m2!1sen!2sus!4v1692906955879!5m2!1sen!2sus'
  },
];
