"use client";

import type { ComponentProps } from "react";
import { useState, useEffect } from "react";
import { Text, Heading, Box, type HeadingProps } from "@chakra-ui/react";

interface SkewRevealTextProps {
  text: string;
  delay?: number;
  speed?: number;
  isHeading?: boolean;
  size?: HeadingProps['size'];
  color?: ComponentProps<typeof Heading>['color'];
}

export function SkewRevealText({ 
  text, 
  delay = 0, 
  speed = 60, 
  isHeading = false, 
  size,
  color,
  ...props 
}: SkewRevealTextProps) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const letters = text.replace(/\s/g, ' ').split('');
      let currentLetter = 0;

      const revealNext = () => {
        if (currentLetter < letters.length) {
          setVisibleLetters(currentLetter + 1);
          currentLetter++;
          setTimeout(revealNext, speed);
        }
      };

      revealNext();
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  const Component = isHeading ? Heading : Text;
  const letters = text.split('');

  return (
    <Component
      size={size}
      color={color}
      {...props}
      display="inline-block"
      overflow="hidden"
    >
      {letters.map((letter, index) => (
        <Box
          key={index}
          as="span"
          display="inline-block"
          transform={index < visibleLetters ? "translateY(0) skewX(0deg)" : "translateY(30px) skewX(-10deg)"}
          opacity={index < visibleLetters ? 1 : 0}
          transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          style={{
            transitionDelay: `${index * 50}ms`
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </Box>
      ))}
    </Component>
  );
}
