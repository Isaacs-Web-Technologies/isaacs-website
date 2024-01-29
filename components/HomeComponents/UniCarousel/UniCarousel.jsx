'use client'

import { motion, useAnimation, useCycle } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const UniCarousel = () => {
  const targetRef = useRef(null);
  const controls = useAnimation();
  const [currentCard, cycleCards] = useCycle(...cards);

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Check if window is defined before adding event listener
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      // Check if window is defined before removing event listener
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(async () => {
      const cardsToTransform = screenWidth <= 768 ? 1 : 6;
  
      const animations = Array.from({ length: cardsToTransform }, (_, i) => {
        const delay = i * 500; // Adjust the delay as needed
        return new Promise((resolve) => {
          setTimeout(() => {
            controls.start({ x: `-${i * 10}vw`, transition: { duration: 5000000 } });
            
            resolve();
          }, delay);
          controls.start({ x: `-${i * 100}vw`, transition: { duration: 5000000, ease: "linear" } });
        });
      });
       
      // Wait for all animations to complete before moving to the next step
      await Promise.all(animations);
      
      cycleCards();
      controls.start({ x: "0%", transition: { duration: 0 } }); // Reset position
  
      // Adjust the interval duration based on screen width
      const intervalDuration = screenWidth <= 768 ? 3000 : 7000;
  
      setTimeout(() => {
        controls.start({ x: "-100%", transition: { duration: 10, ease: "linear" } });
      }, intervalDuration);
    }, 7000); // Default interval duration
  
    return () => clearInterval(interval);
  }, [controls, cycleCards, screenWidth]);
  return (
    <section ref={targetRef} className="relative h-[300px] mt-6 overflow-hidden">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-4 h-full w-full bg-slate-50"
          style={{ width: `${cards.length * 100}%` }}
        >
          {Array.from({ length: screenWidth <= 768 ? 1 : 6 }, (_, batchIndex) =>
            cards.map((card, cardIndex) => (
              <Card key={cardIndex + batchIndex * cards.length} card={card} currentCardId={currentCard.id} />
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, currentCardId }) => {
  const isActive = card.id === currentCardId;

  return (
    <div
      className={`group relative h-[100px] w-[200px] overflow-hidden bg-neutral-200 ${
        isActive ? 'active-card' : ''
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default UniCarousel;

  const cards = [
    {
      url: "/img/athletics-logo.png",
      title: "Uni 1",
      id: 1,
    },
    {
      url: "/img/crosssport-logo.png",
      title: "Uni 2",
      id: 2,
    },
    {
      url: "/img/uni-logo.png",
      title: "Uni 3",
      id: 3,
    },
    {
      url: "/img/university-logo.png",
      title: "Uni 4",
      id: 4,
    },
    {
      url: "/img/uni-logo.png",
      title: "Uni 5",
      id: 5,
    },
    {
      url: "/img/crosssport-logo.png",
      title: "Uni 6",
      id: 6,
    },
    {
      url: "/img/athletics-logo.png",
      title: "Uni 7",
      id: 7,
    },
    {
      url: "/img/uni-logo.png",
      title: "Uni 8",
      id: 8,
    },
    {
      url: "/img/crosssport-logo.png",
      title: "Uni 9",
      id: 9,
    },
    {
      url: "/img/uni-logo.png",
      title: "Uni 10",
      id: 10,
    },{
      url: "/img/uni-logo.png",
      title: "Uni 12",
      id: 12,
    },{
      url: "/img/uni-logo.png",
      title: "Uni 13",
      id: 13,
    },
    ];

