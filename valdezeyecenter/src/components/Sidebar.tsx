import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { navItems } from '@/data/navItems';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={sidebarRef}
      className={`fixed right-0 top-0 bg-blue-400 border-4 border-r-0 border-double border-white xl:hidden z-20 w-80 h-full transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex flex-col h-full m-6">
        <button className="self-end text-white hover:bg-blue-800 py-1 px-4 rounded-lg" onClick={handleClose}>
          Close
        </button>
        <div className="mt-6">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              passHref
              className="text-2xl block my-2 p-2 text-white hover:bg-blue-800 w-full rounded-lg"
              onClick={handleClose}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
