import React, { useEffect, useState } from 'react';
import { Link, useActionData } from 'react-router-dom'; // Import Link
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars and FaTimes for the hamburger menu

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(0);
  const [open, setOpen]=useState(false);
  
  const NavItems = [
    {labels: "Home", link:"/"},
    {labels: "Service", link:"/services"},
    {labels: "tickets", link:"/tickets"},
    {labels: "about", link:"/about"},
  ]

  // handling the clicks
  const handleOpen = () => {
    setOpen(!open);

  }

  const handleClose = () => {
    setOpen(flase);
  }

  useEffect(()=> {
    const currentScrollState = window.scrollY;;

    if (currentScrollState > scrollPosition && currentScrollState>50) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setScrollPosition(currentScrollState)
  })

  return (
    <nav className='w-full top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg 
    transition-transform duration-300 z-50'>
      <div className="w-full h-full flex items-center justify-between">
        {/* {logo section} */}
        <Link  to="/" className='text-4xl text-red-500 font-bold'>
          Bus
        </Link>
        



        {/* {Hamburger menu} */}
        <div className="w-fit flex items-center justify-center cursor-pointer 
        flex-col gap-1 text-neutral-700 " onClick={handleOpen}>
          {
            open
              ? 
                <FaTimes className='w-5 h-5' />
              :
                <FaBars className='w-5 h-5'/>
          }
        </div>
        {/* {navlinks  and buttons} */}
        <div className={`${open ? 'flex absolute top-20 left-0 w-full h-auto md:relative' : "hidden"} 
        flex-1 w-full md:flex flex-col md:flex-row md:gap-14 xl:gap-16 md:items-center items-start border md:border-transparent border-neutral 
        md:p-0 sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-50 
        md:shadow-none sm:shadow-md shadow-md rounded-xl `}>
           {/* {navlink} */}
            <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row 
            flex-col gap-24 text-lg text-neutral-500 font-normal capitalize md:gap-4">
              {NavItems.map((item,ind)=>(
                <li key={ind}>
                <Link to={NavItems.link} className='hover:text-red-500 focus:text-red-500 ease-in-out duration-300' >{item.labels}</Link>
              </li>
              ))}
            </ul>
           {/* {button} */}
           <div className="flex items-center justify-center">
            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2.5 capitalize
            bg-red-500 hover:bg-transparent border border-red-500 hover:border-red-500 md:rounded-full rounded-xl 
            text-base font-normal text-neutral-50 hover:text-red-500 ease-in-out duration-300">sign in</button>
           </div>
        </div>
        
        
      </div>
    </nav>
  )

}



export default Navbar;
