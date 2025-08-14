"use client"

import { useState } from "react"
import { Box, Heading, Text, Link, Button } from "@chakra-ui/react"
import { MainLayout } from "@/components/layout/MainLayout"
import { BlogCarousel } from "@/components/blog/BlogCarousel"
import { AnimatedContent } from "@/components/layout/AnimatedContent"
import { HeroSection } from "./HeroSection"
import { SkewRevealText } from "@/components/ui/TypewriterText"
import NextLink from "next/link"

interface BlogPostData {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

interface HomePageProps {
  featuredPosts: BlogPostData[]
}

export function HomePage({ featuredPosts }: HomePageProps) {
  // Calculate skew animation duration: 1900ms delay (after nav completes) + (28 chars × 60ms) + 500ms buffer
  const skewDuration = 1900 + (28 * 60) + 500 // = 4080ms

  return (
    <MainLayout>
      {/* Hero Section */}
      <Box mb={12} display="flex" justifyContent="center">
        <HeroSection />
      </Box>
      
      {/* Flavor Text Section */}
      <Box maxW="6xl" mx="auto" px={8} mb={12}>
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
          <AnimatedContent delay={skewDuration + 200}>
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
          </AnimatedContent>
        </Box>
      </Box>
      
      {/* Featured Posts Section */}
      <Box maxW="6xl" mx="auto" px={8} mb={8}>
        <AnimatedContent delay={skewDuration + 500}>
          <Box mb={8} textAlign="center">
            <Heading size="xl" color={{ base: "gray.900", _dark: "white" }}>
              Latest Posts
            </Heading>
          </Box>
        </AnimatedContent>
        
        <AnimatedContent delay={skewDuration + 700}>
          <Box mb={8}>
            <BlogCarousel posts={featuredPosts} />
          </Box>
        </AnimatedContent>
        
        <AnimatedContent delay={skewDuration + 900}>
          <Box textAlign="center">
            <Link as={NextLink} href="/blog">
              <Button variant="outline" colorScheme="red" px={8} py={4}>
                View All Posts
              </Button>
            </Link>
          </Box>
        </AnimatedContent>
      </Box>
    </MainLayout>
  )
}
