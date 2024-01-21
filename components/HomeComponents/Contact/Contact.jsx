'use client'

const Contact=()=> {
  return (
    <div className="items-center bg-slate-50 flex flex-col justify-center pl-5 pr-32 py-12 max-md:pl-5 max-md:pr-20 max-sm:pr-9">
      <div className="max-w-[1794px] w-full mt-16 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/img/contact.png"
              alt="Description of the image"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="items-center content-center flex-wrap shadow-lg bg-white bg-opacity-0 flex grow flex-col w-full pl-8 pr-12 pt-5 pb-12 max-md:max-w-full max-md:px-5 max-sm:mr-0">
              <div className="justify-center text-black text-base leading-6 self-stretch max-md:max-w-full">
                <span className="text-teal-500">ANALYSIS</span> <br /> <br />
                <span className="font-bold leading-7">
                  {" "}
                  Get Free SEO Analysis?{" "}
                </span>{" "}
                <br /> <br />
              </div>
              <div className="bg-violet-300 self-stretch flex w-full shrink-0 h-px flex-col mr-3 mt-36 max-md:mr-2.5 max-md:mt-10" />
              <div className="bg-violet-300 self-stretch flex w-full shrink-0 h-px flex-col mr-3 mt-10 max-md:mr-2.5" />
              <div className="bg-violet-300 self-stretch flex w-full shrink-0 h-px flex-col mr-3 mt-10 max-md:mr-2.5" />
              <div className="bg-violet-300 self-stretch flex w-full shrink-0 h-px flex-col mr-3 mt-10 max-md:mr-2.5" />
              <div className="bg-violet-300 self-stretch flex w-full shrink-0 h-px flex-col mr-3 mt-10 max-md:mr-2.5" />
              <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-20 px-10 py-4 rounded-3xl self-start max-md:px-5">
                <span className="justify-between items-stretch flex gap-3 px-0.5">
                  <div className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                    More About us
                  </div>
                  <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
                    {" "}
                    {" "}
                  </div>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact