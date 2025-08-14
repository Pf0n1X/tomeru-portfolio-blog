"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface AnimatedContentProps {
  children: React.ReactNode
  delay?: number
}

export function AnimatedContent({ children, delay = 0 }: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset animation
    setIsVisible(false);
    
    // Start animation after delay + top navigation animation time
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400 + delay); // 1400ms (top nav animation + page transition) + delay

    return () => clearTimeout(timer);
  }, [pathname, delay]);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(30px)'}
      transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      h="full"
      display="flex"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}

// Auto-wrap common components with staggered delays
export function StaggeredContent({ children }: { children: React.ReactNode }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <>
      {childrenArray.map((child, index) => (
        <AnimatedContent key={index} delay={index * 100}>
          {child}
        </AnimatedContent>
      ))}
    </>
  );
}
