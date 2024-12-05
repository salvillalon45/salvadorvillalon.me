/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Link from 'next/link'
import Image from 'next/image'
import { highlight } from 'sugar-high'

// Reuse your existing custom components
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

// function RoundedImage(props: React.ComponentPropsWithoutRef<typeof Image>) {
//     return <Image className="rounded-lg" {...props} alt={props.alt} />
// }

// function Code({ inline, className, children, ...props }: any) {
//     const match = /language-(\w+)/.exec(className || '')
//     const codeHTML = highlight(String(children).replace(/\n$/, ''))
//     return !inline && match ? (
//         <pre className={className} {...props}>
//             <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
//         </pre>
//     ) : (
//         <code className={className} {...props}>
//             {children}
//         </code>
//     )
// }

// Custom components for react-markdown
const components = {
    a: CustomLink,
    // img: RoundedImage,
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

