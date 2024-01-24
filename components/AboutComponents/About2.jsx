import CircularProgressBar from './CircularProgressBar'; 
import ScrollEvent from '/hooks/ScrollEvent';

const About2=()=> {
    const { isScrolled } = ScrollEvent();

  return (
    <section className='"justify-center items-stretch flex flex-col'>
      <header className="flex-col overflow-hidden relative flex min-h-[512px] w-full justify-center items-stretch py-3 max-md:max-w-full">
      
      <span className="relative  flex flex-col max-md:mt-10">
     
          <div className="max-w-full justify-center relative w-[1140px] mx-auto px-3 py-6 max-md:pl-5">
          <div className="text-teal-500 text-sm leading-7 uppercase max-md:max-w-full">
                WHAT WE DO
        </div>
        <h1 className="text-neutral-700 text-3xl leading-10 mt-6 max-md:max-w-full">
                Fresh Ideas for Every Business
        </h1>
            <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">

            
            
              <div className="flex flex-row items-stretch  max-md:w-full max-md:ml-0">
                {/* progress bar */}
                <div className="flex flex-col w-[28%] items-center max-md:mt-10">
                  
                  <div className="flex-col text-neutral-700 text-center text-2xl leading-6 relative whitespace-nowrap overflow-hidden aspect-[1.055045871559633] justify-center items-stretch px-9 py-4 max-md:px-5">
                  <CircularProgressBar percentage={98} animate={isScrolled} />
                  </div>
                  <div className="flex-col text-neutral-700 text-center text-2xl leading-6 relative whitespace-nowrap overflow-hidden aspect-[1.055045871559633] justify-center items-stretch px-9 py-4 max-md:px-5">
                  <CircularProgressBar percentage={88} color="#2196f3" animate={isScrolled} />
     
                  </div>
                  <div className="flex-col text-neutral-700 text-center text-2xl leading-6 relative whitespace-nowrap overflow-hidden aspect-[1.055045871559633] justify-center items-stretch px-9 py-4 max-md:px-5">
                  <CircularProgressBar percentage={88} color="#2196f3" animate={isScrolled} />
                  </div>
                </div>
                {/* description of progress bar */}
                <div className="flex flex-col mt-10 w-[72%] items-stretch max-md:mt-10">
                  <h2 className="text-neutral-700 text-xl leading-8">
                    Creative Approach
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3">
                    Ea pro tibique comprehensam, sed ea verear numquam
                    molestie. Nam te omittam comprehensam.
                  </p>
                  <h2 className="text-neutral-700 text-xl leading-8 mt-11 max-md:mt-10">
                    Creative Approach
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3">
                    Ea pro tibique comprehensam, sed ea verear numquam
                    molestie. Nam te omittam comprehensam.
                  </p>
                  <h2 className="text-neutral-700 text-xl leading-8 mt-12 max-md:mt-10">
                    Creative Approach
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3.5">
                    Ea pro tibique comprehensam, sed ea verear numquam
                    molestie. Nam te omittam comprehensam.
                  </p>
                </div>
              </div>
                {/* image */}
                <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="/img/aboutus2.png"
                    alt="about us"
                  /> 
                </div>
            
            </div>
          </div>
       
       
      </span>
       
      </header>

    
    </section>
  );
}
export default About2;

{/* <div className="text-teal-500 text-sm leading-7 uppercase max-md:max-w-full">
WHAT WE DO
</div>
<h1 className="text-neutral-700 text-3xl leading-10 mt-6 max-md:max-w-full">
Fresh Ideas for Every Business
</h1> */}