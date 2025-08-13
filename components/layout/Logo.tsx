"use client"

import { Box, Text, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export function Logo() {
  return (
    <Link as={NextLink} href="/">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="red.400"
        cursor="pointer"
        _hover={{
          color: "red.300"
        }}
        transition="color 0.2s"
      >
        tom.eru
      </Text>
    </Link>
  )
}
