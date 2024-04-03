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


  const slideRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Start auto-scroll
  const startAutoScroll = () => {
    // Check if user is interacting with the carousel to prevent auto-scroll
    if (!isUserInteracting && slideRef.current) {
      const scrollAmount = slideRef.current.offsetWidth; // Consider adjusting based on your layout
      slideRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Initialize automatic scrolling
  useEffect(() => {
    autoScrollRef.current = setInterval(startAutoScroll, 3000); // Auto-scroll every 3 seconds

    // Clean up on component unmount
    return () => clearInterval(autoScrollRef.current);
  }, [isUserInteracting]);

  // Manual scroll function adjusts based on direction and pauses auto-scroll
  const manualScroll = (direction) => {
    clearInterval(autoScrollRef.current); // Stop auto-scroll when manually navigating
    setIsUserInteracting(true);

    const scrollAmount = direction === 'left' ? -slideRef.current.offsetWidth : slideRef.current.offsetWidth;
    slideRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Optional: Resume auto-scroll after a delay
    setTimeout(() => {
      setIsUserInteracting(false); // Reset user interaction state
      autoScrollRef.current = setInterval(startAutoScroll, 3000); // Resume auto-scroll
    }, 5000); // Wait a bit before resuming auto-scroll to give users control
  };

  return (
    <div className="carousel-container">
      <button className="carousel-nav left" onClick={() => manualScroll('left')}>❮</button>
      <div className="carousel-slide" ref={slideRef}>
        {carouselItems.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.imgSrc} alt={item.title} className="carousel-image" />
            <h3 className="carousel-title">{item.title}</h3>
            <p className="carousel-excerpt">{item.excerpt}</p>
            <a href={item.readMoreUrl} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
          </div>
        ))}
      </div>
      <button className="carousel-nav right" onClick={() => manualScroll('right')}>❯</button>
    </div>
  );
};

export default Carousel;