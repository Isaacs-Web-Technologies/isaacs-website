'use client'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useRef } from 'react';


const StandingDigi=()=> {
  const leftColumnRef = useRef(null);
  const slideInUp = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    leftColumnRef.current.classList.add('slideInLeft');
    slideInUp.current.classList.add('slideInUp');  };

  // Apply intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(slideInUp, restartAnimation);
    return (
      <div className="justify-end px-20 max-md:px-5">
        <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <section ref={leftColumnRef} className="slideInLeft flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/img/standing-digi.png"
              aria-label="Image"
              role="img"
            />
          </section>
          <section ref={slideInUp} className="slideInUp flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <form className="items-stretch bg-white flex flex-col pl-2.5 pb-12 rounded-2xl">
                <div className="flex flex-col mb-5 pl-5 pr-8 pt-7 pb-12 items-start max-md:px-5">
                  <img
                    loading="lazy"
                     src="/img/stand1.png"
                    aria-label="Image"
                    role="img"
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                    Awesome Results
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3">
                    Description Lorem ipsum dolor sit <br /> amet, consectetur
                    adipiscing elit. <br /> Aliquam in placerat elit, consequat{" "}
                    <br /> tristique
                  </p>
                </div>
              </form>
              <form className="items-stretch bg-white flex flex-col mt-12 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-5 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  <img
                    loading="lazy"
                     src="/img/stand2.png"
                    aria-label="Image"
                    role="img"
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                    Awesome Results
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                    Description Lorem ipsum dolor sit <br /> amet, consectetur
                    adipiscing elit. <br /> Aliquam in placerat elit, consequat{" "}
                    <br /> tristique
                  </p>
                </div>
              </form>
            </div>
          </section>
          <section ref={slideInUp} className="slideInUp flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-7">
              <form className="items-stretch bg-white flex flex-col pl-2.5 pb-12 rounded-2xl">
                <div className="flex flex-col mb-4 pl-5 pr-8 pt-7 pb-12 items-start max-md:px-5">
                  <img
                    loading="lazy"
                     src="/img/stand3.png"
                    aria-label="Image"
                    role="img"
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                    Awesome Results
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                    Description Lorem ipsum dolor sit <br /> amet, consectetur
                    adipiscing elit. <br /> Aliquam in placerat elit, consequat{" "}
                    <br /> tristique
                  </p>
                </div>
              </form>
              <form className="items-stretch bg-white flex flex-col mt-11 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-4 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  <img
                    loading="lazy"
                     src="/img/stand4.png"
                    aria-label="Image"
                    role="img"
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                    Awesome Results
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                    Description Lorem ipsum dolor sit <br /> amet, consectetur
                    adipiscing elit. <br /> Aliquam in placerat elit, consequat{" "}
                    <br /> tristique
                  </p>
                </div>
              </form>
            </div>
          </section>
        </header>
      </div>
    );
  }

export default StandingDigi;
