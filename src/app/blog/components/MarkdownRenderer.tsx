import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Link from 'next/link'

function CustomLink(props: React.ComponentPropsWithoutRef<'a'>) {
    const href = props.href
    if (href?.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }
    if (href?.startsWith('#')) {
        return <a {...props} />
    }
    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
    a: CustomLink,
    // code: Code,
    h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
        <h2 className="text-xl font-bold" {...props} />
    ),
}

interface MarkdownRendererProps {
    source: string
}

export function MarkdownRenderer({ source }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
            components={components}
        >
            {source}
        </ReactMarkdown>
    )
}

