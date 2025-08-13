import { Box, Heading, Text, Code, Link } from "@chakra-ui/react"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <Box
      css={{
        '& > *:first-of-type': { marginTop: 0 },
        '& > *:last-of-type': { marginBottom: 0 },
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Heading as="h1" size="xl" mt={8} mb={4} color="gray.900" _dark={{ color: "white" }}>
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading as="h2" size="lg" mt={6} mb={3} color="gray.900" _dark={{ color: "white" }}>
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" size="md" mt={6} mb={3} color="gray.900" _dark={{ color: "white" }}>
              {children}
            </Heading>
          ),
          p: ({ children }) => (
            <Text mb={4} lineHeight="tall" color="gray.700" _dark={{ color: "gray.300" }}>
              {children}
            </Text>
          ),
          a: ({ href, children }) => (
            <Link href={href} color="red.600" _dark={{ color: "red.400" }} target="_blank" rel="noopener noreferrer">
              {children}
            </Link>
          ),
          ul: ({ children }) => (
            <Box
              as="ul"
              mb={4}
              color="gray.700"
              _dark={{ color: "gray.300" }}
              pl={6}
              css={{
                listStyleType: 'disc',
                listStylePosition: 'outside'
              }}
            >
              {children}
            </Box>
          ),
          ol: ({ children }) => (
            <Box
              as="ol"
              mb={4}
              color="gray.700"
              _dark={{ color: "gray.300" }}
              pl={6}
              css={{
                listStyleType: 'decimal',
                listStylePosition: 'outside'
              }}
            >
              {children}
            </Box>
          ),
          li: ({ children }) => (
            <Box as="li" mb={1}>
              {children}
            </Box>
          ),
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''
            
            if (language) {
              return (
                <Box mb={4} rounded="md" overflow="hidden">
                  <SyntaxHighlighter
                    style={oneDark as any}
                    language={language}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </Box>
              )
            }
            
            return (
              <Code
                px={2}
                py={1}
                bg="gray.100"
                _dark={{ bg: "gray.800", color: "red.400" }}
                color="red.600"
                rounded="md"
                fontSize="sm"
              >
                {children}
              </Code>
            )
          },
          blockquote: ({ children }) => (
            <Box
              pl={4}
              borderLeft="4px"
              borderColor="red.400"
              bg="gray.50"
              _dark={{ bg: "gray.800" }}
              p={4}
              mb={4}
              rounded="md"
            >
              <Text fontStyle="italic" color="gray.600" _dark={{ color: "gray.400" }}>
                {children}
              </Text>
            </Box>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}
