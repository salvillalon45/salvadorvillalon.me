import { ImageResponse } from 'next/og'
import { getFonts, opengraphAlt, opengraphSize } from '~/lib/opengraph'
import OpengraphImage from './_components/OpengraphImage'

export const alt = opengraphAlt;
export const size = opengraphSize;
export const contentType = opengraphContentType;

export default async function Image() {
    const title = 'Salvador Villalon';
    const description = 'Software Engineer based in Calexico, that loves to code and make the world a better place.';
    const url = '';

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