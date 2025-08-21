'use client';

import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface FactItemProps {
  emoji: string;
  text: string;
  delay?: number;
}

export function FactItem({ emoji, text, delay = 0 }: FactItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 8 }}
    >
      <HStack gap={3} p={2} borderRadius="lg">
        <Text fontSize="md">{emoji}</Text>
        <Text color={{ base: 'gray.600', _dark: 'gray.300' }} fontSize="sm">
          {text}
        </Text>
      </HStack>
    </motion.div>
  );
}
