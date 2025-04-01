import React from 'react'
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import MasterCardImg  from '../../assets/bus-assets/mastercard.png';
import CreditCardImg from '../../assets/bus-assets/creditcard.png';
import PaypalImg  from '../../assets/bus-assets/paypal.png'



const LogoText="Bus Ticket System";


const QuickLinksList=[
  { labels: 'about us', link: '/' },
  { labels: 'my account', link: '/' },
  { labels: 'reserve your ticket', link: '/' },
  { labels: 'create your account', link: '/' },
]

const SupportLinksList=[
  { labels: 'privacy policy', link: '/' },
  { labels: 'terms & conditions', link: '/' },
  { labels: 'help& support center', link: '/' },
  { labels: 'FAQs', link: '/' },
]

const TopRouteQuickLink = [
  {routeFrom:"hyderabad" ,routeTo:'vijayawada' },
  {routeFrom:"hyderabad", routeTo:'warangal'} ,
  {routeFrom:"hyderabad" ,routeTo:'bangalore'},
  {routeFrom:"bangalore", routeTo:'hyderabad'} ,
  {routeFrom:"hyderabad", routeTo:'Goa'} ,
]

const BankCardTypeImgs= [
  {cardType:"MasterCard",altText:"image of master card", link:MasterCardImg},
  {cardType:"CreditCard",altText:"image of credit card", link:CreditCardImg},
  {cardType:"Paypal",altText:"image of paypal", link:PaypalImg},
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
            {LogoText}
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
          {QuickLinksList.map((item,ind)=>(
            <Link  key={ind} to={item.link} className='block text-base 
            text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              {item.labels}
            </Link>
          ))}      
          </div>
        </div>


        <div className="col-span-1 space-y-5">
        <h1 className="text-lg text-neutral-100 font-semibold capitalize">
            top reserved routes
          </h1>
          <div className="space-y-2">
          {TopRouteQuickLink.map((item,ind)=>(
            <Link  key={ind} to='/' className='block text-base text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              {item.routeFrom} - {item.routeTo}
            </Link>
          ))}
          </div>
        </div>

        <div className="col-span-1 space-y-5">
        <h1 className="text-lg text-neutral-100 font-semibold capitalize">
            Support links
          </h1>
          <div className="space-y-2 py-2">
          {SupportLinksList.map((item,ind)=>(
            <Link  key={ind} to={item.link} className='block text-base 
            text-neutral-500 hover:text-neutral-300 
            font-normal ease-in-out duration-300 capitalize'>
              {item.labels}
            </Link>
          ))}
          </div>
        </div>
      </div>
      {/* seperator */}

      <div className="w-full h-px bg-neutral-800/50"></div>
      {/* copyright */}
      <div className="w-full flex items-center justify-between">
        <div className="text-sm text-neutral-600 font-normal">
          Copyright &copy; 2025. All rights reserved.
        </div>
        <div className="flex items-center gap-x-2">
          {BankCardTypeImgs.map((item,ind)=>(
            <div key={ind} className="">
            <img src={item.link} alt="" className="w-fit h-9 object-contain object-center" />
          </div>
          ))}
        </div>
      </div>
    </RootLayout>

    </div>
  )
};

export default Footer;

