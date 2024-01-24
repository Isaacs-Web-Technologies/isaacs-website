'use client'
const AboutTeam=()=> {
  return (
    <div className="flex flex-col px-5">
      <header className="text-teal-500 text-center text-sm leading-7 uppercase self-center whitespace-nowrap">
        WHY ARE WE THE BEST?
      </header>

      <h1 className="text-neutral-700 text-center text-3xl leading-10 self-center whitespace-nowrap mt-4">
        Meet Our Team
      </h1>

      <form className="self-stretch w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-center w-full px-20 py-8 rounded-xl max-md:mt-8 max-md:px-5">
              <div className="shadow-sm bg-teal-500 flex w-[100px] shrink-0 h-[77px] flex-col rounded-[100px]" />
              <h2 className="text-neutral-700 text-center text-xl leading-8 whitespace-nowrap mt-12 max-md:mt-10">
                Maria Murphy
              </h2>
              <p className="text-gray-500 text-center text-base leading-6 whitespace-nowrap mt-2">
                SEO ans SMM specialist
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-center w-full px-20 py-9 rounded-xl max-md:mt-8 max-md:px-5">
              <div className="shadow-sm bg-zinc-300 flex w-[100px] shrink-0 h-[77px] flex-col rounded-[100px]" />
              <h2 className="text-neutral-700 text-center text-xl leading-8 whitespace-nowrap mt-12 max-md:mt-10">
                William matthews
              </h2>
              <p className="text-gray-500 text-center text-base leading-6 whitespace-nowrap mt-2.5">
                CEO / Founder
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col justify-center items-center w-full px-16 py-8 rounded-xl max-md:mt-8 max-md:px-5">
              <div className="flex w-[132px] max-w-full flex-col items-center">
                <div className="shadow-sm bg-teal-500 flex w-[100px] shrink-0 h-[77px] flex-col rounded-[100px]" />
                <h2 className="text-neutral-700 text-center text-xl leading-8 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
                  Lina D’Souja
                </h2>
                <p className="text-gray-500 text-center text-base leading-6 self-stretch whitespace-nowrap mt-2">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      <a href="#" className="items-stretch shadow-sm bg-[linear-gradient(269deg,#8F00FF_0%,#C356F7_50%,#7000FF_100%)] self-center flex w-[172px] max-w-full flex-col mt-32 pt-4 pb-1 px-10 rounded-3xl max-md:mt-10 max-md:px-5">
        <div className="justify-between items-stretch flex gap-3 px-0.5">
          <span className="text-white text-center text-base leading-5 capitalize">
            All Team
          </span>
          <span className="text-white text-center text-base font-black leading-4 capitalize self-center my-auto">
            
          </span>
        </div>
      </a>
    </div>
  );
}
export default AboutTeam