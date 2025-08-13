"use client"

import { Box, Heading, Text, VStack, Button, HStack, SimpleGrid, Link } from "@chakra-ui/react"
import { MainLayout } from "@/components/layout/MainLayout"
import { BlogCard } from "@/components/blog/BlogCard"
import { AnimatedContent } from "@/components/layout/AnimatedContent"
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
  return (
    <MainLayout>
      <Box maxW="6xl" mx="auto">
        {/* Hero Section */}
        <VStack align="start" gap={8} mb={16}>
          <AnimatedContent delay={0}>
            <Box>
              <Heading 
                size="4xl" 
                mb={6} 
                color="gray.900" 
                _dark={{ color: "white" }}
                lineHeight="shorter"
              >
                Welcome to Tom's
                <br />
                <Text as="span" color="red.600" _dark={{ color: "red.400" }}>
                  Portfolio & Blog
                </Text>
              </Heading>
              <Text 
                fontSize="xl" 
                color="gray.600" 
                _dark={{ color: "gray.300" }}
                maxW="2xl"
                lineHeight="tall"
              >
                I'm a software developer passionate about building modern web applications. 
                Here you'll find my thoughts on web development, programming tutorials, and insights 
                from my journey in tech.
              </Text>
            </Box>
          </AnimatedContent>
          
          <AnimatedContent delay={100}>
            <HStack gap={4}>
              <Link as={NextLink} href="/blog">
                <Button colorScheme="red" size="lg" px={8} py={6}>
                  Read My Blog
                </Button>
              </Link>
              <Link as={NextLink} href="#about">
                <Button variant="outline" size="lg" px={8} py={6}>
                  About Me
                </Button>
              </Link>
            </HStack>
          </AnimatedContent>
        </VStack>
        
        {/* Featured Posts Section */}
        <AnimatedContent delay={200}>
          <Box>
            <Heading size="xl" mb={6} color="gray.900" _dark={{ color: "white" }}>
              Featured Posts
            </Heading>
          </Box>
        </AnimatedContent>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={8}>
          {featuredPosts.map((post, index) => (
            <AnimatedContent key={post.id} delay={300 + index * 100}>
              <BlogCard post={post} />
            </AnimatedContent>
          ))}
        </SimpleGrid>
        
        <AnimatedContent delay={300 + featuredPosts.length * 100}>
          <Box textAlign="center">
            <Link as={NextLink} href="/blog">
              <Button variant="outline" colorScheme="red" px={6} py={4}>
                View All Posts
              </Button>
            </Link>
          </Box>
        </AnimatedContent>
      </Box>
    </MainLayout>
  )
}
