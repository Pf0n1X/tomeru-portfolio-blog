'use client';

import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FactItem } from '@/components/ui/FactItem';

interface QuickFact {
  emoji: string;
  text: string;
}

const quickFacts: QuickFact[] = [
  { emoji: '☕', text: 'Coffee powered' },
  { emoji: '🌙', text: 'Night owl coder' },
  { emoji: '🚀', text: 'Tech enthusiast' },
];

interface QuickFactsSectionProps {
  delay?: number;
}

export function QuickFactsSection({ delay = 1300 }: QuickFactsSectionProps) {
  return (
    <Box flex={{ base: 1, lg: 1 }} maxW={{ lg: '300px' }} h="320px">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay / 1000 }}
        style={{ height: '100%' }}
      >
        <Box
          position="relative"
          bg="rgba(248, 250, 252, 0.8)"
          _dark={{ bg: 'rgba(255, 255, 255, 0.02)' }}
          backdropFilter="blur(20px)"
          borderRadius="2xl"
          p={5}
          border="1px solid"
          borderColor={{ base: 'rgba(0, 0, 0, 0.1)', _dark: 'rgba(255, 255, 255, 0.1)' }}
          shadow={{ base: 'md', _dark: 'none' }}
          h="full"
        >
          <VStack gap={4} align="stretch" h="full">
            <HStack gap={3}>
              <Box
                w={3}
                h={3}
                bg="red.400"
                borderRadius="full"
                boxShadow="0 0 10px rgba(245, 101, 101, 0.6)"
              />
              <Heading size="md" color={{ base: 'gray.900', _dark: 'white' }}>
                ⚡ Quick Facts
              </Heading>
            </HStack>
            
            <VStack gap={3} align="stretch" flex={1} justify="center">
              {quickFacts.map((fact, index) => (
                <FactItem
                  key={fact.text}
                  emoji={fact.emoji}
                  text={fact.text}
                  delay={delay / 1000 + 0.5 + index * 0.1}
                />
              ))}
            </VStack>

            <VStack gap={2} textAlign="center">
              <HStack justify="space-around" w="full">
                <VStack gap={1}>
                  <Text fontSize="xl" fontWeight="bold" color={{ base: 'gray.900', _dark: 'white' }}>
                    10+
                  </Text>
                  <Text fontSize="xs" color={{ base: 'gray.600', _dark: 'gray.400' }}>
                    Years
                  </Text>
                </VStack>
                <VStack gap={1}>
                  <Text fontSize="xl" fontWeight="bold" color={{ base: 'gray.900', _dark: 'white' }}>
                    ∞
                  </Text>
                  <Text fontSize="xs" color={{ base: 'gray.600', _dark: 'gray.400' }}>
                    Ideas
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}
