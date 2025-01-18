import { baseUrl } from "sitemap"
import { notFound } from "next/navigation";
import Wrapper from "~/app/_components/Wrapper";
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import { Separator } from "~/app/_components/ui/separator";
import { fetchGallery } from "~/lib/gallery";
import AnchorLink from "~/app/_components/AnchorLink";

import '../../../styles/AboutSalPost.css';

interface SlugProps {
    params: {
        year: string;
    };
}

export async function generateStaticParams() {
    return fetchGallery().map(({ year }) => ({
        year
    }));
}

export function generateMetadata({ params }: SlugProps) {
    const gallery = fetchGallery().find((gal) => gal.year === params.year)

    if (!gallery) {
        return
    }

    const description = 'testing galle ry'

    const {
        year,
        // publishedAt: publishedTime,
        // image,
    } = gallery

    return {
        title: year,
        description,
        openGraph: {
            title: year,
            description,
            type: 'article',
            // publishedTime,
            url: `${baseUrl}/blog/${year}`,
            images: [
                {
                    // url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Test title',
            description,
            // images: [ogImage],
        },
    }
}

export default function YearSlug({ params }: SlugProps) {
    const gallery = fetchGallery().find((gal) => gal.year === params.year)

    if (!gallery) {
        notFound()
    }

    const { year, albums } = gallery

    return (
        <section className={`gallery-${year}-section my-12`}>
            <Wrapper>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Gallery',
                            // headline: post.metadata.title,
                            // datePublished: post.metadata.publishedAt,
                            // dateModified: post.metadata.publishedAt,
                            // description: post.metadata.summary,
                            // image: post.metadata.image
                            //     ? `${baseUrl}${post.metadata.image}`
                            //     : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                            url: `${baseUrl}/gallery/${year}`,
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
                            text={year}
                            size={HeadingSize.H1}
                        />
                        <Separator />
                    </div>

                    <article>
                        {albums.map(({ title, slug }) => (
                            <div key={title}>
                                <AnchorLink
                                    href={`/gallery/${year}/${slug}`}
                                    text={title}
                                />
                            </div>
                        ))}
                    </article>
                </div>
            </Wrapper>
        </section>
    );
};
