"use client"

import { Box, VStack, Text, Link, Icon } from "@chakra-ui/react"
import { FiHome, FiFileText } from "react-icons/fi"
import NextLink from "next/link"
import { Logo } from "./Logo"
import { ColorModeButton } from "@/components/ui/color-mode"

export function Sidebar() {
  return (
    <Box
      w="280px"
      bg="gray.900"
      borderRight="1px"
      borderColor="gray.700"
      p={6}
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      overflowY="auto"
      zIndex={10}
    >
      <VStack align="start" gap={8} h="full">
        {/* Logo */}
        <Logo />
        
        {/* Navigation */}
        <VStack align="start" gap={4} flex={1}>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Navigation
          </Text>
          
          <VStack align="start" gap={2} w="full">
            <Link
              as={NextLink}
              href="/"
              display="flex"
              alignItems="center"
              gap={3}
              px={4}
              py={3}
              rounded="md"
              w="full"
              color="gray.300"
              _hover={{
                bg: "gray.800",
                color: "white",
                textDecoration: "none"
              }}
              transition="all 0.2s"
            >
              <Icon as={FiHome} />
              <Text>Home</Text>
            </Link>
            
            <Link
              as={NextLink}
              href="/blog"
              display="flex"
              alignItems="center"
              gap={3}
              px={4}
              py={3}
              rounded="md"
              w="full"
              color="gray.300"
              _hover={{
                bg: "gray.800",
                color: "white",
                textDecoration: "none"
              }}
              transition="all 0.2s"
            >
              <Icon as={FiFileText} />
              <Text>Blog</Text>
            </Link>
          </VStack>
        </VStack>
        
        {/* Theme Toggle */}
        <Box>
          <ColorModeButton />
        </Box>
      </VStack>
    </Box>
  )
}
