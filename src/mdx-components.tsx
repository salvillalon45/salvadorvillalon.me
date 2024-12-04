import type { MDXComponents } from 'mdx/types'
import Image from "next/image";
import DividerLine from './app/_components/DividerLine';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-bold">{children}</h2>
        ),
        hr: () => <DividerLine />,
        // img: (props) => (
        //     <Image
        //         sizes="100vw"
        //         style={{ width: '100%', height: 'auto' }}
        //         {...(props as ImageProps)}
        //     />
        // ),
        ...components,
    }
}