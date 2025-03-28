import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import TopSearchCard from '../../../components/topsearch/TopSearchCard'

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
        {/* tag */}
        <div className="w-full flex items-center justify-center text-center py-10">
            <h1 className="text-3xl text-neutral-800 font-bold capitalize">
                top search <span className="text-red-500">routes</span>
            </h1>
        </div>

        {/* top search ticket route cards */}
        <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard routeForm={"hyderabad"} routeTo={'vijayawada'} timeDuration={'10 hrs'} price={1800}/> 
        <TopSearchCard routeForm={"hyderabad"} routeTo={'warangal'} timeDuration={'3 hrs'} price={500}/> 
        <TopSearchCard routeForm={"hyderabad"} routeTo={'bangalore'} timeDuration={'12 hrs'} price={2800}/>
        <TopSearchCard routeForm={"bangalore"} routeTo={'hyderabad'} timeDuration={'12 hrs'} price={2800}/> 
        <TopSearchCard routeForm={"hyderabad"} routeTo={'Goa'} timeDuration={'14 hrs'} price={3600}/> 
        <TopSearchCard routeForm={"vijayawada"} routeTo={'bangalore'} timeDuration={'8 hrs'} price={1500}/> 
        <TopSearchCard routeForm={"bangalore"} routeTo={'goa'} timeDuration={'18 hrs'} price={4200}/> 
        <TopSearchCard routeForm={"vijayawada"} routeTo={'goa'} timeDuration={'14 hrs'} price={3800}/> 
        </div>
    </RootLayout>
  )
}

export default TopSearch