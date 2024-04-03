import React, { useState, useEffect } from 'react';
import './txt.css';

const Txt = () => {
  const carouselItems = [
    {
      imgSrc: '/img/retail.jpg',
      title: 'Revolutionized E-commerce',
      excerpt: 'A Fashion E-Commerce’s Journey to a 50% Sales Increase.',
      readMoreUrl: 'https://example.com/page1',
    },
    {
      imgSrc: '/img/B2B.jpg',
      title: 'B2B Solutions',
      excerpt: 'Innovative solutions for B2B markets.',
      readMoreUrl: 'https://example.com/page2',
    },
    {
      imgSrc: '/img/health.jpg',
      title: 'Healthcare Revolution',
      excerpt: 'Advancing healthcare through technology.',
      readMoreUrl: 'https://example.com/page3',
    },
    {
      imgSrc: '/img/Education.jpg',
      title: 'Educational Growth',
      excerpt: 'Shaping the future of education.',
      readMoreUrl: 'https://example.com/page4',
    },
    {
      imgSrc: '/img/startup.jpg',
      title: 'Startup Ecosystems',
      excerpt: 'Empowering startups for success.',
      readMoreUrl: 'https://example.com/page5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.imgSrc} alt={item.title} className="carousel-image" />
            <h3 className="carousel-title">{item.title}</h3>
            <p className="carousel-excerpt">{item.excerpt}</p>
            <a href={item.readMoreUrl} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Txt;