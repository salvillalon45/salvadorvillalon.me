interface ContentSectionProps {
    link: string;
    slug: string;
    publishedAt: string;
    title: string;
}

function ContentSection({ link, slug, publishedAt, title }: ContentSectionProps) {
    const anchorNavigation = link ? link : `blog/${slug}`;

    return (
        <section key={title}>
            <ul className="grid grid-flow-row gap-3">
                <li
                    key={title}
                    className="flex flex-col-reverse sm:flex-row sm:gap-10 gap-4 px-3 py-2 -mx-3 rounded-lg transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900"
                >
                    <time
                        className="opacity-60 sm:w-20"
                        dateTime={publishedAt}
                        aria-label={`Written ${publishedAt}`}
                    >
                        {publishedAt}
                    </time>

                    <a
                        href={anchorNavigation}
                        className=""
                    >
                        <p className="font-medium">{title}</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default ContentSection;