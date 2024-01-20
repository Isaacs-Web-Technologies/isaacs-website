'use client'
import Awesome from '../Components/HomeComponents/Awesome/Awesome'
import ClientCarousel from '../Components/HomeComponents/ClientCarousel/ClientCarousel'
import Contact from '../Components/HomeComponents/Contact/Contact'
import DigitalMarketing from '../Components/HomeComponents/DigitalMarketing/DigitalMarketing'
import Footer from '../Components/HomeComponents/Footer/Footer'
import FullServiceDigi from '../Components/HomeComponents/FullServiceDigi/FullServiceDigi'
import Navbar from '../Components/HomeComponents/Navbar/Navbar'
import Purpleseo from '../Components/HomeComponents/Purpleseo/Purpleseo'
import Smallpple from '../Components/HomeComponents/Smallpple/Smallpple'
import StandingDigi from '../Components/HomeComponents/StandingDigi/StandingDigi'
import UniCarousel from '../Components/HomeComponents/UniCarousel/UniCarousel'
import Afrowithphone from '../components/HomeComponents/Afrowithphone/Afrowithphone'
import Hero from '../components/HomeComponents/Hero/Hero'
import RollinNos from '../components/HomeComponents/RollingNos/RollingNos'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar />
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
    <Footer />
   
    </>
   
  )
}
