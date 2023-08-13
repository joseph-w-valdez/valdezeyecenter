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

  // disable scrolling when the sidebar is open by hiding the overflow
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`fixed top-0 left-0 w-screen bg-black ${isOpen ? 'h-screen bg-opacity-50' : 'bg-opacity-0 h-0'}`}>
      <nav
        ref={sidebarRef}
        className={`fixed right-0 top-0 bg-blue-400 border-4 border-r-0 border-double border-white z-20 w-80 h-full transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
    </div>
  );
};

export default Sidebar;
