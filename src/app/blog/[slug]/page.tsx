import { baseUrl } from "sitemap"
import { notFound } from "next/navigation";
import Wrapper from "~/app/_components/Wrapper";
import { MarkdownRenderer } from "../MarkdownRenderer";
import '../../../styles/AboutSalPost.css';
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import { formatDate, getBlogPosts } from "~/lib/blog";
import { Separator } from "~/app/_components/ui/separator";

interface SlugProps {
    params: Promise<{
        slug: string;
    }>
}

export async function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: SlugProps) {
    const { slug } = await params;

    const post = getBlogPosts().find((post) => post.slug === slug)
    if (!post) {
        return
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata
    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default async function BlogSlug({ params }: SlugProps) {
    const { slug } = await params;

    const post = getBlogPosts().find((post) => post.slug === slug)


    if (!post) {
        notFound()
    }

    const classNameIdentifier = `blog-${post.slug}-section`;

    return (
        <section className={`${classNameIdentifier} my-12`}>
            <Wrapper>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: post.metadata.title,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.publishedAt,
                            description: post.metadata.summary,
                            image: post.metadata.image
                                ? `${baseUrl}${post.metadata.image}`
                                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                            url: `${baseUrl}/blog/${post.slug}`,
                            author: {
                                '@type': 'Salvador Villalon',
                                name: 'My Portfolio',
                            },
                        }),
                    }}
                />
                <div className="grid gap-12">
                    <div className='grid gap-4'>
                        <Heading
                            text={post.metadata.title}
                            size={HeadingSize.H1}
                        />
                        <Separator />
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {formatDate(post.metadata.publishedAt)}
                        </p>
                    </div>

                    <article className="prose max-w-[unset]">
                        <MarkdownRenderer source={post.content} />
                    </article>
                </div>
            </Wrapper>
        </section>
    )
}
