"use client";

import { Box, Text, Link, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={{ base: "gray.50", _dark: "gray.800" }}
      borderTop="1px solid"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      mt="auto"
      py={8}
    >
      <Box maxW="7xl" mx="auto" px={8}>
        <Box textAlign="center" mb={4}>
          <HStack justify="center" gap={6} mb={4}>
            <Link
              href="https://www.linkedin.com/in/tomer-erusalimsky-b2540619a"
              target="_blank"
              rel="noopener noreferrer"
              color={{ base: "gray.600", _dark: "gray.400" }}
              _hover={{ color: "red.400" }}
              fontSize="xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/TomerPF"
              target="_blank"
              rel="noopener noreferrer"
              color={{ base: "gray.600", _dark: "gray.400" }}
              _hover={{ color: "red.400" }}
              fontSize="xl"
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:tom.eru@gmail.com"
              color={{ base: "gray.600", _dark: "gray.400" }}
              _hover={{ color: "red.400" }}
              fontSize="xl"
            >
              <FaEnvelope />
            </Link>
          </HStack>
        </Box>
        
        <Box textAlign="center">
          <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }} mb={2}>
            © {currentYear} Tomer Erusalimsky. All rights reserved.
          </Text>
          <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
            Built with Next.js & Chakra UI
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
