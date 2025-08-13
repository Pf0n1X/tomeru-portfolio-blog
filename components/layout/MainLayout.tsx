"use client"

import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "./Sidebar"
import { PageTransition } from "./PageTransition"
import { NavigationProvider } from "../context/NavigationContext"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <NavigationProvider>
      <Box minH="100vh" w="100vw" bg="gray.900" position="relative">
        <Sidebar />
        <Box 
          ml="280px" 
          p={8} 
          minH="100vh"
          w="calc(100vw - 280px)"
          bg="gray.900"
        >
          <PageTransition>
            {children}
          </PageTransition>
        </Box>
      </Box>
    </NavigationProvider>
  )
}
