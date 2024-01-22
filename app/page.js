'use client'
import Awesome from '../components/HomeComponents/Awesome/Awesome'
import ClientCarousel from '../components/HomeComponents/ClientCarousel/ClientCarousel'
import Contact from '../components/HomeComponents/Contact/Contact'
import DigitalMarketing from '../components/HomeComponents/DigitalMarketing/DigitalMarketing'
import FullServiceDigi from '../components/HomeComponents/FullServiceDigi/FullServiceDigi'
import Purpleseo from '../components/HomeComponents/Purpleseo/Purpleseo'
import Smallpple from '../components/HomeComponents/Smallpple/Smallpple'
import StandingDigi from '../components/HomeComponents/StandingDigi/StandingDigi'
import UniCarousel from '../components/HomeComponents/UniCarousel/UniCarousel'
import Afrowithphone from '../components/HomeComponents/Afrowithphone/Afrowithphone'
import Hero from '../components/HomeComponents/Hero/Hero'
import RollinNos from '../components/HomeComponents/RollingNos/RollingNos'


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
    <UniCarousel />
    <ClientCarousel />
    <Contact />
    <Purpleseo/>
    </>
   
  )
}
