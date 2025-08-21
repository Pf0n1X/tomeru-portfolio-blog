'use client';

import { Box, Heading, HStack, VStack, Text, Progress } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface CurrentlyEnjoyingSectionProps {
  delay?: number;
}

export function CurrentlyEnjoyingSection({ delay = 1400 }: CurrentlyEnjoyingSectionProps) {
  return (
    <Box flex={{ base: 1, lg: 2 }} h="320px">
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
                🎯 Currently Enjoying
              </Heading>
            </HStack>

            <VStack gap={6} flex={1} justify="space-around">
              {/* Reading Section */}
              <VStack gap={3} align="stretch">
                <HStack gap={2}>
                  <Text fontSize="lg">📚</Text>
                  <Text fontWeight="semibold" color={{ base: 'gray.900', _dark: 'white' }}>
                    Reading
                  </Text>
                </HStack>
                
                <VStack gap={2} align="stretch">
                  <Text fontWeight="medium" color={{ base: 'gray.800', _dark: 'gray.200' }}>
                    "Oathbringer"
                  </Text>
                  <Text fontSize="sm" color={{ base: 'gray.600', _dark: 'gray.400' }}>
                    by Brandon Sanderson
                  </Text>
                  <Box>
                    <Progress.Root 
                      value={30} 
                      size="sm"
                      borderRadius="full"
                      bg={{ base: 'gray.200', _dark: 'gray.700' }}
                    >
                      <Progress.Track>
                        <Progress.Range bg="red.400" />
                      </Progress.Track>
                    </Progress.Root>
                    <Text fontSize="xs" color={{ base: 'gray.500', _dark: 'gray.500' }} mt={1}>
                      30% complete
                    </Text>
                  </Box>
                  
                  <Text 
                    fontSize="xs" 
                    fontStyle="italic" 
                    color={{ base: 'gray.500', _dark: 'gray.500' }}
                  >
                    Epic fantasy with incredible world-building! ⚔️
                  </Text>
                </VStack>
              </VStack>

              {/* Playing Section */}
              <VStack gap={3} align="stretch">
                <HStack gap={2}>
                  <Text fontSize="lg">🎮</Text>
                  <Text fontWeight="semibold" color={{ base: 'gray.900', _dark: 'white' }}>
                    Playing
                  </Text>
                </HStack>
                
                <VStack gap={2} align="stretch">
                  <Text fontWeight="medium" color={{ base: 'gray.800', _dark: 'gray.200' }}>
                    Metaphor: ReFantazio
                  </Text>
                  <Text fontSize="sm" color={{ base: 'gray.600', _dark: 'gray.400' }}>
                    Atlus's fantasy JRPG
                  </Text>
                  
                  <HStack gap={2} flexWrap="wrap">
                    <Box
                      px={2}
                      py={1}
                      bg="rgba(245, 101, 101, 0.1)"
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight="medium"
                      color={{ base: 'red.600', _dark: 'red.400' }}
                    >
                      JRPG
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="rgba(245, 101, 101, 0.1)"
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight="medium"
                      color={{ base: 'red.600', _dark: 'red.400' }}
                    >
                      Fantasy
                    </Box>
                  </HStack>
                  
                  <Text 
                    fontSize="xs" 
                    fontStyle="italic" 
                    color={{ base: 'gray.500', _dark: 'gray.500' }}
                  >
                    Magic meets democracy! 🗳️
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}
