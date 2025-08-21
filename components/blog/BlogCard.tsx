import { Box, Heading, Text, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

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
      _hover={{ textDecoration: 'none' }}
      _focus={{ outline: 'none', boxShadow: 'none' }}
      h="full"
      display="flex"
    >
      <Box
        position="relative"
        zIndex={1}
        p={6}
        bg="rgba(248, 250, 252, 0.8)"
        _dark={{ bg: 'rgba(255, 255, 255, 0.02)' }}
        backdropFilter="blur(20px)"
        rounded="lg"
        shadow={{ base: 'md', _dark: 'none' }}
        borderWidth="1px"
        borderColor={{ base: 'rgba(0, 0, 0, 0.1)', _dark: 'rgba(255, 255, 255, 0.1)' }}
        _hover={{
          shadow: 'lg',
          transform: 'translateY(-1px)',
          borderColor: 'red.400',
        }}
        _active={{
          transform: 'translateY(0px)',
          shadow: 'md',
          borderColor: 'red.500',
        }}
        transition="all 0.15s"
        cursor="pointer"
        h="full"
        display="flex"
        flexDirection="column"
      >
        <Heading size="md" mb={3} color="gray.900" _dark={{ color: 'white' }}>
          {post.title}
        </Heading>

        <Text color="gray.600" _dark={{ color: 'gray.300' }} mb={4} lineHeight="tall" flex={1}>
          {post.excerpt}
        </Text>

        <HStack justify="space-between" align="center" mb={3}>
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
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
              _dark={{ bg: 'gray.700', color: 'gray.200' }}
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
  );
}
