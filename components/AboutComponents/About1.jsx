

const About1=()=> {
  return (
    <section
    className="justify-center items-center flex flex-col px-16 max-md:px-5">
         <div className="w-full max-w-[1037px] max-md:max-w-full">
         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
              src="/img/about us 1.png"
              alt="SEO Image"
            />
          </div>

           <header className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
              WHO WE ARE
              </h2>
              <h1 className="text-neutral-700 text-3xl leading-10 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              We're on a Mission to Change Your View of SEO
              </h1>
              
              <p className="text-gray-500 text-base leading-6 self-stretch max-md:max-w-full">
              We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.
              </p>
              <div className="items-stretch shadow-sm bg-[linear-gradient(269deg,#8F00FF_0%,#C356F7_50%,#7000FF_100%)] flex w-[218px] max-w-full flex-col justify-center mt-28 px-10 py-4 rounded-3xl self-start max-md:mt-10 max-md:px-5">
                <span className="justify-between items-stretch flex gap-3 px-0.5">
                  <a href="#" className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                    More About us
                  </a>
                  <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto"></div>
                </span>
              </div>
            </span>
          </header> 
          </div>
      </div>
    </section>    
  );
}
export default About1

