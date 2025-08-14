import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout/MainLayout";
import { getBlogPostBySlug, formatDate, getAllBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/blog/MDXContent";
import type{ PageProps } from "@/.next/types/app/page";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps extends PageProps {
  params: Promise<BlogPostPageParams>;
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <MainLayout>
      <Box maxW="4xl" mx="auto">
        <VStack align="start" gap={6}>
          {/* Header */}
          <Box>
            <Heading size="2xl" mb={4} color="gray.900" _dark={{ color: "white" }}>
              {post.title}
            </Heading>
            
            <HStack gap={4} mb={4}>
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                By Tomer Erusalimsky
              </Text>
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                {formatDate(post.date)} • {post.readTime}
              </Text>
            </HStack>
            
            <HStack gap={2} flexWrap="wrap">
              {post.tags.map((tag) => (
                <Box
                  key={tag}
                  px={2}
                  py={1}
                  bg="gray.100"
                  _dark={{ bg: "gray.700", color: "gray.200" }}
                  color="gray.700"
                  rounded="md"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {tag}
                </Box>
              ))}
            </HStack>
          </Box>
          
          {/* Content */}
          <Box w="full">
            <MDXContent content={post.content} />
          </Box>
        </VStack>
      </Box>
    </MainLayout>
  );
}
