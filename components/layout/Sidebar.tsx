'use client';

import { Box, VStack, Text } from '@chakra-ui/react';
import { FiHome, FiFileText } from 'react-icons/fi';
import { Logo } from './Logo';
import { ColorModeButton } from '@/components/ui/color-mode';
import { AnimatedNavItem } from './AnimatedNavItem';

export function Sidebar() {
  return (
    <Box
      w="280px"
      bg="gray.900"
      borderRight="1px"
      borderColor="gray.700"
      p={6}
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      overflowY="auto"
      zIndex={10}
    >
      <VStack align="start" gap={8} h="full">
        {/* Logo */}
        <Logo />
        
        {/* Navigation */}
        <VStack align="start" gap={4} flex={1}>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Navigation
          </Text>
          
          <VStack align="start" gap={2} w="full">
            <AnimatedNavItem href="/" icon={FiHome}>
              Home
            </AnimatedNavItem>
            
            <AnimatedNavItem href="/blog" icon={FiFileText}>
              Blog
            </AnimatedNavItem>
          </VStack>
        </VStack>
        
        {/* Theme Toggle */}
        <Box>
          <ColorModeButton />
        </Box>
      </VStack>
    </Box>
  );
}
