import { getAllBlogPosts, formatDate } from "@/lib/mdx"
import { HomePage } from "@/components/pages/HomePage"

export default async function Home() {
  const allPosts = getAllBlogPosts()
  
  // Show all posts in the carousel for better effect
  const featuredPosts = allPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: formatDate(post.date),
    readTime: post.readTime,
    tags: post.tags,
    slug: post.slug,
  }))

  return <HomePage featuredPosts={featuredPosts} />
}
