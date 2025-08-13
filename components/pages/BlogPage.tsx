"use client"

import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import { BlogCard } from "@/components/blog/BlogCard"
import { MainLayout } from "@/components/layout/MainLayout"

interface BlogPostData {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

interface BlogPageProps {
  posts: BlogPostData[]
}

export function BlogPage({ posts }: BlogPageProps) {
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
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}
