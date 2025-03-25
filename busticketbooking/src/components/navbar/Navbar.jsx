import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaBars } from 'react-icons/fa'; // Import FaBars for the hamburger menu

const Navbar = () => {
  return (
    <nav className="w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50">
      <div className="w-full h-full flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-4xl text-red-500 font-bold">
          Bus
        </Link>

        {/* Hamburger Menu */}
        <div className="w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700">
          <FaBars />
        </div>

        {/* Navlinks */}
        <div className="flex-1 w-full flex items-center justify-end">
          <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-800 font-normal">
            <li>
              <Link to="/" className="hover:text-red-500 ease-in-out duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 ease-in-out duration-300">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
