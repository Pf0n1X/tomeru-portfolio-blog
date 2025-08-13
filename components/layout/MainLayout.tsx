"use client"

import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "./Sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box minH="100vh">
      <Sidebar />
      <Box ml="280px" p={8} bg="white" _dark={{ bg: "gray.900" }} minH="100vh">
        {children}
      </Box>
    </Box>
  )
}
