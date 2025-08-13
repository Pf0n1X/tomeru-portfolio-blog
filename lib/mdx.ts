import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
  published: boolean
}

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
}

export function getAllBlogPosts(): BlogPostMeta[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(contentDirectory)) {
      console.warn(`Content directory does not exist: ${contentDirectory}`)
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.(md|mdx)$/, '')
          const fullPath = path.join(contentDirectory, fileName)
          
          if (!fs.existsSync(fullPath)) {
            console.warn(`File does not exist: ${fullPath}`)
            return null
          }
          
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          const readTimeResult = readingTime(content)

          return {
            slug,
            title: data.title || 'Untitled',
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            readTime: readTimeResult.text,
            tags: data.tags || [],
            published: data.published !== false, // Default to true unless explicitly false
          }
        } catch (fileError) {
          console.error(`Error reading file ${fileName}:`, fileError)
          return null
        }
      })
      .filter((post): post is BlogPostMeta => post !== null && post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    // Check if directory exists
    if (!fs.existsSync(contentDirectory)) {
      console.warn(`Content directory does not exist: ${contentDirectory}`)
      return null
    }

    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const mdxPath = path.join(contentDirectory, `${slug}.mdx`)
    
    let filePath = fullPath
    if (!fs.existsSync(fullPath) && fs.existsSync(mdxPath)) {
      filePath = mdxPath
    }
    
    if (!fs.existsSync(filePath)) {
      console.warn(`Blog post file not found: ${slug}`)
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTimeResult = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      readTime: readTimeResult.text,
      tags: data.tags || [],
      content,
      published: data.published !== false,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    return fileNames
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''))
  } catch (error) {
    console.error('Error reading blog slugs:', error)
    return []
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
