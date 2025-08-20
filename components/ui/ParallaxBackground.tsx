"use client";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";
import { useEffect, useState } from "react";
import { ParallaxContainer } from "./ParallaxContainer";

function ParallaxBackgroundContent() {
  const [scrollY, setScrollY] = useState(0);
  
  const primaryGradient = useColorModeValue(
    "linear(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)",
    "linear(135deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.6) 50%, rgba(10,10,10,0.3) 100%)"
  );
  
  const accentGradient = useColorModeValue(
    "linear(45deg, rgba(239,68,68,0.1) 0%, rgba(251,146,60,0.05) 100%)",
    "linear(45deg, rgba(239,68,68,0.15) 0%, rgba(251,146,60,0.08) 100%)"
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
      overflow="hidden"
    >
      {/* TEST ELEMENT - REMOVE LATER */}
      <Box
        position="absolute"
        top="50px"
        left="50px"
        w="100px"
        h="100px"
        bg="red.500"
        borderRadius="md"
        zIndex={999}
      />
      
      {/* ACTUAL PARALLAX CONTENT */}
      {/* Subtle gradient layers */}
      <ParallaxContainer speed={0.1} direction="up">
        <Box
          position="absolute"
          top="-50%"
          left="-50%"
          right="-50%"
          bottom="-50%"
          bgGradient={primaryGradient}
          opacity={1}
        />
      </ParallaxContainer>

      {/* Elegant grid pattern */}
      <ParallaxContainer speed={0.2} direction="down">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={useColorModeValue(0.2, 0.3)}
          backgroundImage={`
            linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)
          `}
          backgroundSize="100px 100px"
          transform={`translateY(${scrollY * 0.3}px)`}
        />
      </ParallaxContainer>

      {/* Flowing light accent */}
      <ParallaxContainer speed={0.15} direction="up">
        <Box
          position="absolute"
          top="20%"
          right="-10%"
          w="60%"
          h="40%"
          bgGradient={accentGradient}
          borderRadius="50%"
          filter="blur(60px)"
          transform={`translateY(${scrollY * 0.2}px) scale(1.2)`}
        />
      </ParallaxContainer>

      {/* Secondary light accent */}
      <ParallaxContainer speed={0.25} direction="down">
        <Box
          position="absolute"
          bottom="10%"
          left="-15%"
          w="50%"
          h="35%"
          bgGradient={accentGradient}
          borderRadius="50%"
          filter="blur(80px)"
          transform={`translateY(${scrollY * -0.1}px)`}
          opacity={0.7}
        />
      </ParallaxContainer>

      {/* Radial depth gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background={useColorModeValue(
          "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)"
        )}
        transform={`translateY(${scrollY * 0.05}px)`}
      />
    </Box>
  );
}

export function ParallaxBackground() {
  return <ParallaxBackgroundContent />;
}

function FloatingElementsContent() {
  const [scrollY, setScrollY] = useState(0);
  
  const particleColor = useColorModeValue(
    "rgba(239, 68, 68, 0.3)",
    "rgba(239, 68, 68, 0.2)"
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const background = useColorModeValue("rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)");

  return (
    <Box position="fixed" top={0} left={0} right={0} bottom={0} pointerEvents="none" zIndex={5}>
      {/* Elegant light particles */}
      {[...Array(8)].map((_, i) => {
        const size = 4 + (i % 3);
        const delay = i * 0.3;
        return (
          <Box
            key={i}
            position="absolute"
            w={`${size}px`}
            h={`${size}px`}
            borderRadius="full"
            bg={particleColor}
            opacity={0.8}
            top={`${15 + i * 10}vh`}
            left={`${5 + i * 11}vw`}
            transform={`
              translateY(${scrollY * (0.05 + i * 0.02)}px) 
              translateX(${Math.sin(scrollY * 0.001 + delay) * 15}px)
            `}
            filter="blur(0.5px)"
            transition="none"
            boxShadow={`0 0 ${size * 3}px ${particleColor}`}
          />
        );
      })}
      
      {/* Subtle lens flares */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={`flare-${i}`}
          position="absolute"
          w="2px"
          h="2px"
          borderRadius="full"
          bg={background}
          top={`${25 + i * 20}vh`}
          right={`${10 + i * 15}vw`}
          transform={`
            translateY(${scrollY * (0.08 + i * 0.03)}px)
            scale(${1 + Math.sin(scrollY * 0.003 + i) * 0.3})
          `}
          opacity={0.4 + Math.sin(scrollY * 0.002 + i) * 0.2}
          filter="blur(1px)"
          boxShadow="0 0 10px rgba(255,255,255,0.5)"
          transition="none"
        />
      ))}
    </Box>
  );
}

export function FloatingElements() {
  return <FloatingElementsContent />;
}
