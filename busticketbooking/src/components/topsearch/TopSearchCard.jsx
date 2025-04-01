import React from 'react'
import { FaWifi } from 'react-icons/fa'
import { IoTvSharp } from 'react-icons/io5'

import { GiCharging, GiWaterBottle } from 'react-icons/gi'

const TopSearchCard = ({routeFrom, routeTo, timeDuration, price}) => {
  return (
    <div className='w-full rounded-xl p-5 
    border-2 border-neutral-300 space-y-10 '>
        <div className="space-y-3.5 w-full py-4 ">
            {/* route */}
            <div className="space-y-0 py-2">
                <div className="w-full flex items-center justify-between">
                    <p className="text-xs text-neutral-400 font-normal capitalize">From</p>
                    <p className="text-xs text-neutral-400 font-normal capitalize">To</p>
                </div>

                <div className="w-full flex items-center justify-between gap-x-3">
                    {/* from */}
                    <h1 className='text-xl text-neutral-600 font-semibold capitalize'>{routeFrom}</h1>
                    {/* time duration */}
                    <div className="flex-1 border-dashed border border-neutral-400 relative">
                        <p className="absolute w-fit px-3 h-6 
                        top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                        bg-neutral-50 rounded-full flex items-center justify-center
                         text-sm text-neutral-500 font-normal 
                         border-dashed border border-neutral-400 capitalize">
                            {timeDuration}
                        </p>

                    </div>
                    {/* To */}
                    <h1 className='text-xl text-neutral-600 font-semibold capitalize'>{routeTo}</h1>
                    
                </div>
            </div>

            {/* facilities */}
            <div className="w-full flex items-center gap-3 flex-wrap">
                {/* first */}
                <div className="flex items-center gap-x-1">
                    <FaWifi className='w-3 h-3 text-neutral-500'/>
                    <p className="text-xs text-neutral-600 font-normal capitalize">
                        internet
                    </p>
                </div>

                {/* second */}
                <div className="flex items-center gap-x-1">
                    <IoTvSharp className='w-3 h-3 text-neutral-500'/>
                    <p className="text-xs text-neutral-600 font-normal capitalize">
                        TV
                    </p>
                </div>

                
                {/* third */}
                <div className="flex items-center gap-x-1">
                    <GiWaterBottle className='w-3 h-3 text-neutral-500'/>
                    <p className="text-xs text-neutral-600 font-normal capitalize">
                        snacks
                    </p>
                </div>

                {/* fourth */}
                <div className="flex items-center gap-x-1">
                    <GiCharging className='w-3 h-3 text-neutral-500'/>
                    <p className="text-xs text-neutral-600 font-normal capitalize">
                        mobile charging
                    </p>
                </div>

            </div>
        </div>

            {/* price */}

        <div className="w-full flex items-center justify-between">
            
            <h1 className='text-xl text-neutral-700 font-semibold'>
               Rs. {price}
            </h1>
            <button className="w-fit px-5 capitalize py-1.5 border-2
            bg-red-500 hover:bg-transparent border-red-500 hover:border-red-500 text-neutral-50 hover:text-red-500
            rounded-xl text-sm font-normal flex items-center justify-center gap-x-2 ease-in-out duration-300">
                reserve seat
            </button>
        </div>
    </div>
  )
}

export default TopSearchCard