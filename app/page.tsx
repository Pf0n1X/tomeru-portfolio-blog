"use client"

import { Box, Heading, Text, VStack, Button, HStack, SimpleGrid, Link } from "@chakra-ui/react"
import { MainLayout } from "@/components/layout/MainLayout"
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard"
import NextLink from "next/link"

// Featured blog posts for the home page
const featuredPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "Learn how to set up a modern web application using Next.js with TypeScript, including best practices and common patterns.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "TypeScript", "React"],
    slug: "getting-started-nextjs-typescript"
  },
  {
    id: "2",
    title: "Building Responsive UIs with Chakra UI",
    excerpt: "Discover how to create beautiful and accessible user interfaces using Chakra UI's component library and theming system.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    tags: ["Chakra UI", "React", "UI/UX"],
    slug: "building-responsive-uis-chakra"
  }
]

export default function Home() {
  return (
    <MainLayout>
      <Box maxW="6xl" mx="auto">
        {/* Hero Section */}
        <VStack align="start" gap={8} mb={16}>
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
        </VStack>
        
        {/* Featured Posts Section */}
        <Box>
          <Heading size="xl" mb={6} color="gray.900" _dark={{ color: "white" }}>
            Featured Posts
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={8}>
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </SimpleGrid>
          
          <Box textAlign="center">
            <Link as={NextLink} href="/blog">
              <Button variant="outline" colorScheme="red" px={6} py={4}>
                View All Posts
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  )
}
