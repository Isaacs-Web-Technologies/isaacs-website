'use client'
import { useEffect, useState } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';

const ScrollEvent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => setIsScrolled(true));
    Events.scrollEvent.register('end', () => setIsScrolled(false));

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return { isScrolled, scrollToTop: () => scroll.scrollToTop() };
};

export default ScrollEvent;