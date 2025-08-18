"use client";

import { Box, Heading, Text, VStack, HStack, Flex } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { AnimatedContent } from "@/components/layout/AnimatedContent";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGamepad, FaCode, FaBook, FaMusic } from "react-icons/fa";
import Image from "next/image";

// Floating bubble data
const bubbleData = [
  { icon: FaGamepad, label: "Gaming", color: "#f56565", delay: 0 },
  { icon: FaCode, label: "Software", color: "#f56565", delay: 0.1 },
  { icon: FaBook, label: "Books", color: "#f56565", delay: 0.2 },
  { icon: FaMusic, label: "Music", color: "#f56565", delay: 0.3 }
];

export function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MainLayout>
      <Box maxW="6xl" mx="auto" px={8} py={24} pt={40}>
        {/* Hero Section with Avatar */}
        <VStack spacing={12} textAlign="center">
          {/* Avatar Section */}
          <AnimatedContent delay={200}>
            <Box position="relative" mb={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.3 
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <Image 
                  src="/transparent_sprite.png" 
                  alt="Tomer's avatar" 
                  width={400} 
                  height={400}
                  style={{
                    filter: "drop-shadow(20px -20px 0px #f56565)",
                    position: "relative",
                    zIndex: 2
                  }}
                />
                  
                  {/* Floating Bubbles */}
                  <AnimatePresence>
                    {isHovered && bubbleData.map((bubble, index) => {
                      const IconComponent = bubble.icon;
                      // Adjusted positions for centered, smaller sprite
                      const bubblePositions = [
                        { x: -200, y: -280 }, // Gaming - far left, high
                        { x: -80, y: -320 },  // Software - left center, highest
                        { x: 80, y: -320 },   // Learning - right center, highest  
                        { x: 200, y: -280 }   // Music - far right, high
                      ];
                      const position = bubblePositions[index];
                      const finalX = position.x;
                      const finalY = position.y;
                      
                      return (
                        <motion.div
                          key={bubble.label}
                          initial={{ 
                            opacity: 0, 
                            scale: 0.3,
                            x: 0,
                            y: 0,
                          }}
                          animate={{
                            opacity: 1, 
                            scale: 1,
                            x: finalX,
                            y: finalY,
                          }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.3,
                            x: 0,
                            y: 0,
                            zIndex: 1,
                            transition: { duration: 0.4, ease: "easeIn" }
                          }}
                          transition={{
                            duration: 0.8,
                            delay: bubble.delay,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: "spring",
                            stiffness: 80,
                            damping: 12,
                          }}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1
                          }}
                        >
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                              rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: bubble.delay + 0.8
                            }}
                          >
                            <Box
                              bg="white"
                              _dark={{ bg: "gray.800" }}
                              borderRadius="full"
                              p={3}
                              boxShadow="xl"
                              border="3px solid"
                              borderColor={bubble.color}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              w="70px"
                              h="70px"
                              position="relative"
                              cursor="pointer"
                              _hover={{
                                transform: "scale(1.1)",
                                boxShadow: "2xl"
                              }}
                              transition="all 0.2s ease"
                            >
                              <IconComponent 
                                size={28} 
                                color={bubble.color}
                              />
                              
                              {/* Tooltip */}
                              <Box
                                position="absolute"
                                bottom="-35px"
                                left="50%"
                                transform="translateX(-50%)"
                                bg="gray.900"
                                color="white"
                                _dark={{ bg: "gray.100", color: "gray.900" }}
                                px={3}
                                py={1}
                                borderRadius="md"
                                fontSize="sm"
                                fontWeight="medium"
                                whiteSpace="nowrap"
                                boxShadow="md"
                              >
                                {bubble.label}
                                {/* Arrow */}
                                <Box
                                  position="absolute"
                                  top="-4px"
                                  left="50%"
                                  transform="translateX(-50%)"
                                  w={0}
                                  h={0}
                                  borderLeft="4px solid transparent"
                                  borderRight="4px solid transparent"
                                  borderBottom="4px solid"
                                  borderBottomColor="gray.900"
                                  _dark={{ borderBottomColor: "gray.100" }}
                                />
                              </Box>
                            </Box>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
                
              {/* Hint Text */}
              <Text 
                textAlign="center" 
                mt={6}
                fontSize="sm"
                color={{ base: "gray.500", _dark: "gray.500" }}
                fontStyle="italic"
              >
                Hover over my avatar to see what I'm passionate about! ✨
              </Text>
            </Box>
          </AnimatedContent>

          {/* Title and Subtitle */}
          <AnimatedContent delay={400}>
            <VStack spacing={4}>
              <Heading 
                size="3xl" 
                color={{ base: "gray.900", _dark: "white" }}
                fontWeight="bold"
                letterSpacing="tight"
              >
                Hello, I'm Tomer 👋
              </Heading>
              <Text 
                fontSize="xl" 
                color={{ base: "gray.600", _dark: "gray.400" }}
                maxW="2xl"
                lineHeight="tall"
              >
                A passionate software developer who loves building modern, 
                performant web applications with clean, scalable code.
              </Text>
            </VStack>
          </AnimatedContent>

          {/* Skills/Interests Grid */}
          <AnimatedContent delay={600}>
            <Box maxW="4xl" w="full">
              <VStack spacing={8}>
                <Heading 
                  size="lg" 
                  color={{ base: "gray.900", _dark: "white" }}
                  mb={4}
                >
                  What Drives Me
                </Heading>
                
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={8}
                  w="full"
                >
                  {/* Software Development */}
                  <Box
                    bg={{ base: "white", _dark: "gray.800" }}
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.700" }}
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl"
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack spacing={4} alignItems="flex-start">
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="teal.50"
                        _dark={{ bg: "teal.900" }}
                      >
                        <FaCode color="#4ecdc4" size={24} />
                      </Box>
                      <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                        Software Development
                      </Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.300" }} lineHeight="tall">
                        Building scalable applications with clean, maintainable code. 
                        I focus on modern frameworks and best practices.
                      </Text>
                    </VStack>
                  </Box>

                  {/* Continuous Learning */}
                  <Box
                    bg={{ base: "white", _dark: "gray.800" }}
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.700" }}
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl"
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack spacing={4} alignItems="flex-start">
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="blue.50"
                        _dark={{ bg: "blue.900" }}
                      >
                        <FaBook color="#45b7d1" size={24} />
                      </Box>
                      <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                        Continuous Learning
                      </Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.300" }} lineHeight="tall">
                        Staying up-to-date with the latest tech trends and 
                        constantly expanding my knowledge and skills.
                      </Text>
                    </VStack>
                  </Box>

                  {/* Gaming & Creativity */}
                  <Box
                    bg={{ base: "white", _dark: "gray.800" }}
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.700" }}
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl"
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack spacing={4} alignItems="flex-start">
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="red.50"
                        _dark={{ bg: "red.900" }}
                      >
                        <FaGamepad color="#ff6b6b" size={24} />
                      </Box>
                      <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                        Gaming & Creativity
                      </Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.300" }} lineHeight="tall">
                        Interactive experiences that inspire creativity and 
                        push the boundaries of what's possible.
                      </Text>
                    </VStack>
                  </Box>

                  {/* Music & Art */}
                  <Box
                    bg={{ base: "white", _dark: "gray.800" }}
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor={{ base: "gray.200", _dark: "gray.700" }}
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "xl"
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack spacing={4} alignItems="flex-start">
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg="yellow.50"
                        _dark={{ bg: "yellow.900" }}
                      >
                        <FaMusic color="#f9ca24" size={24} />
                      </Box>
                      <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                        Music & Art
                      </Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.300" }} lineHeight="tall">
                        Exploring the intersection of technology and art through 
                        music production and creative coding.
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </AnimatedContent>

          {/* Call to Action */}
          <AnimatedContent delay={800}>
            <Box
              maxW="3xl"
              bg={{ base: "gray.50", _dark: "gray.800" }}
              p={12}
              borderRadius="2xl"
              textAlign="center"
              border="1px solid"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack spacing={6}>
                <Heading 
                  size="lg" 
                  color={{ base: "gray.900", _dark: "white" }}
                >
                  Let's Connect & Build Something Amazing
                </Heading>
                <Text 
                  fontSize="lg" 
                  color={{ base: "gray.600", _dark: "gray.300" }}
                  lineHeight="tall"
                >
                  I'm always excited to connect with fellow developers, creators, 
                  and anyone passionate about technology. Whether you have a project 
                  idea, want to collaborate, or just chat about code - let's connect!
                </Text>
              </VStack>
            </Box>
          </AnimatedContent>
        </VStack>
      </Box>
    </MainLayout>
  );
}
