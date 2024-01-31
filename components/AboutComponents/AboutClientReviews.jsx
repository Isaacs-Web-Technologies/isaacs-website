'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const AboutClientReviews=()=> {
  const slideInDownRef = useRef(null);
  const slideInUpRef = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    slideInDownRef.current.classList.add('slideInDown');
    slideInUpRef.current.classList.add('slideInUp');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(slideInDownRef, restartAnimation);
  useIntersectionObserver(slideInUpRef, restartAnimation);

  return (
    <div className="flex flex-col items-center px-5">
      <header className="text-teal-500 text-center text-sm leading-7 uppercase whitespace-nowrap">CLIENT TESTIMONIALS</header>
      <h1 className="text-neutral-700 text-center text-3xl leading-10 whitespace-nowrap mt-4">Some reviews from our clients</h1>
      <div ref={slideInDownRef} className="self-stretch w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-20 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-w-[418px] mr-2.5">Praesent eget iaculis nibh, dictum euismod sem. Aenean maximus, orci nec malesuada aliquet, ex orci eleifend ligula, commodo faucibus justo enim eget enim.</p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-3 self-start max-md:ml-2.5">Jimmy Ron</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 self-start max-md:ml-2.5">Founder</div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-16 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet urna id justo pharetra sodales lobortis vel leo. Nullam ut dui ac urna auctor</p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-4 self-start max-md:ml-2.5">Lina Doris</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 mt-1.5 self-start max-md:ml-2.5">COE, Forest Corp.</div>
            </div>
          </div>
        </div>
      </div >
      <div ref={slideInUpRef} className="self-stretch w-full mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-16 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet urna id justo pharetra sodales lobortis vel leo. Nullam ut dui ac urna auctor</p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-4 self-start max-md:ml-2.5">Wisper Collin</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 self-start max-md:ml-2.5">Orlando, US</div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-20 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talent, creative ability, manual skill, and</p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-3 self-start max-md:ml-2.5">Silviia Garden</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 mt-1.5 self-start max-md:ml-2.5">Customer</div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
export default AboutClientReviews;