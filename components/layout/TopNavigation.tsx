'use client';

import { 
  Box, 
  Flex, 
  HStack, 
  Link, 
  Icon, 
  Text, 
  IconButton,
  VStack,
  Portal,
} from '@chakra-ui/react';
import { FiHome, FiFileText, FiUser, FiMenu, FiX } from 'react-icons/fi';
import NextLink from 'next/link';
import type { ElementType } from 'react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { ColorModeButton } from '@/components/ui/color-mode';

// Animation CSS - removed conflicting keyframes, using only CSS transitions
const fadeInUpAnimation = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const scaleInAnimation = `
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

interface NavItemProps {
  href: string
  icon: ElementType;
  children: React.ReactNode
  isMobile?: boolean
  onClose?: () => void
}

function NavItem({ href, icon, children, isMobile = false, onClose }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href === '/blog' && pathname?.startsWith('/blog'));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent navigation if we're exactly on the target page
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    
    if (onClose) onClose();
  };

  if (isMobile) {
    return (
      <Link
        as={NextLink}
        href={href}
        display="flex"
        alignItems="center"
        gap={4}
        px={6}
        py={4}
        w="full"
        position="relative"
        overflow="hidden"
        color={isActive ? 'red.400' : { base: 'gray.600', _dark: 'gray.300' }}
        bg={isActive ? { base: 'red.50', _dark: 'whiteAlpha.100' } : 'transparent'}
        _hover={{
          bg: { base: 'gray.50', _dark: 'whiteAlpha.200' },
          color: { base: 'gray.900', _dark: 'white' },
          textDecoration: 'none',
        }}
        _active={{
          bg: { base: 'gray.200', _dark: 'whiteAlpha.300' },
          transform: 'scale(0.98)',
        }}
        borderRadius="xl"
        transition="all 0.15s"
        onClick={handleClick}
      >
        <Icon as={icon} size="lg" />
        <Text fontSize="lg" fontWeight={isActive ? '600' : '400'}>
          {children}
        </Text>
        {isActive && (
          <Box
            position="absolute"
            right={4}
            w={2}
            h={2}
            bg="red.400"
            borderRadius="full"
          />
        )}
      </Link>
    );
  }

  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      alignItems="center"
      gap={2}
      px={3}
      py={2}
      position="relative"
      color={isActive ? 'red.400' : { base: 'gray.600', _dark: 'gray.300' }}
      _hover={{
        textDecoration: 'none',
        color: isActive ? 'red.400' : { base: 'gray.900', _dark: 'gray.100' },
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'none',
      }}
      transition="color 0.2s ease"
      onClick={handleClick}
    >
      {/* Active indicator */}
      {isActive && (
        <Box
          position="absolute"
          bottom={0}
          left="50%"
          transform="translateX(-50%)"
          w="80%"
          h="2px"
          bg="linear-gradient(90deg, transparent, red.400, transparent)"
          borderRadius="full"
        />
      )}
      
      <Icon 
        as={icon} 
        position="relative"
        zIndex={1}
      />
      <Text 
        fontWeight="500"
        color={isActive ? 'red.400' : 'inherit'}
        position="relative"
        zIndex={1}
        fontSize="sm"
      >
        {children}
      </Text>
    </Link>
  );
}

export function TopNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger mount animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 100); // Small delay for smoother initial render
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fadeInUpAnimation + scaleInAnimation }} />
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        opacity={hasMounted ? 1 : 0}
        transform={hasMounted ? 'translateY(0)' : 'translateY(-100%)'}
        transition="opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {/* Gradient fade background - from solid to transparent */}
        <Box
          position="absolute"
          inset={0}
          background={
            isScrolled 
              ? 'linear-gradient(180deg, rgba(23, 25, 35, 0.95) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(23, 25, 35, 0.85) 0%, transparent 100%)'
          }
          _light={{
            background: isScrolled 
              ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, transparent 100%)',
          }}
          backdropFilter="blur(20px)"
          mask="linear-gradient(black, transparent)"
          transition="all 0.3s ease"
        />
        
        <Flex
          maxW="7xl"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={4}
          align="center"
          justify="space-between"
          position="relative"
          zIndex={1}
        >
          {/* Logo */}
          <Box
            animation={hasMounted ? 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both' : undefined}
            opacity={hasMounted ? 1 : 0}
            transform={hasMounted ? 'scale(1)' : 'scale(0.9)'}
            transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          >
            <Logo />
          </Box>
          
          {/* Desktop Navigation */}
          <HStack gap={6} display={{ base: 'none', md: 'flex' }}>
            <Box
              animation={hasMounted ? 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both' : undefined}
              opacity={hasMounted ? 1 : 0}
              transform={hasMounted ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <NavItem href="/" icon={FiHome}>
                Home
              </NavItem>
            </Box>
            <Box
              animation={hasMounted ? 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both' : undefined}
              opacity={hasMounted ? 1 : 0}
              transform={hasMounted ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <NavItem href="/about" icon={FiUser}>
                About
              </NavItem>
            </Box>
            <Box
              animation={hasMounted ? 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both' : undefined}
              opacity={hasMounted ? 1 : 0}
              transform={hasMounted ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <NavItem href="/blog" icon={FiFileText}>
                Blog
              </NavItem>
            </Box>
          </HStack>
          
          {/* Right side controls */}
          <HStack gap={4}>
            <Box
              animation={hasMounted ? 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both' : undefined}
              opacity={hasMounted ? 1 : 0}
              transform={hasMounted ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <ColorModeButton />
            </Box>
            
            {/* Mobile menu button */}
            <Box
              animation={hasMounted ? 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s both' : undefined}
              opacity={hasMounted ? 1 : 0}
              transform={hasMounted ? 'translateY(0)' : 'translateY(20px)'}
              transition="opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                size="sm"
                display={{ base: 'flex', md: 'none' }}
                onClick={() => setIsMobileMenuOpen(true)}
                color={{ base: 'gray.600', _dark: 'gray.300' }}
                _hover={{
                  bg: { base: 'gray.100', _dark: 'whiteAlpha.200' },
                  color: { base: 'gray.900', _dark: 'white' },
                }}
                _active={{
                  bg: { base: 'gray.200', _dark: 'whiteAlpha.300' },
                  transform: 'scale(0.95)',
                }}
                transition="all 0.15s"
              >
                <FiMenu />
              </IconButton>
            </Box>
          </HStack>
        </Flex>
      </Box>
      
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <Portal>
          <Box
            position="fixed"
            inset={0}
            zIndex={2000}
            bg="blackAlpha.800"
            backdropFilter="blur(10px)"
            display={{ base: 'flex', md: 'none' }}
            alignItems="center"
            justifyContent="center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Box
              bg={{ base: 'white', _dark: 'gray.900' }}
              borderRadius="2xl"
              border="1px"
              borderColor={{ base: 'gray.200', _dark: 'gray.700' }}
              p={8}
              mx={4}
              maxW="sm"
              w="full"
              position="relative"
              onClick={(e) => e.stopPropagation()}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              {/* Close button */}
              <IconButton
                aria-label="Close menu"
                variant="ghost"
                size="sm"
                position="absolute"
                top={4}
                right={4}
                onClick={() => setIsMobileMenuOpen(false)}
                color={{ base: 'gray.600', _dark: 'gray.300' }}
                _hover={{
                  bg: { base: 'gray.100', _dark: 'whiteAlpha.200' },
                  color: { base: 'gray.900', _dark: 'white' },
                }}
                _active={{
                  bg: { base: 'gray.200', _dark: 'whiteAlpha.300' },
                  transform: 'scale(0.95)',
                }}
                transition="all 0.15s"
              >
                <FiX />
              </IconButton>
              
              <VStack gap={8} align="stretch">
                {/* Logo in mobile menu */}
                <Box textAlign="center" pt={4}>
                  <Logo />
                </Box>
                
                {/* Mobile navigation items */}
                <VStack gap={4} align="stretch">
                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color={{ base: 'gray.500', _dark: 'gray.400' }}
                    textTransform="uppercase"
                    letterSpacing="wide"
                    textAlign="center"
                  >
                    Navigation
                  </Text>
                  
                  <NavItem 
                    href="/" 
                    icon={FiHome} 
                    isMobile 
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavItem>
                  <NavItem 
                    href="/about" 
                    icon={FiUser} 
                    isMobile 
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </NavItem>
                  <NavItem 
                    href="/blog" 
                    icon={FiFileText} 
                    isMobile 
                    onClose={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </NavItem>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </Portal>
      )}
    </>
  );
}
