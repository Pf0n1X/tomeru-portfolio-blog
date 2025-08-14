"use client";

import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link as={NextLink} href="/" textDecoration="none" width="100%">
      <Box
        fontSize="2xl"
        fontWeight="bold"
        overflow="visible"
        color="red.400"
        cursor="pointer"
         width="100%"
        position="relative"
        display="inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition="color 0.2s ease"
      >
        <Box as="span" position="relative">
          Tom E
          {/* Dot - appears last on reverse */}
          <Box
            as="span"
            opacity={isHovered ? 0 : 1}
            transition="opacity 0.4s ease"
            transitionDelay={isHovered ? "0s" : "0.6s"}
          >
            .
          </Box>
          {/* Letter 'r' - disappears first on reverse */}
          <Box
            as="span"
            position="absolute"
            left="100%"
            transform={isHovered ? "translateX(-6px)" : "translateX(-15px)"}
            opacity={isHovered ? 1 : 0}
            transition="all 0.5s ease"
            transitionDelay={isHovered ? "0.4s" : "0.2s"}
          >
            r
          </Box>
          {/* Letter 'u' - disappears second on reverse */}
          <Box
            as="span"
            position="absolute"
            left="100%"
            transform={isHovered ? "translateX(4px)" : "translateX(-10px)"}
            opacity={isHovered ? 1 : 0}
            transition="all 0.5s ease"
            transitionDelay={isHovered ? "0.6s" : "0s"}
          >
            u
          </Box>
          {/* Dot after 'u' - appears last, disappears third on reverse */}
          <Box
            as="span"
            position="absolute"
            left="100%"
            transform={isHovered ? "translateX(20px)" : "translateX(-5px)"}
            opacity={isHovered ? 1 : 0}
            transition="all 0.5s ease"
            transitionDelay={isHovered ? "0.8s" : "0.1s"}
          >
            .
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
