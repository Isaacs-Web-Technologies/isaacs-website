'use client'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useRef,useState } from 'react';

const Smallpple=() =>{
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimation = () => {
    if (!hasAnimated) {
      cardRef.current.classList.add('slideInLeft','slideInRight');
      setHasAnimated(true);
    }
  };

  useIntersectionObserver(cardRef, handleAnimation);
  return (
    <section className="justify-center px-20 max-md:px-5 pb-12  ">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div ref={cardRef} className="slideInLeft flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="/img/small-people.png"
            className="aspect-[1.31] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
            alt="Image"
          />
        </div>
        <div ref={cardRef} className="slideInRight flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
          <header className="flex flex-col mt-4 max-md:max-w-full max-md:mt-10">
            <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
              Grow Traffic & Increase Revenuezzzzz
            </h2>
            <h3 className="text-black text-lg font-bold leading-7 tracking-normal uppercase self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              Appear On the Front Page of Google!
            </h3>
            <p className="text-black text-lg leading-7 tracking-normal uppercase self-stretch mt-14 max-md:max-w-full max-md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras{" "}
              <br /> bibendum auctor justo, ac bibendum neque sollicitudin ac.{" "}
              <br /> Duis feugiat non urna nec tincidunt. Sed nec est eget sem{" "}
              <br /> sodales ultricies vitae a elit. Donec velit massa <br />,
              dapibus eu facilisis eu.
            </p>
            <button
              className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5"
              aria-label="More About us"
              role="button"
            >
              <span className="justify-between items-stretch flex gap-3 px-0.5">
                <div className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                  More About us
                </div>
                <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
                  
                </div>
              </span>
            </button>
          </header>
        </div>
      </div>
    </section>
  );
}
export default Smallpple