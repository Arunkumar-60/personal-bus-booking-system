import React from 'react'
import {easeInOut, motion} from 'framer-motion';
import RootLayout from '../../layout/RootLayout';

const Hero = () => {

    const variants= {
        hidden : {opacity:0, y:-800},
        visible : {opacity:1 , y: 0}
    }
  return (
    <motion.div
        className='w-full flex-1 h-screen 
        bg-[url("./assets/heroBg.png")] 
        bg-cover bg-no-repeat bg-top relative'

        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{duration:0.85 , ease:easeInOut}}
    >
        <RootLayout className="absolute top-0 left-0 w-full h-full py-[9ch] 
        bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5
        flex items-center justify-start text-center flex-col gap-9">
            {/* {title section} */}
            
            {/* {search section} */}

        </RootLayout>
    </motion.div>
  )
}

export default Hero