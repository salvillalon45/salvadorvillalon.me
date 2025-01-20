import Image from "next/image";
import { baseUrl } from "sitemap"
import { notFound } from "next/navigation";
import Wrapper from "~/app/_components/Wrapper";
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import { Separator } from "~/app/_components/ui/separator";
import { fetchGallery } from "~/lib/gallery";
import AnchorLink from "~/app/_components/AnchorLink";

import '../../../styles/AboutSalPost.css';
import { Card, CardContent, CardFooter } from "~/app/_components/ui/card";

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
                            text={`Gallery ${year}`}
                            size={HeadingSize.H1}
                        />
                        <p>The Adventures in {year}. Click on a picture to see the gallery.</p>
                        <Separator />
                        <AnchorLink
                            href={`/gallery`}
                            text="Back"
                            className="max-w-fit bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
                        />
                    </div>

                    <article className='grid gap-20 grid-cols-1 md:grid-cols-3 m-auto'>
                        {albums.map(({ pictures, title, slug }) => {
                            const { src, alt, } = pictures[0]!
                            console.log(pictures[0])
                            return (
                                <a key={title} href={`/gallery/${year}/${slug}`}>
                                    <Card className="overflow-hidden w-64 hover:scale-[1.02] transition-transform duration-200">
                                        <CardContent className="p-0 h-64 relative">
                                            <Image
                                                src={src}
                                                alt={alt}
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                fill
                                            />
                                        </CardContent>

                                        <CardFooter className="flex justify-center p-5">
                                            <p className="text-md font-light text-center">{title}</p>
                                        </CardFooter>
                                    </Card>
                                </a>
                            );
                        })}
                    </article>
                </div>
            </Wrapper>
        </section>
    );
};
