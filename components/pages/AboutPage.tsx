"use client";

import { Box, Heading, Text, VStack, HStack, Flex } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { AnimatedContent } from "@/components/layout/AnimatedContent";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGamepad, FaCode, FaBook, FaMusic } from "react-icons/fa";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Floating bubble data
const bubbleData = [
  { icon: FaGamepad, label: "Gaming", color: "#f56565", delay: 0 },
  { icon: FaCode, label: "Software", color: "#f56565", delay: 0.1 },
  { icon: FaBook, label: "Books", color: "#f56565", delay: 0.2 },
  { icon: FaMusic, label: "Music", color: "#f56565", delay: 0.3 }
];

export function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Scroll animation hooks for different sections
  const { ref: avatarRef, isVisible: avatarVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });
  
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });
  
  const { ref: techStackRef, isVisible: techStackVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });
  
  const { ref: quickFactsRef, isVisible: quickFactsVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });
  
  const { ref: currentlyRef, isVisible: currentlyVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <MainLayout>
      <Box maxW="6xl" mx="auto" px={8} py={24} pt={60}>
        {/* Hero Section with Avatar */}
        <VStack gap={12} textAlign="center">
          {/* Avatar Section */}
          <Box ref={avatarRef} position="relative" mb={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={avatarVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2 
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ position: "relative", cursor: "pointer", width: 'fit-content' }}
            >
                <Image 
                  src="/transparent_sprite.png" 
                  alt="Tomer's avatar" 
                  width={400} 
                  height={430}
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
                      // Better arc - further from head and properly centered
                      const bubblePositions = [
                        { x: -240, y: -320 }, // Gaming - left, lower part of arc
                        { x: -110, y: -400 },  // Software - left center, highest (arc peak)
                        { x: 70, y: -400 },   // Learning - right center, highest (arc peak)  
                        { x: 200, y: -320 }   // Music - right, lower part of arc
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
                                shadow: "lg",
                                transform: "translateY(-1px)",
                                borderColor: "red.400"
                              }}
                              transition="all 0.2s"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={avatarVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Text 
                textAlign="center" 
                mt={6}
                fontSize="sm"
                color={{ base: "gray.500", _dark: "gray.500" }}
                fontStyle="italic"
              >
                Hover over my avatar to see what I'm passionate about! ✨
              </Text>
            </motion.div>
          </Box>

          {/* Title and Subtitle */}
          <Box ref={titleRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <VStack gap={4}>
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
            </motion.div>
          </Box>

          {/* Tech Stack & Journey */}
          <Box maxW="6xl" w="full">
            <VStack gap={16}>

              {/* Interactive Tech & Personal Grid - New Layout */}
              <Box ref={techStackRef} w="full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={techStackVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <VStack gap={12}>
                                        {/* Top Row - Tech Stack (Redesigned) */}
                    <Box w="full">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={techStackVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Box
                          position="relative"
                          bg="rgba(248, 250, 252, 0.8)"
                          _dark={{ bg: "rgba(255, 255, 255, 0.02)" }}
                          backdropFilter="blur(20px)"
                          borderRadius="2xl"
                          p={6}
                    border="1px solid"
                          borderColor={{ base: "rgba(0, 0, 0, 0.1)", _dark: "rgba(255, 255, 255, 0.1)" }}
                          shadow={{ base: "md", _dark: "none" }}
                        >
                          <VStack gap={4} align="stretch">
                            <HStack gap={3} justify="center">
                              <Box
                                w={3}
                                h={3}
                                bg="red.400"
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(245, 101, 101, 0.6)"
                              />
                              <Heading size="lg" color={{ base: "gray.900", _dark: "white" }}>
                                💻 Tech Stack
                              </Heading>
                            </HStack>
                            
                            <Text 
                              fontSize="md" 
                              color={{ base: "gray.600", _dark: "gray.400" }}
                              textAlign="center"
                              mb={2}
                            >
                              Building with modern technologies for scalable solutions
                              </Text>

                            {/* Simplified Tech Display */}
                            <Flex wrap="wrap" gap={2} justify="center" maxW="4xl" mx="auto">
                              {[
                                { name: "React", color: "rgba(97, 218, 251, 0.8)" },
                                { name: "Next.js", color: "rgba(255, 255, 255, 0.8)" },
                                { name: "TypeScript", color: "rgba(49, 120, 198, 0.8)" },
                                { name: "Node.js", color: "rgba(104, 160, 99, 0.8)" },
                                { name: "Python", color: "rgba(255, 212, 59, 0.8)" },
                                { name: "PostgreSQL", color: "rgba(51, 103, 145, 0.8)" },
                                { name: "Docker", color: "rgba(32, 139, 218, 0.8)" },
                                { name: "Git", color: "rgba(240, 81, 51, 0.8)" }
                              ].map((tech, index) => (
                                  <motion.div
                                  key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={techStackVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  >
                                    <Box
                                      px={3}
                                      py={2}
                                    bg="rgba(255, 255, 255, 0.05)"
                                    borderRadius="full"
                                      border="1px solid"
                                    borderColor={{ base: "rgba(0, 0, 0, 0.1)", _dark: "rgba(255, 255, 255, 0.1)" }}
                                      fontSize="sm"
                                      fontWeight="medium"
                                    color={{ base: "gray.700", _dark: "gray.300" }}
                                    cursor="pointer"
                                    position="relative"
                                    overflow="hidden"
                                    _hover={{
                                      borderColor: tech.color,
                                      color: { base: "gray.900", _dark: "white" },
                                      _before: {
                                        opacity: 1
                                      }
                                    }}
                                    _before={{
                                      content: '""',
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      background: `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`,
                                      opacity: 0,
                                      transition: "opacity 0.3s ease"
                                    }}
                                    transition="all 0.2s"
                                  >
                                    <Text position="relative" zIndex={1}>
                                      {tech.name}
                                    </Text>
                                    </Box>
                                  </motion.div>
                                ))}
                              </Flex>
                    </VStack>
                        </Box>
                      </motion.div>
                  </Box>

                                        {/* Bottom Row - New Layout: Quick Facts (1/3) + Currently (2/3) */}
                    <Flex 
                      direction={{ base: "column", lg: "row" }}
                      gap={8}
                      w="full"
                    >
                                            {/* Quick Facts - 1/3 width */}
                      <Box ref={quickFactsRef} flex={{ base: 1, lg: 1 }} maxW={{ lg: "300px" }} h="320px">
                      <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={quickFactsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          style={{ height: "100%" }}
                      >
                        <Box
                          position="relative"
                          bg="rgba(248, 250, 252, 0.8)"
                          _dark={{ bg: "rgba(255, 255, 255, 0.02)" }}
                          backdropFilter="blur(20px)"
                          borderRadius="2xl"
                            p={5}
                    border="1px solid"
                          borderColor={{ base: "rgba(0, 0, 0, 0.1)", _dark: "rgba(255, 255, 255, 0.1)" }}
                          shadow={{ base: "md", _dark: "none" }}
                          h="full"
                        >
                            <VStack gap={4} align="stretch" h="full">
                            <HStack gap={3}>
                              <Box
                                w={3}
                                h={3}
                                bg="red.400"
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(245, 101, 101, 0.6)"
                              />
                                <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                                  ✨ Quick Facts
                              </Heading>
                            </HStack>
                            
                              <VStack gap={2} align="stretch" flex={1}>
                                {[
                                  { emoji: "📚", text: "Book worm" },
                                  { emoji: "🎮", text: "Gamer" },
                                  { emoji: "🚀", text: "Tech enthusiast" },
                                  { emoji: "💪", text: "Gym rat" },
                              ].map((fact, index) => (
                                <motion.div
                                  key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={quickFactsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                  whileHover={{ x: 8 }}
                                >
                                    <HStack gap={2} p={1.5} borderRadius="lg">
                                      <Text fontSize="sm">{fact.emoji}</Text>
                                      <Text color={{ base: "gray.600", _dark: "gray.300" }} fontSize="xs">
                                      {fact.text}
                                    </Text>
                                  </HStack>
                                </motion.div>
                              ))}
                            </VStack>

                              <Box pt={3} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={quickFactsVisible ? { opacity: 1 } : { opacity: 0 }}
                                  transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                  <HStack justify="space-around">
                                    <VStack gap={0}>
                                      <Text fontSize="lg" fontWeight="bold" color={{ base: "gray.900", _dark: "white" }}>
                                      10+
                                    </Text>
                                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                                        Years
                                    </Text>
                                  </VStack>
                                    <VStack gap={0}>
                                      <Text fontSize="lg" fontWeight="bold" color={{ base: "gray.900", _dark: "white" }}>
                                      ∞
                                    </Text>
                                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                                        Ideas
                      </Text>
                    </VStack>
                                </HStack>
                              </motion.div>
                            </Box>
                          </VStack>
                        </Box>
                      </motion.div>
            </Box>

                                                                  {/* Currently Section - 2/3 width */}
                      <Box ref={currentlyRef} flex={{ base: 1, lg: 2 }} h="320px">
          <motion.div
                          initial={{ opacity: 0, y: 50 }}
            animate={currentlyVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          style={{ height: "100%" }}
          >
            <Box
              position="relative"
                            bg="rgba(248, 250, 252, 0.8)"
                            _dark={{ bg: "rgba(255, 255, 255, 0.02)" }}
              backdropFilter="blur(20px)"
                            borderRadius="2xl"
                            p={5}
                            border="1px solid"
                            borderColor={{ base: "rgba(0, 0, 0, 0.1)", _dark: "rgba(255, 255, 255, 0.1)" }}
                            h="full"
                          >
                            <VStack gap={4} align="stretch" h="full">
                              <HStack gap={3}>
                                                              <Box
                                w={3}
                                h={3}
                                bg="red.400"
                                borderRadius="full"
                                boxShadow="0 0 10px rgba(245, 101, 101, 0.6)"
                              />
                                <Heading size="md" color={{ base: "gray.900", _dark: "white" }}>
                                  Currently Enjoying
                                </Heading>
                              </HStack>
                              
                              <Flex 
                                direction={{ base: "column", md: "row" }}
                                gap={4}
                                flex={1}
                                align="stretch"
                              >
                                                                                                                                {/* Now Reading */}
                                <Box flex={1} display="flex" flexDirection="column">
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={currentlyVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    style={{ height: "100%", display: "flex", flexDirection: "column" }}
                                  >
                                    <VStack gap={2} align="stretch" h="full">
                                      <VStack gap={1} align="start">
                                        <HStack gap={2}>
                                          <Text fontSize="lg">📚</Text>
                                          <Text 
                                            fontSize="sm" 
                                            fontWeight="semibold"
                                            color={{ base: "gray.700", _dark: "gray.300" }}
                                          >
                                            Reading
                                          </Text>
                                        </HStack>
                                      </VStack>
                                      
                                      <Box
                                        p={4}
                                        bg="rgba(245, 101, 101, 0.05)"
                                        borderRadius="xl"
                                        border="1px solid"
                                        borderColor="rgba(245, 101, 101, 0.2)"
                                        flex={1}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        minH="140px"
                                      >
                                        <VStack gap={2} align="start" justify="space-between" h="full">
                                          <VStack gap={2} align="start">
                                            <Text 
                                              fontSize="md" 
                                              fontWeight="semibold" 
                                              color={{ base: "gray.900", _dark: "white" }}
                                              lineHeight="short"
                                            >
                                              "Oathbringer"
                                            </Text>
                                            <Text 
                                              fontSize="sm" 
                                              color={{ base: "gray.600", _dark: "gray.400" }}
                                            >
                                              by Brandon Sanderson
                                            </Text>
                                          </VStack>
                                          <VStack gap={2} align="start" w="full">
                                            <HStack gap={2} w="full">
                                              <Box flex={1} h={2} bg="red.400" borderRadius="full" />
                                              <Box flex={2} h={2} bg="gray.300" _dark={{ bg: "gray.600" }} borderRadius="full" />
                                            </HStack>
                                            <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                                              30% complete
                                            </Text>
                                          </VStack>
                                        </VStack>
                                      </Box>
                                      
                                      <Text 
                                        fontSize="xs" 
                                        color={{ base: "gray.600", _dark: "gray.400" }}
                                        fontStyle="italic"
              textAlign="center"
                                        pt={1}
                                      >
                                        Epic fantasy with incredible world-building! ⚔️
                                      </Text>
                                    </VStack>
                                  </motion.div>
                                </Box>

                                {/* Now Playing */}
                                <Box flex={1} display="flex" flexDirection="column">
                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={currentlyVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    style={{ height: "100%", display: "flex", flexDirection: "column" }}
                                  >
                                                                        <VStack gap={2} align="stretch" h="full">
                                      <VStack gap={1} align="start">
                                        <HStack gap={2}>
                                          <Text fontSize="lg">🎮</Text>
                                          <Text 
                                            fontSize="sm" 
                                            fontWeight="semibold"
                                            color={{ base: "gray.700", _dark: "gray.300" }}
                                          >
                                            Playing
                                          </Text>
                                        </HStack>
                                      </VStack>
                                      
                                      <Box
                                        p={4}
                                        bg="rgba(245, 101, 101, 0.05)"
                                        borderRadius="xl"
                                        border="1px solid"
                                        borderColor="rgba(245, 101, 101, 0.2)"
                                        flex={1}
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        minH="140px"
                                      >
                                        <VStack gap={2} align="start" justify="space-between" h="full">
                                          <VStack gap={2} align="start">
                                            <Text 
                                              fontSize="md" 
                                              fontWeight="semibold" 
                    color={{ base: "gray.900", _dark: "white" }}
                                              lineHeight="short"
                                            >
                                              Metaphor: ReFantazio
                                            </Text>
                                            <Text 
                                              fontSize="sm" 
                                              color={{ base: "gray.600", _dark: "gray.400" }}
                                            >
                                              Atlus's fantasy JRPG
                                            </Text>
                                          </VStack>
                                          <HStack gap={2} wrap="wrap">
                                            <Box px={2} py={1} bg="rgba(245, 101, 101, 0.2)" borderRadius="md">
                                              <Text fontSize="xs" color={{ base: "red.700", _dark: "red.300" }}>
                                                JRPG
                                              </Text>
                                            </Box>
                                            <Box px={2} py={1} bg="rgba(245, 101, 101, 0.2)" borderRadius="md">
                                              <Text fontSize="xs" color={{ base: "red.700", _dark: "red.300" }}>
                                                Fantasy
                                              </Text>
                                            </Box>
                                          </HStack>
                                        </VStack>
                                      </Box>
                                      
                                      <Text 
                                        fontSize="xs" 
                                        color={{ base: "gray.600", _dark: "gray.400" }}
                                        fontStyle="italic"
                                        textAlign="center"
                                        pt={1}
                                      >
                                        Magic meets democracy! 🏛️✨
                                      </Text>
                                    </VStack>
                                  </motion.div>
                                </Box>
                              </Flex>
                            </VStack>
                          </Box>
                        </motion.div>
                      </Box>
                    </Flex>
                  </VStack>
                </motion.div>
                </Box>
              </VStack>
            </Box>

          
        </VStack>
      </Box>
    </MainLayout>
  );
}
