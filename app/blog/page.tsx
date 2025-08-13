"use client"

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard"
import { MainLayout } from "@/components/layout/MainLayout"

// Mock data for demo purposes
const mockPosts: BlogPost[] = [
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
  },
  {
    id: "3",
    title: "Modern JavaScript: ES2024 Features",
    excerpt: "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    tags: ["JavaScript", "ES2024", "Web Development"],
    slug: "modern-javascript-es2024"
  },
  {
    id: "4",
    title: "State Management with Zustand",
    excerpt: "A comprehensive guide to managing application state using Zustand, a lightweight alternative to Redux.",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    tags: ["Zustand", "State Management", "React"],
    slug: "state-management-zustand"
  }
]

export default function BlogPage() {
  return (
    <MainLayout>
      <Box maxW="6xl" mx="auto">
        <Box mb={12}>
          <Heading size="2xl" mb={4} color="gray.900" _dark={{ color: "white" }}>
            Blog Posts
          </Heading>
          <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
            Thoughts on web development, programming, and technology.
          </Text>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {mockPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}
