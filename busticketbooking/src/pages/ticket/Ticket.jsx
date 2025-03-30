import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'
import ReserveTicketImg from '../../assets/bus-assets/reserveseat.jpg'

const Ticket = () => {
  const TopLayoutMappingData = [
    {image_url:ReserveTicketImg,title_text:"reserve your ticket"}
  ]

  return (
    <div className='w-full space-y-12 pb-16'>
      {/* top layout */}
      
      
      {TopLayoutMappingData.map((item,ind)=>(
        <TopLayout key={ind}
        bgImg={item.image_url}
        title={item.title_text}/>
      ))}
      </div>
  )
}

export default Ticket
