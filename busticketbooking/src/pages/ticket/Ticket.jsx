import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'
import ReserveTicketImg from '../../assets/bus-assets/reserveseat.jpg'
import RootLayout from '../../layout/RootLayout'
import { motion } from 'framer-motion'
import Search from '../home/search/Search'
import Filter from './filter/Filter'

const Ticket = () => {
  const TopLayoutMappingData = [
    {image_url:ReserveTicketImg,title_text:"reserve your ticket"}
  ]

  return (
    <div className='w-full space-y-12 pb-16'>
        {/* top Layout */}
        {/* <TopLayout BgImg={image_url}
        title={title_text}
        />
    </div> */}
      {/* top layout */}
      
      
      {TopLayoutMappingData.map((item,ind)=>(
        <TopLayout key={ind}
        bgImg={item.image_url}
        title={item.title_text}/>
      ))}

      
      <RootLayout className='space-y-12 relative'>

        {/* search section */}
        <div className="space-y-5 w-full bg-neutral-50 py-4
        flex items-center justify-center flex-col sticky top-0 z-30">
        <motion.h1
          initial={{opacity:0,y:-800}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-800}}
          transition={{duration:1.35, ease:"easeOut"}}
          className='text-neutral-700 text-5xl font-bold capitalize py-10'>
            Want to change the route?
        </motion.h1>

        {/* search  */}
        <Search/>

        </div>

        {/* searched bus tickets */}
        <div className="w-full h-auto grid grid-cols-4 gap-16">

            {/* filetr section */}
            <div className="col-span-1">
              <Filter className='space-y-4 sticky top-52 z-20'/>
            </div>

            {/* search tickets  */}
            search-tickets

        </div>

      </RootLayout>
      </div>


  )
}

export default Ticket