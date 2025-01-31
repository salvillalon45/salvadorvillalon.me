import { ImageResponse } from 'next/og'
import OpengraphImage from '../_components/OpengraphImage'
import { getFonts, opengraphAlt, opengraphContentType, opengraphSize } from '~/lib/opengraph'

export const alt = opengraphAlt;
export const size = opengraphSize;
export const contentType = opengraphContentType;

export default async function Image() {
    const title = 'Now with Sal';
    const description = 'What is Sal currently doing?';
    const url = 'now';

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