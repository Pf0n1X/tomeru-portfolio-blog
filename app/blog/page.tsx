import { getAllBlogPosts, formatDate } from '@/lib/mdx';
import { BlogPage } from '@/components/pages/BlogPage';

export default async function Blog() {
  const posts = getAllBlogPosts();

  // Convert MDX posts to BlogCard format
  const blogPosts = posts.map((post) => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: formatDate(post.date),
    readTime: post.readTime,
    tags: post.tags,
    slug: post.slug,
  }));

  return <BlogPage posts={blogPosts} />;
}
