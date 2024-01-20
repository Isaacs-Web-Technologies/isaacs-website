


const UniCarousel=()=> {
  return (
    <section>
      <div className="justify-between items-stretch bg-slate-50 flex gap-5 pl-20 py-10 max-md:flex-wrap max-md:pl-5">
        <a hreg="/">
          <img
            loading="lazy"
            src="/img/athletics-logo.png"
            className="aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full"
            alt="img 1"
          />
        </a>

        <a hreg="/">
          <img
            loading="lazy"
            src="/img/crosssport-logo.png"
            className="aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full"
            alt="img 2"
          />
        </a>

        <a hreg="/">
          <img
            loading="lazy"
            src="/img/uni-logo.png"
            className="aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full"
            alt="img 3"
          />
        </a>

        <a hreg="/">
          <img
            loading="lazy"
            src="/img/university-logo.png"
            className="aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full"
            alt="img 4"
          />
        </a>

        <a hreg="/">
          <img
            loading="lazy"
            src="u-uni-logo.png"
            className="aspect-[0.89] object-contain object-center w-[133px] overflow-hidden shrink-0 max-w-full"
            alt="img 5"
          />
        </a>
      </div>
    </section>
  );
}
export default UniCarousel