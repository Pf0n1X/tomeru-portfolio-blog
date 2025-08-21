'use client';

import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [phase, setPhase] = useState<'fadeOut' | 'fadeIn'>('fadeOut');
  const pathname = usePathname();
  const { clickPosition, setClickPosition } = useNavigation();

  useEffect(() => {
    // Reset states
    setPhase('fadeOut');
    
    // Clear click position if we have one
    if (clickPosition) {
      setClickPosition(null);
    }
    
    // Phase 2: Fade in new content after top navigation animation
    const fadeInTimer = setTimeout(() => {
      setPhase('fadeIn');
    }, 900); // Wait for top navigation animation to complete (800ms) + small buffer (100ms)

    return () => clearTimeout(fadeInTimer);
  }, [pathname, clickPosition, setClickPosition]);

  return (
    <Box position="relative" w="full" h="full" overflow="hidden">
      {/* Content */}
      <Box
        w="full"
        h="full"
        opacity={phase === 'fadeIn' ? 1 : 0}
        transition="opacity 0.3s ease"
      >
        {children}
      </Box>
    </Box>
  );
}
