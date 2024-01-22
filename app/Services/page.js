'use client'
import StandingDigi from '../../components/HomeComponents/StandingDigi/StandingDigi'
import React from 'react'
import ServicesGrid from '../../components/ServiceComponents/servicesGrid'
import Meeting from '../../components/ServiceComponents/meeting'

const page = () => {
  return (
    <>
    <section className=''>
    <div className="items-stretch  bg-fuchsia-700 flex w-full flex-col mb-6 justify-center mx-auto px-12 py-12 max-md:max-w-full max-md:px-5">
            <div className="text-white text-4xl text-center font-extrabold leading-10 grow mt-40 max-md:max-w-full">
                 Services
            </div>
        </div>
    <StandingDigi />
    <ServicesGrid />
    <Meeting />
    </section>
        
    </>
  )
   
    
}

export default page
