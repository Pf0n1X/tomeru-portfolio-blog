"use client";

import { Box, Text } from "@chakra-ui/react";
import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";

interface BlogPostData {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

interface BlogCarouselProps {
  posts: BlogPostData[]
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
  const [duplicatedPosts, setDuplicatedPosts] = useState<BlogPostData[]>([]);
  const [cardWidth, setCardWidth] = useState(380);

  useEffect(() => {
    // Duplicate posts to create seamless loop
    const duplicates = Math.max(3, Math.ceil(8 / posts.length));
    const allPosts = Array(duplicates).fill(posts).flat();
    setDuplicatedPosts(allPosts);
  }, [posts]);

  useEffect(() => {
    // Set card width based on screen size
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 768 ? 320 : 400);
    };
    
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  if (!posts.length) {
    return (
      <Box textAlign="center" py={8}>
        <Text color={{ base: "gray.500", _dark: "gray.400" }}>No posts available</Text>
      </Box>
    );
  }

  const totalWidth = posts.length * cardWidth;

  return (
    <>
      <style>
        {`
          @keyframes slideCarousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${totalWidth}px);
            }
          }
          
          .carousel-container {
            animation: slideCarousel 60s linear infinite;
          }
          
          .carousel-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <Box 
        position="relative" 
        overflow="hidden" 
        width="100%"
        py={4}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: { base: "50px", md: "100px" },
          height: "100%",
          bgGradient: { 
            base: "linear(to-r, white, transparent)", 
            _dark: "linear(to-r, gray.900, transparent)" 
          },
          zIndex: 2,
          pointerEvents: "none"
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: { base: "50px", md: "100px" },
          height: "100%",
          bgGradient: { 
            base: "linear(to-l, white, transparent)", 
            _dark: "linear(to-l, gray.900, transparent)" 
          },
          zIndex: 2,
          pointerEvents: "none"
        }}
      >
        <Box
          display="flex"
          className="carousel-container"
        >
          {duplicatedPosts.map((post, index) => (
            <Box
              key={`${post.id}-${index}`}
              minW={{ base: "300px", md: "380px" }}
              maxW={{ base: "300px", md: "380px" }}
              mx={{ base: 1, md: 2 }}
            >
              <BlogCard post={post} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
