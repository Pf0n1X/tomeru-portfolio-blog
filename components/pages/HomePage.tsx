"use client";

import { Box, Text } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "./HeroSection";
import { SkewRevealText } from "@/components/ui/TypewriterText";

import { BlogSection } from "@/components/sections/BlogSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import type { BlogPostMeta } from "@/lib/mdx";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HomePageProps {
  featuredPosts: BlogPostMeta[]
}

export function HomePage({ featuredPosts }: HomePageProps) {
  const { ref: flavorTextRef, isVisible: flavorTextVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <Box mb={12} display="flex" justifyContent="center">
        <HeroSection />
      </Box>
      
      {/* Flavor Text Section */}
      <Box ref={flavorTextRef} maxW="6xl" mx="auto" px={8} mb={12}>
        <Box textAlign="center">
          <SkewRevealText
            text="Crafting Digital Experiences"
            delay={1900}
            speed={60}
            isHeading={true}
            size={{ base: "2xl", md: "3xl" }}
            color={{ base: "gray.900", _dark: "white" }}
            fontWeight="bold"
            letterSpacing="tight"
            mb={6}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={flavorTextVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              color={{ base: "gray.600", _dark: "gray.400" }}
              lineHeight="tall"
              maxW="4xl"
              mx="auto"
            >
              Passionate about building modern, performant web applications 
              that deliver exceptional user experiences. I focus on clean code, 
              scalable architecture, and cutting-edge technologies.
            </Text>
          </motion.div>
        </Box>
      </Box>
      
      {/* Featured Posts Section */}
      <BlogSection featuredPosts={featuredPosts} />

      {/* Connect Section */}
      <ConnectSection />
    </MainLayout>
  );
}