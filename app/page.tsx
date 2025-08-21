import { getAllBlogPosts, formatDate, type BlogPostMeta } from '@/lib/mdx';
import { HomePage } from '@/components/pages/HomePage';

export default async function Home() {
  const allPosts = getAllBlogPosts();
  
  // Show all posts in the carousel for better effect
  const featuredPosts: BlogPostMeta[] = allPosts.map((post) => ({
    ...post,
    date: formatDate(post.date),
  }));

  return <HomePage featuredPosts={featuredPosts} />;
}
