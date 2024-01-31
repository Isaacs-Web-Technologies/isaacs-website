'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from 'react-responsive';

// Responsive configuration for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// Carousel component
const CarouselComponent = () => {
  // Use media queries to determine the device type
  const isMobile = useMediaQuery({ query: '(max-width: 464px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const deviceType = isMobile ? 'mobile' : (isTablet ? 'tablet' : 'desktop');

  return (
    <>
    
 
    <div className="text-teal-500 text-center text-sm font-extrabold leading-8 uppercase self-center whitespace-nowrap">
    RECENT PROJECTS
  </div>
  <div className="text-neutral-700 text-center text-3xl font-extrabold leading-10 self-center whitespace-nowrap mt-2">
    Our Latest Case Studies
  </div>
 
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={deviceType !== "mobile"} 
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container" 
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      deviceType={deviceType} 
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-140-px" 
      
    >
      {/* Slide 1 */}
       <div className="carousel-item ">
        <div className="container shadow-xl bg-white rounded-xl items-center w-[75%]">
          {/* Image */}
          <img
            loading="lazy"
            src="/img/issearchengine.jpg"
            className=" object-cover object-center w-full shrink-0 box-border min-h-[120px] min-w-[120px] overflow-hidden mt-5"
            alt="Image 1"
          />
          {/* Text */}
          <div className="relative box-border h-auto mt-5">
            Enter some text...
          </div>
        </div>
      </div>
      {/* Slide 2 */}
        <div className="carousel-item">
        <div className="container shadow-xl bg-white rounded-xl items-center w-[75%]">

          {/* Image */}
          <img
            loading="lazy"
            src="/img/starbucks.jpg"
            className=" object-cover object-center w-full shrink-0 box-border min-h-[120px] min-w-[120px] overflow-hidden mt-5"
            alt="Image 1"
          />
          {/* Text */}
          <div className="relative box-border h-auto mt-5">
            Enter some text...
          </div>
       </div>
      </div>
      {/* Slide 3 */}
        <div className="carousel-item">
        <div className="container shadow-xl bg-white rounded-xl items-center w-[75%]">

          {/* Image */}
          <img
            loading="lazy"
            src="/img/starbucks.jpg"
            className=" object-cover object-center w-full shrink-0 box-border min-h-[120px] min-w-[120px] overflow-hidden mt-5"
            alt="Image 1"
          />
          {/* Text */}
          <div className="relative box-border h-auto mt-5">
            Enter some text...
          </div>
        </div>
      </div>
      {/* Slide 4 */}
       <div className="carousel-item">
       <div className="container shadow-xl bg-white rounded-xl items-center w-[75%]">

          {/* Image */}
          <img
            loading="lazy"
            src="/img/starbucks.jpg"
            className=" object-cover object-center w-full shrink-0 box-border min-h-[120px] min-w-[120px] overflow-hidden mt-5"
            alt="Image 1"
          />
          {/* Text */}
          <div className="relative box-border h-auto mt-5">
            Enter some text...
          </div>
        </div>
      </div>
    </Carousel>
    <div className="mb-6">
  </div>
    </>
  );
};

export default CarouselComponent;