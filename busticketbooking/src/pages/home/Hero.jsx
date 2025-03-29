import React from 'react'
import { motion } from 'framer-motion';
import RootLayout from '../../layout/RootLayout';
import Search from './search/Search';

const Hero = () => {

    const variants= {
        hidden : {opacity:0, y:-800},
        visible : {opacity:1 , y: 0}
    }
  return (
    <motion.div
        className='w-full flex-1 h-screen 
        bg-[url("./assets/pexels-eslames1-28310142.jpg")] 
        bg-cover bg-no-repeat bg-top relative'

        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{duration:0.85 , ease:"easeInOut"}}
    >
        <RootLayout className="absolute top-0 left-0 w-full h-full py-[9ch] 
        bg-gradient-to-b from-neutral-50/30 via-neutral-50/10 to-transparent
        flex items-center justify-start text-center flex-col gap-9 pt-10">
            {/* {title section} */}
            <div className="space-y-2">
            <motion.p
                initial={{opacity:0,y:-800}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-800}}
                transition={{duration:2, ease:"easeOut"}}
                className='text-neutral-50 text-lg font-medium capitalize'>
                    get your bus ticket
                </motion.p>
                
                <motion.h1
                initial={{opacity:0,y:-800}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-800}}
                transition={{duration:2, ease:"easeOut"}}
                className='text-neutral-800 text-5xl font-bold capitalize'>
                    find best bus for you
                </motion.h1>
                
            </div>
            {/* {search section} */}
            <Search/>

        </RootLayout>
    </motion.div>
  )
}

export default Hero
