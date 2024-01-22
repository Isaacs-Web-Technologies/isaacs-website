'use client'

const  ServicesGrid=()=> {
  return (
    <section className="flex flex-col items-center px-5">
      <h3 className="text-teal-500 text-center text-sm leading-7 uppercase whitespace-nowrap">
        OUR SERVICES
      </h3>
      <h4 className="text-neutral-700 text-center text-3xl leading-10 whitespace-nowrap mt-6">
        Let’s Check Our Services
      </h4>
      <div className="self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services1.png"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <h4 className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                Social Media Strategy
              </h4>
              <p className="text-gray-500 text-center text-base leading-6 mt-3">
                Proin hendrerit vestibulum ipsum non malesuada. Nunc ut sem
                cursus nisl tincidunt dictum et vel eros.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-5 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services2.png"
                className="aspect-[1.17] object-contain object-center w-[103px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2">
                Online Analysis
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2">
                Suspendisse mattis est vitae purus imperdiet vestibulum. Nunc
                ornare ligula vel diam porttitor.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-6 py-9 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services3.png"
                className="aspect-[1.23] object-contain object-center w-[103px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-4">
                Web Development
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-4">
                Sed in augue tristique, consectetur urna at, blandit ex. In
                libero massa, facilisis eget dolor in, volutpat cursus elit.
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-6 py-10 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services4.png"
                className="aspect-[1.17] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                SEO Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
                Sed in augue tristique, consectetur urna at, blandit ex. In
                libero massa, facilisis eget dolor in, volutpat cursus elit.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services5.png"
                className="aspect-[1.25] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
                Search Optimization
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
                Proin hendrerit vestibulum ipsum non malesuada. Nunc ut sem
                cursus nisl tincidunt dictum et vel eros.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-5 py-9 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services6.png"
                className="aspect-[1.26] object-contain object-center w-[106px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-4">
                Social Media Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-4">
                Suspendisse mattis est vitae purus imperdiet vestibulum. Nunc
                ornare ligula vel diam porttitor.
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-5 py-12 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services7.png"
                className="aspect-[1.25] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
                Reporting & Analysis
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
                Suspendisse mattis est vitae purus imperdiet vestibulum. Nunc
                ornare ligula vel diam porttitor.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
              src="/img/services8.png"
                alt="image-icon"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full mt-2"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap">
                Media Promotion
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mb-2">
                Proin hendrerit vestibulum ipsum non malesuada. Nunc ut sem
                cursus nisl tincidunt dictum et vel eros.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-6 py-10 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services9.png"
                className="aspect-[1.19] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                Email Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
                Sed in augue tristique, consectetur urna at, blandit ex. In
                libero massa, facilisis eget dolor in, volutpat cursus elit.
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesGrid;