import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
  return (
    <Link href="" className="bg-white w-[50px] h-[50px] rounded-full p-4 shadow-md fixed bottom-6 right-6 border border-2 border-gray-600 hover:bg-gray-600 text-gray-600 hover:text-white">
          <FaArrowUp className=" text-lg" />
      </Link>
  );
}
