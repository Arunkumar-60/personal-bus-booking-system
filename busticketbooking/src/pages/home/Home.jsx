import React from 'react'
import About from '../about/About'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        {/* {hero section} */}
      <div className="w-full h-screen flex items-center justify-center">
        
      <h1 className="text-5xl text-neutral-950 font-bold">
        this is hero section
      </h1>
      </div>

      {/* {about section} */}
      <About/>
    </div>
  )
}

export default Home
