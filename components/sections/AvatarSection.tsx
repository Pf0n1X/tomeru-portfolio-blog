"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGamepad, FaCode, FaBook, FaMusic } from "react-icons/fa";
import Image from "next/image";
import { TechBubble } from "@/components/ui/TechBubble";
import { AnimatedContent } from "@/components/layout/AnimatedContent";

// Floating bubble data
const bubbleData = [
  { icon: FaGamepad, label: "Gaming", color: "#f56565", delay: 0 },
  { icon: FaCode, label: "Software", color: "#f56565", delay: 0.1 },
  { icon: FaBook, label: "Books", color: "#f56565", delay: 0.2 },
  { icon: FaMusic, label: "Music", color: "#f56565", delay: 0.3 }
];

export function AvatarSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VStack gap={12} textAlign="center">
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

            {/* Floating Tech Bubbles */}
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
          </motion.div>
        </Box>
      </AnimatedContent>

      {/* Hero Text */}
      <AnimatedContent delay={600}>
        <VStack gap={4} maxW="4xl">
          <Heading 
            size="2xl" 
            color={{ base: "gray.900", _dark: "white" }}
            letterSpacing="tight"
          >
            Hello, I&apos;m Tomer 👋
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color={{ base: "gray.600", _dark: "gray.400" }}
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
