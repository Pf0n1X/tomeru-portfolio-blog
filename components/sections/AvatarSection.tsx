'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGamepad, FaCode, FaBook, FaMusic } from 'react-icons/fa';
import Image from 'next/image';
import { TechBubble } from '@/components/ui/TechBubble';
import { AnimatedContent } from '@/components/layout/AnimatedContent';

// Floating bubble data
const bubbleData = [
  { icon: FaGamepad, label: 'Gaming', color: '#f56565', delay: 0 },
  { icon: FaCode, label: 'Software', color: '#f56565', delay: 0.1 },
  { icon: FaBook, label: 'Books', color: '#f56565', delay: 0.2 },
  { icon: FaMusic, label: 'Music', color: '#f56565', delay: 0.3 },
];

export function AvatarSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VStack gap={12} textAlign="center" overflow="visible">
      {/* Avatar Section */}
      <AnimatedContent delay={200}>
        <Box 
          position="relative" 
          mb={8}
          p={12}
          pt={20}
          pb={{ base: 0, md: 16 }}
          overflow="visible"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.4, 0, 0.2, 1],
              delay: 0.3, 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              position: 'relative', 
              cursor: 'pointer', 
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            <Image 
              src="/transparent_sprite.png" 
              alt="Tomer's avatar" 
              width={400} 
              height={430}
              style={{
                filter: 'drop-shadow(20px -20px 0px #f56565)',
                position: 'relative',
                zIndex: 2,
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
            />

            {/* Desktop Floating Tech Bubbles - Hidden on mobile */}
            <Box display={{ base: 'none', md: 'block' }}>
              <AnimatePresence>
                {isHovered && bubbleData.map((bubble, index) => (
                  <TechBubble
                    key={bubble.label}
                    bubble={bubble}
                    position={
                      index === 0 ? { x: -120, y: -50 } :
                      index === 1 ? { x: 140, y: -80 } :
                      index === 2 ? { x: -100, y: 50 } :
                      { x: 120, y: 60 }
                    }
                    isVisible={isHovered}
                  />
                ))}
              </AnimatePresence>
            </Box>

            {/* Mobile Simple Animation - Only on mobile */}
            <Box display={{ base: 'block', md: 'none' }}>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '0%',
                      left: '50%',
                      transform: 'translate(-50%, -100%)',
                      marginTop: '-80px',
                      zIndex: 3,
                    }}
                  >
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4} maxW="300px">
                      {bubbleData.map((bubble) => {
                        const IconComponent = bubble.icon;
                        
                        return (
                          <motion.div
                            key={bubble.label}
                            initial={{ 
                              opacity: 0,
                              y: 20,
                              scale: 0.8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: bubble.delay,
                              ease: 'easeOut',
                            }}
                          >
                            <VStack gap={2}>
                              <Box
                                bg="white"
                                _dark={{ bg: 'gray.800' }}
                                borderRadius="full"
                                p={3}
                                boxShadow="lg"
                                border="2px solid"
                                borderColor={bubble.color}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                w="50px"
                                h="50px"
                              >
                                <IconComponent 
                                  size={22} 
                                  color={bubble.color}
                                />
                              </Box>
                              <Text
                                fontSize="xs"
                                fontWeight="medium"
                                color={{ base: 'gray.600', _dark: 'gray.400' }}
                                textAlign="center"
                              >
                                {bubble.label}
                              </Text>
                            </VStack>
                          </motion.div>
                        );
                      })}
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </motion.div>
        </Box>
      </AnimatedContent>

      {/* Hero Text */}
      <AnimatedContent delay={600}>
        <VStack gap={4} maxW="4xl">
          <Heading 
            size="2xl" 
            color={{ base: 'gray.900', _dark: 'white' }}
            letterSpacing="tight"
          >
            Hello, I&apos;m Tomer 👋
          </Heading>
          
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }}
            color={{ base: 'gray.600', _dark: 'gray.400' }}
            lineHeight="tall"
            maxW="3xl"
          >
            A passionate software developer who loves building modern, 
            performant web applications with clean, scalable code.
          </Text>
        </VStack>
      </AnimatedContent>
    </VStack>
  );
}
