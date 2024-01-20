import Image from "next/image";

const ClientCarousel=() =>{
  return (
    <div className="items-center bg-white flex flex-col pt-12 px-16 max-md:px-5">
      <span className="items-start flex w-full max-w-[1480px] flex-col mt-8 mx-auto pt-2.5 pb-4 px-2.5 max-md:max-w-full">
        <div className="text-teal-500 text-center text-sm font-extrabold leading-8 uppercase self-center whitespace-nowrap">
          RECENT PROJECTS
        </div>
        <div className="text-neutral-700 text-center text-3xl font-extrabold leading-10 self-center whitespace-nowrap mt-2">
          Our Latest Case Studies
        </div>
        <div className="flex flex-col relative shrink-0 box-border mt-5 mx-auto">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/img/seobestpractices.jpg"
                className=" object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
                alt="Image 1"
              />
              <div className="relative shrink-0 box-border h-auto mt-5">
                Enter some text...
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/img/importance.jpg"
                className=" object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
                alt="Image 2"

              />
              <div className="relative shrink-0 box-border h-auto mt-5">
                Enter some text...
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/img/starbucks.jpg"
                className=" object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
                alt="Image 3"
              />
              <div className="relative shrink-0 box-border h-auto mt-5">
                Enter some text...
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row mt-auto px-16 max-md:max-w-full max-md:px-5" />
        <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] self-center flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl max-md:px-5">
          <span className="justify-between items-stretch flex gap-3 px-0.5">
            <div className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
              More About us
            </div>
            <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
              
            </div>
          </span>
        </button>
      </span>
     
    </div>
  );
}
export default ClientCarousel
