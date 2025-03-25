import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50">
      <div className="w-full h-full flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-4xl text-red-500 font-bold">
          Bus
        </Link>

        {/* Hamburger Menu */}

        {/* Navlinks and Buttons */}
      </div>
    </nav>
  );
};

export default Navbar;
