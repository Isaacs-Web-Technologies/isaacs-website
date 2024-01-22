"use client";
import { useState,useEffect } from "react";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";


const Navbar =()=> {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };
  useEffect(() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  }, []);
  return (
    
      <header 
      className={` flex flex-col bg-white z-[${setIsScrolled ? 2 : 0}]  shrink-0 box-border   shadow-sm w-full self-stretch  items-stretch mx-auto px-5 py-1`}
      >
        <nav className="flex flex-row w-full max-md:justify-start max-md:items-start max-sm:items-center">
          <div className="relative self-stretch flex flex-row gap-5 justify-between w-full items-center my-3">
            <div className="flex flex-row grow-[1.1674179080885916] self-stretch relative max-md:items-center max-md:w-full max-md:mr-auto max-md:my-auto max-sm:justify-start">
              <img
                src="/img/Transparent-logo.png"
                alt="Logo"
                className=" object-cover object-center 
                w-full shrink-0 box-border 
                overflow-hidden max-h-12 max-w-[91px] max-md:w-auto
                 max-md:grow max-md:mr-auto max-sm:max-h-[42px] max-sm:max-w-[53px] 
                 max-sm:min-w-[42px] max-sm:mr-auto p-1 
                 flex-start justify-start h-20 top-0 left-0 mr-4"
              />
              <div className="relative flex flex-col grow-[3.1608208817763215] mt-4 max-md:hidden max-md:flex-row max-md:mr-auto max-sm:hidden">
                <div className="relative self-stretch flex flex-row gap-4 justify-start max-md:justify-center">
                  <Link className="relative shrink-0 box-border" href="/">
                    Home
                  </Link>
                  <Link className="relative shrink-0 box-border" href="/Services">
                    Services
                    <br />
                    <br />
                  </Link>
                  <Link className="relative shrink-0 box-border ml-0.5 max-md:mx-0.5" href="/Projects">
                    Projects
                    <br />
                    <br />
                  </Link>
                  <Link className="relative shrink-0 box-border ml-3 max-md:mx-2.5" href="/About">
                    About
                    <br />
                    <br />
                  </Link>
                  <Link className="relative shrink-0 box-border ml-3 max-md:mx-2.5" href="/Contact">
                    Contact
                    <br />
                    <br />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row grow-0 w-auto ml-auto mt-px max-md:hidden max-sm:hidden">
              <div className="relative flex flex-row gap-4 ml-4">
                <button className="text-white text-center text-lg font-bold leading-4 uppercase whitespace-nowrap items-stretch self-center justify-center bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] my-auto px-8 py-4 rounded-3xl max-md:px-5">
                  <Link href= "/Contact">
                  Get a Quote
                  </Link>
                  
                </button>
              </div>
            </div>
          </div>
          {/* smaller screen navigation-icons */}
      <div onClick={handleHamburgerClick} className="flex md:hidden">
        
        { isHamburgerActive ? 
        (<AiOutlineClose size={30} color="black" />) 
        :
        (<AiOutlineMenu size={30} color="black" />) }
        
      </div>
      {/* smaller screen navigation */}
      <div className={isHamburgerActive ?   
      `md:hidden absolute mt-40 top-[4dvh] right-0 bottom-0 left-0 flex justify-center items-center w-full h-[20dvh] bg-primary text-white text-center ease-in duration-300` 
      : 
      `md:hidden absolute top-[60px] right-0 left-[-100%] flex justify-center items-center w-full h-[20dvh] bg-primary  text-white text-center ease-in duration-300 text-center'                                                                           `
      
    }>
      {/* smaller screen nav links */}
      <nav className="hamburger w-full">

        <ul className="font-bold  text-2xl list-none">
          <li onClick={handleHamburgerClick} className="py-4 ">
         <Link className = "text-white no-underline  hover:text-purple-700 cursor-pointer" href= "/">
         Home
         </Link>
          </li>
          <li onClick={handleHamburgerClick} className="py-5 ">
         <Link className = "text-white no-underline hover:text-purple-700 cursor-pointer" href= "/Services">
         Services
         </Link>
          </li>
          <li onClick={handleHamburgerClick} className="py-5 ">
         <Link className = "text-white no-underline hover:text-purple-700 cursor-pointer" href= "/">
         Project
         </Link>
          </li>
          <li onClick={handleHamburgerClick} className="py-5 ">
         <Link className = "text-white no-underline hover:text-purple-700 cursor-pointer" href= "/">
         About
         </Link>
          </li>
          <li onClick={handleHamburgerClick} className="py-5 ">
         <Link className = "text-white no-underline hover:text-purple-700 cursor-pointer" href= "/">
         Contact
         </Link>
          </li>
        </ul>

       
      </nav>
      
      </div>
        </nav>
        
      </header>
  
  );
}
export default Navbar