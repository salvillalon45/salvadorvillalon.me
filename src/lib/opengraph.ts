import { base } from "./routes";

export const opengraphAlt = 'Salvador Villalon'
export const opengraphSize = {
    width: 1200,
    height: 630,
}
export const opengraphContentType = 'image/png'

interface FontOptions {
    name: string;
    data: ArrayBuffer;
    style: 'normal' | 'italic';
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export async function getFonts(): Promise<FontOptions[]> {
    const [interMedium, interExtraBold, quantico] = await Promise.all([
        fetch(`${base}/fonts/opengraph/Inter-Medium.woff`).then((res) => res.arrayBuffer()),
        fetch(`${base}/fonts/opengraph/Inter-ExtraBold.woff`).then((res) => res.arrayBuffer()),
        fetch(`${base}/fonts/opengraph/Quantico-Regular.woff`).then((res) =>
            res.arrayBuffer(),
        ),
    ])

    return [
        {
            name: 'Inter',
            data: interMedium,
            style: 'normal',
            weight: 600,
        },
        {
            name: 'Inter',
            data: interExtraBold,
            style: 'normal',
            weight: 700,
        },
        {
            name: 'Quantico',
            data: quantico,
            style: 'normal',
            weight: 400,
        },
    ]
}