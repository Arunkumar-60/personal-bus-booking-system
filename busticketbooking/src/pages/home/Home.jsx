import React from 'react'
import Hero from './Hero'
import Services from './services/Services'
import TopSearch from './topsearch/TopSearch'

const Home = () => {
  return (
    <div className="space-y-16 w-full min-h-screen pb-6">
      {/* {hero section} */}
      <Hero />

      {/* services */}
      <Services  />

      {/* top search  */}
      <TopSearch />
      </div>
  )
}

export default Home
