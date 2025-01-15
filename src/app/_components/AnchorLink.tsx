interface AnchorLinkProps {
    href: string;
    text: string;
    className?: string;
    target?: string;
    rel?: string;
    ariaLabel?: string;
}

function AnchorLink({
    href,
    text,
    className,
    target,
    rel,
    ariaLabel
}: AnchorLinkProps) {
    return (
        <a
            className={`${className ? className : 'underline'}`}
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
        >
            {text}
        </a>
    )
}

export default AnchorLink