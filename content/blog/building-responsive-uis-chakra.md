---
title: "Building Responsive UIs with Chakra UI"
excerpt: "Discover how to create beautiful and accessible user interfaces using Chakra UI's component library and theming system."
date: "2024-12-10"
tags: ["Chakra UI", "React", "UI/UX"]
published: true
---

# Building Responsive UIs with Chakra UI

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## Why Choose Chakra UI?

Chakra UI stands out for several reasons:

- **Simple & Modular**: Import only what you need
- **Accessible**: Built with accessibility in mind
- **Themeable**: Easy to customize and extend
- **Developer Experience**: Great TypeScript support
- **Responsive**: Mobile-first responsive design

## Getting Started

Install Chakra UI in your React project:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Setting Up the Provider

Wrap your application with the ChakraProvider:

```tsx
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <YourApp />
    </ChakraProvider>
  )
}
```

## Building Components

Chakra UI makes building components intuitive:

```tsx
import { Box, Text, Button, VStack } from '@chakra-ui/react'

function Card() {
  return (
    <Box p={6} bg="white" rounded="lg" shadow="md">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Card Title
        </Text>
        <Text color="gray.600">
          This is a simple card component built with Chakra UI.
        </Text>
        <Button colorScheme="blue">
          Learn More
        </Button>
      </VStack>
    </Box>
  )
}
```

## Responsive Design

Chakra UI makes responsive design simple with object notation:

```tsx
<Box
  w={{ base: "100%", md: "50%", lg: "25%" }}
  p={{ base: 4, md: 6 }}
  fontSize={{ base: "sm", md: "md", lg: "lg" }}
>
  Responsive content
</Box>
```

## Dark Mode Support

Chakra UI has built-in dark mode support:

```tsx
import { useColorMode, Button } from '@chakra-ui/react'

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}
```

## Custom Theming

Create a custom theme to match your brand:

```tsx
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
})
```

## Best Practices

1. **Use Style Props**: Leverage Chakra's style props for quick styling
2. **Responsive First**: Always consider mobile users first
3. **Accessibility**: Take advantage of Chakra's built-in accessibility features
4. **Performance**: Use selective imports to keep bundle size small
5. **Consistency**: Stick to your theme tokens for consistent design

## Conclusion

Chakra UI provides an excellent foundation for building modern React applications. Its focus on simplicity, accessibility, and developer experience makes it a great choice for projects of any size.

Start building beautiful UIs today with Chakra UI!
