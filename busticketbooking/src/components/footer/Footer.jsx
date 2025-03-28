import React from 'react'
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const logo="Bus Ticket System";

const TopRouteQuickLink = [
  {routeForm:"hyderabad" ,routeTo:'vijayawada' },
  {routeForm:"hyderabad", routeTo:'warangal'} ,
  {routeForm:"hyderabad" ,routeTo:'bangalore'},
  {routeForm:"bangalore", routeTo:'hyderabad'} ,
  {routeForm:"hyderabad", routeTo:'Goa'} ,
]

const Footer = () => {
  return (


    <div className='w-full h-auto bg-neutral-950 py-12'>

    <RootLayout className="space-y-10">
      {/* footer content */}
      <div className="w-full grid grid-cols-5 gap-8">
        <div className="col-span-2 .space-y-8 md:pr-10 pr-0">
          <div className="space-y-3">
            {/* logo */}
          <Link to="/" className='text-6xl text-red-500 font-bold p-1'>
            {logo}
          </Link>

          <p className="text-sm text-neutral-500 font-normal p-1">
            Booking ticket through online platform to make comfortable for passenger. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, eaque harum. Ullam dolorem sapiente officia iste nam et aut facilis?
          </p>
          </div>

          {/* social links */}
          <div className="w-full flex items-center gap-x-5 p-1">
          <div className="w-11 h-11 rounded-xl 
            bg-neutral-800/40 hover:bg-fuchsia-500 
            flex items-center justify-center 
            cursor-pointer ease-in-out duration-500">
              <FaInstagram className='w-5 h-5 text-neutral-50'/>
            </div>
            
            <div className="w-11 h-11 rounded-xl 
            bg-neutral-800/40 hover:bg-blue-500 
            flex items-center justify-center 
            cursor-pointer ease-in-out duration-500">
              <FaFacebookF className='w-5 h-5 text-neutral-50'/>
            </div>
            
            <div className="w-11 h-11 rounded-xl 
            bg-neutral-800/40 hover:bg-red-500 
            flex items-center justify-center 
            cursor-pointer ease-in-out duration-500">
              <FaYoutube className='w-5 h-5 text-neutral-50'/>
            </div>
            
            <div className="w-11 h-11 rounded-xl 
            bg-neutral-800/40 hover:bg-blue-400 
            flex items-center justify-center 
            cursor-pointer ease-in-out duration-500 ">
              <FaXTwitter className='w-5 h-5 text-neutral-50 '/>
            </div>
            
            
          </div>
          

        </div>

        <div className="col-span-1 space-y-5">
          <h1 className="text-lg text-neutral-100 font-semibold capitalize">
            quick links
          </h1>
          <div className="space-y-2">
          <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              about us
            </Link>

            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              my account
            </Link>

            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              reserve your ticket
            </Link>

            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              create your account
            </Link>

            
            
          </div>
        </div>
        <div className="col-span-1 space-y-5">
        <h1 className="text-lg text-neutral-100 font-semibold capitalize">
            top reserved routes
          </h1>
          <div className="space-y-2">
          {TopRouteQuickLink.map((item,ind)=>(
            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              {item.routeForm} - {item.routeTo}
            </Link>
          ))}
          </div>
        </div>
        <div className="col-span-1 space-y-5"></div>
      </div>
      {/* seperator */}

      <div className="w-full h-px bg-neutral-800/50"></div>
      {/* copyright */}
      <div className="w-full flex items-center justify-between"></div>
    </RootLayout>

    </div>
  )
};

export default Footer;

