'use client';

import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  href: string;
  target?: string;
  rel?: string;
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function ContactCard({ 
  href, 
  target, 
  rel, 
  icon, 
  title, 
  description, 
  delay = 0, 
}: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{ flex: 1 }}
    >
      <Link
        href={href}
        target={target}
        rel={rel}
        position="relative"
        bg="rgba(248, 250, 252, 0.8)"
        _dark={{ bg: 'rgba(255, 255, 255, 0.02)' }}
        backdropFilter="blur(20px)"
        borderRadius="2xl"
        p={6}
        border="1px solid"
        borderColor={{ base: 'rgba(0, 0, 0, 0.1)', _dark: 'rgba(255, 255, 255, 0.1)' }}
        shadow={{ base: 'md', _dark: 'none' }}
        h="full"
        cursor="pointer"
        display="block"
        textDecoration="none"
        _hover={{
          textDecoration: 'none',
          shadow: 'lg',
          transform: 'translateY(-1px)',
          borderColor: 'red.400',
        }}
        _active={{
          transform: 'translateY(0px)',
          shadow: 'md',
          borderColor: 'red.500',
        }}
        _focus={{ outline: 'none', boxShadow: 'none' }}
        transition="all 0.15s"
      >
        <Box>
          <VStack gap={4} textAlign="center">
            <Box
              w={12}
              h={12}
              bg="rgba(245, 101, 101, 0.1)"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="2px solid"
              borderColor="rgba(245, 101, 101, 0.3)"
            >
              <Text fontSize="2xl">{icon}</Text>
            </Box>
            <VStack gap={2}>
              <Heading size="md" color={{ base: 'gray.900', _dark: 'white' }}>
                {title}
              </Heading>
              <Text 
                fontSize="sm" 
                color={{ base: 'gray.600', _dark: 'gray.400' }}
                textAlign="center"
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Link>
    </motion.div>
  );
}
