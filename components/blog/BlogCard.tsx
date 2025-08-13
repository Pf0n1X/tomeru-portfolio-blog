"use client"

import { Box, Heading, Text, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      as={NextLink} 
      href={`/blog/${post.slug}`}
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
    >
      <Box
        p={6}
        bg="white"
        _dark={{ bg: "gray.900", borderColor: "gray.800" }}
        rounded="lg"
        shadow="none"
        borderWidth="1px"
        borderColor="gray.300"
        _hover={{
          shadow: "lg",
          transform: "translateY(-1px)",
          borderColor: "red.400"
        }}
        transition="all 0.2s"
        cursor="pointer"
        h="full"
        display="flex"
        flexDirection="column"
      >
        <Heading size="md" mb={3} color="gray.900" _dark={{ color: "white" }}>
          {post.title}
        </Heading>
        
        <Text color="gray.600" _dark={{ color: "gray.300" }} mb={4} lineHeight="tall" flex={1}>
          {post.excerpt}
        </Text>
        
        <HStack justify="space-between" align="center" mb={3}>
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
    </Link>
  )
}
