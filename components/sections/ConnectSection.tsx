'use client';

import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ContactCard } from '@/components/ui/ContactCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ConnectSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <Box ref={ref} maxW="6xl" mx="auto" px={8} py={8}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.8, 
          delay: 0,
          ease: 'easeOut',
        }}
      >
        <Box textAlign="center" mb={12}>
          <Heading 
            size="2xl" 
            mb={4}
            color={{ base: 'gray.900', _dark: 'white' }}
          >
            Let&apos;s Connect! 🚀
          </Heading>
          <Text 
            fontSize="lg" 
            color={{ base: 'gray.600', _dark: 'gray.400' }}
            maxW="2xl" 
            mx="auto"
          >
            Whether you want to collaborate on a project, discuss tech trends, or just 
            chat about code and coffee ☕
          </Text>
        </Box>

        {/* Connect Cards Grid */}
        <Flex 
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          w="full"
          align="stretch"
        >
          <ContactCard
            href="https://github.com/TomerPF"
            target="_blank"
            rel="noopener noreferrer"
            icon="💻"
            title="GitHub"
            description="Check out my projects and contributions"
            delay={isVisible ? 0.2 : 0}
          />
          
          <ContactCard
            href="https://www.linkedin.com/in/tomer-erusalimsky-b2540619a"
            target="_blank"
            rel="noopener noreferrer"
            icon="🤝"
            title="LinkedIn"
            description="Let's connect professionally"
            delay={isVisible ? 0.4 : 0}
          />
          
          <ContactCard
            href="mailto:tom.eru@gmail.com"
            icon="📧"
            title="Email"
            description="Drop me a message anytime"
            delay={isVisible ? 0.6 : 0}
          />
        </Flex>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box textAlign="center" mt={12}>
            <Text 
              fontSize="md" 
              color={{ base: 'gray.700', _dark: 'gray.300' }}
              fontStyle="italic"
            >
              &quot;If you don&apos;t like what&apos;s being said, change the conversation.&quot; 
              <Text as="span" color={{ base: 'red.500', _dark: 'red.400' }}>
                {' '}- Don Draper
              </Text>
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}
