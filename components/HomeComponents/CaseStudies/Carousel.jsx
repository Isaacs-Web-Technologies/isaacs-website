import React, { useRef,useState,useEffect } from 'react';
import './txt.css';

const Carousel = () => {
  const carouselItems = [
    {
      imgSrc: '/img/retail.jpg',
      title: 'Revolutionized E-commerce',
      excerpt: 'Discover how our innovative web design and targeted SEO strategies doubled visitor traffic and skyrocketed online sales for a fashion retailer.',
      readMoreUrl: 'https://example.com/page1',
    },
    {
      imgSrc: '/img/B2B.jpg',
      title: 'B2B Lead Generation',
      excerpt: ' Find out how we revamped a SaaS company’s website and lead-gen strategy to triple their qualified leads in just six months.',
      readMoreUrl: 'https://example.com/page2',
    },
    {
      imgSrc: '/img/health.jpg',
      title: 'Healthcare on The Web',
      excerpt: 'Read about the custom-developed patient management system and user-friendly website interface that increased patient engagement by over 200%.',
      readMoreUrl: 'https://example.com/page3',
    },
    {
      imgSrc: '/img/Education.jpg',
      title: 'Education Reimagined',
      excerpt: 'A look into how our e-learning solutions and SEO-optimized content increased user enrollments and course completion rates for an online education platform.',
      readMoreUrl: 'https://example.com/page4',
    },
    {
      imgSrc: '/img/startup.jpg',
      title: 'Startup Ecosystems',
      excerpt: ' See how our full-spectrum digital marketing campaign helped a tech startup become a market leader, featuring a 300% user base growth.',
      readMoreUrl: 'https://example.com/page5',
    },
    {
      imgSrc: '/img/global.jpg',
      title: 'Local to Global',
      excerpt: ' Learn about our comprehensive branding and social media approach that transformed a local craftsman’s shop into a globally recognized brand.',
      readMoreUrl: 'https://example.com/page5',
    },
  ];

  const totalItems = carouselItems.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalItems - 1); // Wrap to the last item if going backwards from the first item
    } else if (newIndex >= totalItems) {
      setCurrentIndex(0); // Wrap to the first item if going forwards from the last item
    } else {
      setCurrentIndex(newIndex);
    }
  };


  /// Adjusted startAutoScroll to update index
  const startAutoScroll = () => {
    if (!isUserInteracting) {
      updateIndex(currentIndex + 1);
    }
  };

  // Adjusted manualScroll to update index based on direction
  const manualScroll = (direction) => {
    clearInterval(autoScrollRef.current); // Stop auto-scroll when manually navigating
    setIsUserInteracting(true);


  const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    updateIndex(newIndex);

    // Optional: Resume auto-scroll after a delay
    setTimeout(() => {
      setIsUserInteracting(false); // Reset user interaction state
      autoScrollRef.current = setInterval(startAutoScroll, 3000); // Resume auto-scroll
    }, 5000); // Wait a bit before resuming auto-scroll to give users control
  };

  // Initialize automatic scrolling
  useEffect(() => {
    autoScrollRef.current = setInterval(startAutoScroll, 3000); // Auto-scroll every 3 seconds

    // Clean up on component unmount
    return () => clearInterval(autoScrollRef.current);
  }, [currentIndex, isUserInteracting]); // Ensure effect dependencies are correct
  
  return (
    <div className="carousel-container">
      <button className="carousel-nav left" onClick={() => manualScroll('left')}>❮</button>
      <div className="carousel-slide" ref={slideRef}>
        {/* Adjust rendering to only display the current item */}
        <div className="carousel-card">
          <img src={carouselItems[currentIndex].imgSrc} alt={carouselItems[currentIndex].title} className="carousel-image" />
          <h3 className="carousel-title">{carouselItems[currentIndex].title}</h3>
          <p className="carousel-excerpt">{carouselItems[currentIndex].excerpt}</p>
          <a href={carouselItems[currentIndex].readMoreUrl} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
        </div>
      </div>
      <button className="carousel-nav right" onClick={() => manualScroll('right')}>❯</button>
    </div>
  );
};

export default Carousel;