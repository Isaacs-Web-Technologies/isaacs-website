'use client'
import Awesome from '../components/HomeComponents/Awesome/Awesome'
import HContact from '../components/HomeComponents/Contact/HContact'
import DigitalMarketing from '../components/HomeComponents/DigitalMarketing/DigitalMarketing'
import FullServiceDigi from '../components/HomeComponents/FullServiceDigi/FullServiceDigi'
import Purpleseo from '../components/HomeComponents/Purpleseo/Purpleseo'
import Smallpple from '../components/HomeComponents/Smallpple/Smallpple'
import StandingDigi from '../components/HomeComponents/StandingDigi/StandingDigi'
import Afrowithphone from '../components/HomeComponents/Afrowithphone/Afrowithphone'
import Hero from '../components/HomeComponents/Hero/Hero'
import RollinNos from '../components/HomeComponents/RollingNos/RollingNos'
import CarouselComponent from '../components/HomeComponents/CaseStudies/CarouselComponent'
import Txt from '../components/HomeComponents/CaseStudies/txt'



export default function Home() {
  return (
    <>
    <Hero /> 
    <DigitalMarketing /> 
    <Smallpple />
    <FullServiceDigi />
    <StandingDigi /> 
    <RollinNos />
    <Awesome />
    <Afrowithphone />
    <Txt />
    {/* <CarouselComponent /> */}
    <HContact />
    <Purpleseo/>

    </>
   
  )
}
