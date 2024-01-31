'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const AboutBot=()=> {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    leftColumnRef.current.classList.add('slideInLeft');
    rightColumnRef.current.classList.add('slideInRight');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(rightColumnRef, restartAnimation);

  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div ref={leftColumnRef} className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
          <img
            src="/img/aboutBot.png"
            alt="aboutBot"
          />
        </div>
        <div ref={rightColumnRef}  className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch px-5 max-md:max-w-full max-md:mt-10">
            <div className="text-neutral-700 text-3xl leading-10 max-md:max-w-full">
              Save Time & Effort
            </div>
            <div className="text-neutral-700 text-3xl leading-10 mt-2.5 max-md:max-w-full">
              With the Ewebot
            </div>
            <div className="flex justify-between gap-5 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-5 flex-col border-solid border-teal-500" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-neutral-700 text-xl leading-8">
                  First Working Process
                </div>
                <div className="text-gray-500 text-base leading-6 mt-1.5">
                  For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow.
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-[19px] flex-col border-solid border-teal-500" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-neutral-700 text-xl leading-8">
                  Dedicated Team Member
                </div>
                <div className="text-gray-500 text-base leading-6 mt-2.5">
                  Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget.
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-[19px] flex-col mt-1 border-solid border-teal-500" />
              <div className="text-neutral-700 text-xl leading-8 grow shrink basis-auto">
                24/7 Hours Support
              </div>
            </div>
            <div className="flex flex-col pl-11 items-end max-md:max-w-full max-md:pl-5">
              <div className="text-gray-500 text-base leading-6 max-w-[357px]">
                Lorem ipsum dolor sit amet, vix an natum labitur eleif, mel amet laoreet prois menandri.
              </div>
              <div className="text-white text-center text-base leading-5 capitalize self-stretch mt-16 max-md:mt-10">
                <a href="#" role="button" aria-label="Discover More">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutBot;