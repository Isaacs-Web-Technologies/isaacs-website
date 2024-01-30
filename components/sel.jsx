import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  {
    id: "1",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "2",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "3",
    img: "/img/importance.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "4",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "5",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "6",
    img: "/img/importance.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "7",
    img: "/img/importance.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "8",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  {
    id: "9",
    img: "/img/seobestpractices.jpg",
    title: "hgdfhg",
    description: "fgha;rhehogaeoerhigoierhgioheoirfghoih",
  },
  // Add more entries as needed
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const IMAGES_PER_VIEWPORT = 3;


const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const cardContainerStyle = `
  container shadow-xl bg-white rounded-md flex flex-col items-stretch mb-10 w-[33%] mx-12 px-4 max-md:w-full max-md:ml-0
`;

export const SwipeCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);
  
    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
  
        if (x === 0) {
          setImgIndex((pv) => {
            if (pv + IMAGES_PER_VIEWPORT >= imgs.length) {
              return 0;
            }
            return pv + IMAGES_PER_VIEWPORT;
          });
        }
      }, AUTO_DELAY);
  
      return () => clearInterval(intervalRef);
    }, []);
  
    const onDragEnd = (_, { offset }) => {
      const x = offset.x;
  
      if (x <= -DRAG_BUFFER && imgIndex + IMAGES_PER_VIEWPORT < imgs.length) {
        setImgIndex((pv) => pv + IMAGES_PER_VIEWPORT);
      } else if (x >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - IMAGES_PER_VIEWPORT);
      }
    };
  
    return (
      <div className="items-center bg-white pt-12 px-16">
        <span className="items-start flex w-full max-w-[1480px] flex-col mt-8 mx-auto pt-2.5 pb-4 px-2.5 max-md:max-w-full">
          <div className="text-teal-500 text-center text-sm font-extrabold leading-8 uppercase self-center whitespace-nowrap">
            RECENT PROJECTS
          </div>
          <div className="text-neutral-700 text-center text-3xl font-extrabold leading-10 self-center whitespace-nowrap mt-2">
            Our Latest Case Studies
          </div>
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
              overflow: "hidden",
            }}
            animate={{
                translateX: `-${(imgIndex / IMAGES_PER_VIEWPORT) * (100 / ((imgs.length - IMAGES_PER_VIEWPORT) / IMAGES_PER_VIEWPORT))}%`,
              }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing mt-5"
          >
            {imgs.map((item, idx) => (
              <div key={idx} className={cardContainerStyle}>
                <motion.div
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  animate={{
                    scale: idx >= imgIndex && idx < imgIndex + IMAGES_PER_VIEWPORT ? 1 : 0.85,
                  }}
                  transition={SPRING_OPTIONS}
                  className="object-cover object-center w-full box-border min-h-[100px] min-w-[100px] overflow-hidden mt-5"
                />
                <div className="relative shrink-0 box-border h-auto mt-5">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </span>
  
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <GradientEdges />
      </div>
    );
  };

  const Dots = ({ imgIndex, setImgIndex }) => {
    const totalSets = Math.ceil(imgs.length / IMAGES_PER_VIEWPORT);
    const remainingImages = imgs.length - imgIndex;
    const validSets = Math.ceil(remainingImages / IMAGES_PER_VIEWPORT);
  
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {Array.from({ length: validSets }).map((_, groupIdx) => (
          <button
            key={groupIdx}
            onClick={() => setImgIndex(groupIdx * IMAGES_PER_VIEWPORT)}
            className={`h-3 w-3 rounded-full transition-colors ${
              groupIdx * IMAGES_PER_VIEWPORT === imgIndex ? "bg-black" : "bg-neutral-500"
            }`}
          />
        ))}
      </div>
    );
  };

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};