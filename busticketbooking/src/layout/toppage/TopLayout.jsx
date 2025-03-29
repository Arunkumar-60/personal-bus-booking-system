import React from 'react'
import { motion } from 'framer-motion'


const TopLayout = ({BgImg, title, className}) => {

    const variants = {
        hidden :{opacity:0, y:-800},
        visible:{opacity:1,y:0}

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
        transition={{duration:0.85 , ease: "easeInOut"}}
    >
        TopLayout
    
    </motion.div>
  )
}

export default TopLayout