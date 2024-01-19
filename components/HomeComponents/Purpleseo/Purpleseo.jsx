/**
 * This code was generated by Builder.io.
 */
import * as React from "react";
import Image from "next/image";

function MyComponent(props) {
  return (
    <div className="items-stretch bg-fuchsia-700 flex w-full max-w-[1140px] flex-col justify-center mx-auto px-12 py-12 max-md:max-w-full max-md:px-5">
      <span className="flex justify-between gap-5 pl-2.5 pr-1.5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-4xl font-extrabold leading-10 grow mt-1.5 max-md:max-w-full">
          Check your website Seo here
        </div>
        <div className="items-stretch content-center self-stretch flex-wrap flex justify-between gap-0 pr-6 pb-2.5 max-md:max-w-full max-md:pr-5">
          <div className="max-w-[353px] items-stretch flex grow basis-[0%] flex-col justify-center px-4 py-3.5">
            <span className="items-stretch border border-[color:var(--shop_yeahtheme_com_demo_136552_htm_1366x568_default-Geyser,#CBD5E0)] bg-white flex justify-between gap-3 px-2.5 py-3 rounded-[40px] border-solid max-md:pr-5">
              <span className="text-white text-center text-base font-black leading-4 whitespace-nowrap items-center bg-purple-700 aspect-square justify-center h-[34px] px-2.5 rounded-[34px]">
                
              </span>
              <div className="text-lg font-bold bg-clip-text self-center grow whitespace-nowrap my-auto">
                <Image
                  src="/path/to/image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            </span>
          </div>
          <span className="text-white text-center text-lg font-bold leading-7 tracking-wide whitespace-nowrap items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] justify-center mt-4 px-6 py-3 rounded-3xl self-start max-md:px-5">
            Check now
          </span>
        </div>
      </span>
    </div>
  );
}