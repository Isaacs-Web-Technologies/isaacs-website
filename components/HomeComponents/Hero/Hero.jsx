'use client'

const Hero=()=> {
  return (
    <section className="justify-center items-stretch flex flex-col">
      <header className="flex-col overflow-hidden relative flex min-h-[512px] w-full justify-center items-stretch py-3 max-md:max-w-full">
        <img
          src="/img/herobk.png"
          className="absolute h-full w-full object-cover object-center inset-0"
          alt="Background Image"
        />
         < img
          src="/img/herobk.png"
          alt="Background Image"
          className="absolute h-full transform scale-x-[-1] w-full object-cover object-center inset-0"
        />
        <span className="relative mt-20  flex flex-col max-md:mt-10">
          <div className="max-w-full justify-center relative w-[1140px] mx-auto px-3 py-6 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
              {/* left column */}
              <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                <div className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch">
                  Get free quote for
                </div>
                <div className="justify-center text-black text-5xl font-bold leading-7 capitalize self-stretch mt-16 mb-5 max-md:text-4xl max-md:leading-6 max-md:mt-10">
                  Search Engine <br /> <br /> Optimization.
                </div>
                <button
                  className="text-white text-center text-lg font-bold leading-4 uppercase whitespace-nowrap items-stretch self-center justify-center bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] mr-auto my-auto px-8 py-5 rounded-3xl max-md:px-5"
                  role="button"
                >
                  More About us
                </button>
                <img
                  src="/img/google rate.png"
                  className="aspect-[4.83] object-contain object-center w-[285px] max-w-full overflow-hidden mt-14 self-start max-md:mt-10"
                  alt="Image 1"
                />
              </div>
              {/* right column */}
               <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="/img/hero-right.png"
                  className="aspect-[1.42] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  alt="Image 2"
                />
              </div> 
            </div>
          </div>
        </span>
      </header>
    </section>
  );
}
export default Hero