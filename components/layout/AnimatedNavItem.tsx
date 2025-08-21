'use client';

import { Box, Link, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ElementType} from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';

interface AnimatedNavItemProps {
  href: string;
  icon: ElementType;
  children: React.ReactNode;
}

export function AnimatedNavItem({ href, icon, children }: AnimatedNavItemProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const pathname = usePathname();
  const isActive = pathname === href || (href === '/blog' && pathname?.startsWith('/blog'));
  const { setClickPosition } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent navigation if we're exactly on the target page
    if (pathname === href) {
      e.preventDefault();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Store the viewport position of the click for the page transition
    setClickPosition({ 
      x: rect.left + rect.width / 2, // Center of the nav item
      y: rect.top + rect.height / 2,  // Center of the nav item
    });
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    setIsClicked(true);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    // Reset click state
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      alignItems="center"
      gap={3}
      px={4}
      py={3}
      rounded="md"
      w="full"
      position="relative"
      overflow="hidden"
      color={isActive ? 'red.400' : 'gray.300'}
      bg={isActive ? 'gray.800' : 'transparent'}
      _hover={{
        bg: isActive ? 'gray.800' : 'gray.800',
        color: 'white',
        textDecoration: 'none',
        transform: 'translateX(4px)',
      }}
      transform={isClicked ? 'scale(0.98)' : 'scale(1)'}
      transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      onClick={handleClick}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <Box
          key={ripple.id}
          position="absolute"
          left={`${ripple.x}px`}
          top={`${ripple.y}px`}
          w="0"
          h="0"
          bg="red.400"
          borderRadius="50%"
          opacity={0.6}
          transform="translate(-50%, -50%)"
          animation="ripple 0.6s linear"
          pointerEvents="none"
          css={{
            '@keyframes ripple': {
              '0%': {
                width: '0',
                height: '0',
                opacity: 0.6,
              },
              '50%': {
                opacity: 0.3,
              },
              '100%': {
                width: '120px',
                height: '120px',
                opacity: 0,
              },
            },
          }}
        />
      ))}
      
      {/* Active indicator bar */}
      <Box
        position="absolute"
        left={0}
        top={0}
        w={isActive ? '3px' : '0'}
        h="100%"
        bg="red.400"
        transition="width 0.3s ease"
        borderRadius="0 2px 2px 0"
      />
      
      {/* Icon with animation */}
      <Icon 
        as={icon} 
        transform={isActive ? 'scale(1.1)' : 'scale(1)'}
        transition="transform 0.2s ease"
      />
      
      {/* Text */}
      <Text fontWeight={isActive ? '600' : '400'}>
        {children}
      </Text>
      
      {/* Glow effect for active state */}
      {isActive && (
        <Box
          position="absolute"
          inset={0}
          bg="red.400"
          opacity={0.1}
          borderRadius="md"
          pointerEvents="none"
        />
      )}
    </Link>
  );
}
