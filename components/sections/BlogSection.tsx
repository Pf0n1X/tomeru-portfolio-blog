'use client';

import { Box, Heading, Link, Button } from '@chakra-ui/react';
import { BlogCarousel } from '@/components/blog/BlogCarousel';
import NextLink from 'next/link';
import type { BlogPostMeta } from '@/lib/mdx';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BlogSectionProps {
  featuredPosts: BlogPostMeta[];
}

export function BlogSection({ featuredPosts }: BlogSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  // Transform BlogPost to BlogPostData format expected by BlogCarousel
  const transformedPosts = featuredPosts.map(post => ({
    id: post.slug,
    ...post,
  }));

  return (
    <Box ref={ref} maxW="6xl" mx="auto" px={8} py={16}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <Box mb={8} textAlign="center">
          <Heading size="xl" color={{ base: 'gray.900', _dark: 'white' }}>
            Latest Posts
          </Heading>
        </Box>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Box mb={8}>
          <BlogCarousel posts={transformedPosts} />
        </Box>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box textAlign="center">
          <Link as={NextLink} href="/blog" _hover={{ textDecoration: 'none' }}>
            <Button 
              variant="outline" 
              colorScheme="red" 
              px={8} 
              py={4}
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
            >
              View All Posts
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}
