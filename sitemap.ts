import { getBlogPosts } from "~/lib/blog"

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://salvador-villalon.vercel.app/'

export default async function sitemap() {
    const blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    const routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}
