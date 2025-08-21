'use client';

import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  HStack, 
  Link,
  Image,
  Flex,
  Container,
} from '@chakra-ui/react';
import { AnimatedContent } from '@/components/layout/AnimatedContent';
import NextLink from 'next/link';

export function HeroSection() {
  return (
    <Container maxW="6xl" px={8} display="flex" justifyContent="center">
      <Flex 
        direction={{ base: 'column', lg: 'row' }} 
        align="center" 
        justify="space-between"
        gap={{ base: 16, md: 8 }}
        py={{ base: 6, md: 8 }}
      >
        {/* Text Content */}
        <VStack align={{ base: 'center', lg: 'start' }} gap={6} flex={1}>
          <AnimatedContent delay={0}>
            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Heading 
                size={{ base: '3xl', md: '4xl' }}
                mb={6} 
                color={{ base: 'gray.900', _dark: 'white' }}
                lineHeight="shorter"
              >
                Hi, I'm{' '}
                <Text as="span" color="red.400">
                  Tom
                </Text>
              </Heading>
              <Heading 
                size={{ base: 'xl', md: '2xl' }}
                mb={6}
                color={{ base: 'gray.600', _dark: 'gray.300' }}
                fontWeight="normal"
              >
                Software Developer & Tech Enthusiast
              </Heading>
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color={{ base: 'gray.500', _dark: 'gray.400' }}
                maxW="2xl"
                lineHeight="tall"
              >
                I'm passionate about building modern web applications and sharing my journey in tech. 
                Here you'll find my thoughts on web development, programming tutorials, and insights 
                from my experience in the software industry.
              </Text>
            </Box>
          </AnimatedContent>
          
          <AnimatedContent delay={100}>
            <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
              <Link as={NextLink} href="/blog">
                <Button 
                  colorScheme="red" 
                  size="lg" 
                  px={8} 
                  py={6}
                  _hover={{
                    shadow: 'lg',
                    transform: 'translateY(-1px)',
                    borderColor: 'red.400',
                  }}
                  _active={{
                    transform: 'translateY(0px)',
                    shadow: 'md',
                  }}
                  transition="all 0.15s"
                >
                  Read My Blog
                </Button>
              </Link>
              <Link as={NextLink} href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  px={8} 
                  py={6}
                  borderColor={{ base: 'gray.300', _dark: 'gray.500' }}
                  color={{ base: 'gray.600', _dark: 'gray.300' }}
                  _hover={{
                    shadow: 'lg',
                    transform: 'translateY(-1px)',
                    borderColor: 'red.400',
                  }}
                  _active={{
                    transform: 'translateY(0px)',
                    shadow: 'md',
                    borderColor: 'red.500',
                  }}
                  transition="all 0.15s"
                >
                  About Me
                </Button>
              </Link>
            </HStack>
          </AnimatedContent>
        </VStack>

        {/* Profile Photo */}
        <Box display="flex" justifyContent={{ base: 'center', lg: 'flex-end' }}>
          <AnimatedContent delay={200}>
            <Box position="relative">
              {/* Background decoration */}
              <Box
                position="absolute"
                top={4}
                left={4}
                w="full"
                h="full"
                bg="red.500"
                borderRadius="2xl"
                opacity={0.2}
                transform="rotate(3deg)"
              />
              
              {/* Profile image container */}
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                _hover={{
                  shadow: 'lg',
                  transform: 'translateY(-1px)',
                  borderColor: 'red.400',
                }}
                transition="all 0.2s"
              >
                <Image
                  src="/profile-photo.jpg"
                  alt="Tomer Erusalimsky - Software Developer"
                  w={{ base: '280px', md: '350px', lg: '400px' }}
                  h={{ base: '280px', md: '350px', lg: '400px' }}
                  objectFit="cover"
                  onError={(e) => {
                    // Handle image load error by replacing with fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Fallback content */}
                <Box
                  w={{ base: '280px', md: '350px', lg: '400px' }}
                  h={{ base: '280px', md: '350px', lg: '400px' }}
                  bg={{ base: 'gray.200', _dark: 'gray.700' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="2xl"
                  position="absolute"
                  top={0}
                  left={0}
                  zIndex={-1}
                >
                  <VStack>
                    <Text color={{ base: 'gray.600', _dark: 'gray.400' }} fontSize="lg" textAlign="center">
                      Profile Photo
                    </Text>
                    <Text color={{ base: 'gray.500', _dark: 'gray.500' }} fontSize="sm" textAlign="center">
                      Add your photo as profile-photo.jpg
                    </Text>
                  </VStack>
                </Box>
                
                {/* Gradient overlay */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="30%"
                  bgGradient="linear(to-t, blackAlpha.600, transparent)"
                />
              </Box>
            </Box>
          </AnimatedContent>
        </Box>
      </Flex>
    </Container>
  );
}
