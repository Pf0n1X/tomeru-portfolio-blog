"use client"

import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react"
import { MainLayout } from "@/components/layout/MainLayout"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Mock data - in a real app, this would come from a CMS or database
const mockPost = {
  title: "Getting Started with Next.js and TypeScript",
  content: `
    # Introduction

    Next.js is a powerful React framework that makes building web applications a breeze. When combined with TypeScript, it provides an excellent developer experience with type safety and modern tooling.

    ## Why Next.js?

    Next.js offers several advantages:

    - **Server-Side Rendering (SSR)**: Improves SEO and initial page load times
    - **Static Site Generation (SSG)**: Pre-renders pages at build time for optimal performance
    - **API Routes**: Build full-stack applications with built-in API endpoints
    - **Automatic Code Splitting**: Only loads the JavaScript needed for each page
    - **Image Optimization**: Automatically optimizes images for better performance

    ## Setting Up TypeScript

    Adding TypeScript to your Next.js project is straightforward:

    \`\`\`bash
    npx create-next-app@latest my-app --typescript
    \`\`\`

    This command creates a new Next.js project with TypeScript already configured.

    ## Best Practices

    1. **Use Proper Types**: Always define interfaces for your props and data structures
    2. **Leverage Next.js Features**: Make use of built-in optimizations like Image component
    3. **Code Organization**: Keep components modular and follow consistent naming conventions
    4. **Performance**: Use dynamic imports for code splitting when needed

    ## Conclusion

    Next.js with TypeScript provides a robust foundation for building modern web applications. The combination of React's component model, Next.js's performance optimizations, and TypeScript's type safety creates an excellent development experience.
  `,
  date: "Dec 15, 2024",
  readTime: "5 min read",
  tags: ["Next.js", "TypeScript", "React"],
  author: "Tom Erusalimsky"
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch the post based on the slug
  // For now, we'll show the mock post for any slug
  const post = mockPost

  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      <Box maxW="4xl" mx="auto">
        <VStack align="start" gap={6}>
          {/* Header */}
          <Box>
            <Heading size="2xl" mb={4} color="gray.900" _dark={{ color: "white" }}>
              {post.title}
            </Heading>
            
            <HStack gap={4} mb={4}>
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                By {post.author}
              </Text>
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                {post.date} • {post.readTime}
              </Text>
            </HStack>
            
            <HStack gap={2} flexWrap="wrap">
              {post.tags.map((tag) => (
                <Box
                  key={tag}
                  px={2}
                  py={1}
                  bg="gray.100"
                  _dark={{ bg: "gray.700", color: "gray.200" }}
                  color="gray.700"
                  rounded="md"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {tag}
                </Box>
              ))}
            </HStack>
          </Box>
          
          {/* Content */}
          <Box
            w="full"
            color="gray.700"
            _dark={{ color: "gray.300" }}
            lineHeight="tall"
            fontSize="lg"
          >
            <Text whiteSpace="pre-line">{post.content}</Text>
          </Box>
        </VStack>
      </Box>
    </MainLayout>
  )
}
