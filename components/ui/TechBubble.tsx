"use client";

import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

interface BubbleData {
  icon: IconType;
  label: string;
  color: string;
  delay: number;
}

interface TechBubbleProps {
  bubble: BubbleData;
  position: { x: number; y: number };
  isVisible: boolean;
}

export function TechBubble({ bubble, position, isVisible }: TechBubbleProps) {
  const IconComponent = bubble.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={bubble.label}
          initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: position.x, 
            y: position.y 
          }}
          exit={{ opacity: 0, scale: 0.3 }}
          transition={{
            duration: 0.6,
            delay: bubble.delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1
          }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay + 0.8
            }}
          >
            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              borderRadius="full"
              p={3}
              boxShadow="xl"
              border="3px solid"
              borderColor={bubble.color}
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="70px"
              h="70px"
              position="relative"
              cursor="pointer"
              _hover={{
                shadow: "lg",
                transform: "translateY(-1px)",
                borderColor: "red.400"
              }}
              transition="all 0.2s"
            >
              <IconComponent 
                size={28} 
                color={bubble.color}
              />
              
              {/* Tooltip */}
              <Box
                position="absolute"
                bottom="-40px"
                left="50%"
                transform="translateX(-50%)"
                bg="gray.800"
                color="white"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
                fontWeight="medium"
                opacity={0}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.2s"
                pointerEvents="none"
                zIndex={10}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderBottom: "4px solid gray.800"
                }}
              >
                {bubble.label}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
