"use client";

import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  color: string;
}

const technologies: TechItem[] = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
];

interface TechStackSectionProps {
  delay?: number;
}

export function TechStackSection({ delay = 1000 }: TechStackSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
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
            textAlign="center" 
            color={{ base: "gray.600", _dark: "gray.400" }}
            fontSize="sm"
            mb={2}
          >
            Building with modern technologies for scalable solutions
          </Text>

          <VStack gap={3} align="stretch">
            {[0, 1].map((rowIndex) => (
              <HStack key={rowIndex} gap={2} justify="center" wrap="wrap">
                {technologies.slice(rowIndex * 4, (rowIndex + 1) * 4).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: delay / 1000 + 0.5 + (rowIndex * 4 + index) * 0.1 
                    }}
                  >
                    <Box
                      px={3}
                      py={2}
                      bg="white"
                      _dark={{ bg: "gray.800" }}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                      color={{ base: "gray.700", _dark: "gray.200" }}
                      border="2px solid"
                      borderColor="transparent"
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
                        bg: tech.color,
                        opacity: 0,
                        transition: "opacity 0.2s ease",
                        zIndex: -1
                      }}
                      transition="all 0.2s ease"
                    >
                      {tech.name}
                    </Box>
                  </motion.div>
                ))}
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
    </motion.div>
  );
}
