import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { navItems } from '@/data/navItems';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
      <nav
        className={`fixed right-0 top-0 bg-blue-400 border-4 border-r-0 border-double border-white z-20 w-screen h-screen transition-transform duration-500 transform ${isOpen ? 'translate-x-0 xl:hidden' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full m-6">
          <button className="self-end text-white hover:bg-blue-800 py-1 px-4 rounded-lg" onClick={handleClose}>
            Close
          </button>
          <div className="mt-6">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.href}
                  passHref
                  onClick={handleClose}
                  className="text-2xl block my-2 p-2 text-white hover:bg-blue-800 w-full rounded-lg"
                >
                  {item.text}
                </Link>
                {index < navItems.length - 1 && (
                  <hr className="border-white h-1 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Sidebar;
