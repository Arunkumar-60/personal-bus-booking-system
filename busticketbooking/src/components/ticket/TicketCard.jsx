import React from 'react'
import { FaBus, FaStar, FaWifi } from 'react-icons/fa'
import { TbAirConditioning } from 'react-icons/tb'
import { RiVipFill } from 'react-icons/ri'
import { MdOutlineChair } from 'react-icons/md'
import { IoTvSharp } from 'react-icons/io5'
import { GiWaterBottle, GiCharging } from 'react-icons/gi'

const TicketCard = ({icon: Icon, busName, routeFrom, routeTo, arrivalTime, departureTime, 
    price, availableSeats}) => {
  return (
    <div className='w-full rounded-xl p-5 
        border-2 border-neutral-300 space-y-4'>
            <div className="space-y-5 w-full py-4 border border-neutral-300/60 pb-4">
                {/* route */}
                <div className="space-y-0 py-2">
                    {/* bus info */}
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <FaBus className='h-5 w-5 text-red-500 '/>
                            <p className="text-lg text-neutral-700 font-semibold">
                                {busName}
                            </p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <TbAirConditioning className='w-4 h-4 text-red-500'/>
                                <p className="text-xs text-neutral-600 font-normal capitalize">AC</p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <FaStar className='w-4 h-4 text-yellow-500'/>
                                <p className="text-xs text-yellow-600 font-normal pt-0.5">4.5</p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <RiVipFill className='w-4 h-4 text-red-500'/>
                                <p className="text-xs text-neutral-600 font-normal capitalize">Sofa</p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                                <MdOutlineChair className='w-4 h-4 text-red-500 -rotate-90'/>
                                <p className="text-xs text-neutral-600 font-normal capitalize">{availableSeats} seats</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* route */}
                <div className="space-y-0.5 ">
                    {/* bus info */}
                    <div className="w-full flex items-center justify-between gap-x-2.5 ">
                        <h1 className="text-2xl text-neutral-600 font-semibold">
                            {arrivalTime}
                        </h1>

                        <div className="flex-1 border-dashed border border-neutral-300 relative">
                            <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                                <Icon className='w-8 h-8 text-red-500'/>
                            </p>
                        </div>

                        <h1 className="text-2xl text-neutral-600 font-semibold">
                            {departureTime}
                        </h1>
                    </div>

                    <div className="w-full flex items-center justify-between gap-x-5 ">
                        <p className="text-base text-neutral-500 font-normal">
                            {routeFrom}
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            {routeTo}
                        </p>
                    </div>
                </div>

                {/* facilities */}
                <div className="w-full flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-x-1">
                        <FaWifi className='w-3 h-3 text-neutral-500'/>
                        <p className="text-xs text-neutral-600 font-normal capitalize">internet</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <IoTvSharp className='w-3 h-3 text-neutral-500'/>
                        <p className="text-xs text-neutral-600 font-normal capitalize">TV</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiWaterBottle className='w-3 h-3 text-neutral-500'/>
                        <p className="text-xs text-neutral-600 font-normal capitalize">snacks</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiCharging className='w-3 h-3 text-neutral-500'/>
                        <p className="text-xs text-neutral-600 font-normal capitalize">mobile charging</p>
                    </div>
                </div>
            </div>

            {/* price, available seats, and reserve button */}
            <div className="w-full flex items-center justify-between">
                <h1 className='text-xl text-neutral-700 font-semibold'>
                   Rs. {price} <span className='text-xl'> </span>
                </h1>

                <button className="w-fit px-5 capitalize py-1.5 border-2 bg-red-500 hover:bg-transparent border-red-500 hover:border-red-500 text-neutral-50 hover:text-red-500 rounded-xl text-sm font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    reserve seat
                </button>
            </div>
    </div>
  )
}

export default TicketCard