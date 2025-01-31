import { ImageResponse } from 'next/og'
import OpengraphImage from '~/app/_components/OpengraphImage'
import { fetchBlogs } from '~/lib/blog'
import { getFonts, opengraphAlt, opengraphContentType, opengraphSize } from '~/lib/opengraph'

export const alt = opengraphAlt
export const size = opengraphSize;
export const contentType = opengraphContentType;

interface SlugProps {
    params: {
        slug: string
    }
}

export default async function Image({ params }: SlugProps) {
    const title = fetchBlogs().find((blog) => blog.slug === params.slug)?.title ?? ''
    const description = 'A blog by Salvador Villalon';
    const url = `blog/${params.slug}`;

    const fonts = await getFonts()

    return new ImageResponse(
        (
            <OpengraphImage title={title} description={description} url={url} />
        ),
        {
            ...size,
            fonts
        }
    )
}