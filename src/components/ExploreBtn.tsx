'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={`hidden fixed bottom-5 right-5 text-primary p-3 border-2 border-primary transition duration-750 md:flex flex-row bg-primary-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } animate-bounce`}
    >
      <ChevronDown size={24} />
      Discover me.
    </button>
  );
};

export default ScrollDownButton;
