import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars and FaTimes for the hamburger menu

const Navbar = () => {
  
  const NavItems = [
    {labels: "Home", link:"/"},
    {labels: "Service", link:"/services"},
    {labels: "tickets", link:"/tickets"},
    {labels: "about", link:"/about"},
  ]

  return (
    <nav className='w-full top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50'>
      <div className="w-full h-full flex items-center justify-between">
        {/* {logo section} */}
        <Link  to="/" className='text-4xl text-red-500 font-bold'>
          Bus
        </Link>
        {/* {Hamburger menu} */}
        {/* {navlinks  and buttons} */}
        {/* {navlink} */}
        {/* {button} */}
      </div>
    </nav>
  )

}



export default Navbar;
