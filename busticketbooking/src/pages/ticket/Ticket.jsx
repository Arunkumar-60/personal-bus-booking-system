import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'

const Ticket = () => {
  return (
    <div className='w-full space-y-12 pb-16'>
        {/* top Layout */}
        <TopLayout BgImg={'https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jgp'}
        title={'reserve your ticket'}
        />
    </div>
  )
}

export default Ticket