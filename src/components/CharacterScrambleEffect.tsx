'use client';

import React, { useState, useEffect, forwardRef } from 'react';

interface CharacterScrambleEffectProps {
  className?: string;
  texts: string[];
  cycleTime?: number;
  scrambleSpeed?: number;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const CharacterScrambleEffect = forwardRef<HTMLSpanElement, CharacterScrambleEffectProps>(
  ({ className, texts, cycleTime = 3000, scrambleSpeed = 50 }, ref) => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      let iteration = 0;
      const targetText = texts[index];
      setIsAnimating(true);

      const scrambleInterval = setInterval(() => {
        setCurrentText(
          targetText
            .split('')
            .map((char, i) => (i < iteration ? char : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]))
            .join(''),
        );

        iteration++;

        if (iteration > targetText.length) {
          clearInterval(scrambleInterval);
          setIsAnimating(false);
        }
      }, scrambleSpeed);

      const nextTextTimeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, cycleTime);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(nextTextTimeout);
      };
    }, [index, texts, cycleTime, scrambleSpeed]);

    return (
      <span
        ref={ref}
        className={`${className} transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
      >
        {currentText}
      </span>
    );
  },
);

CharacterScrambleEffect.displayName = 'CharacterScrambleEffect';
