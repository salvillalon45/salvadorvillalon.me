interface ContentSectionProps {
    link: string;
    datePublished: string;
    title: string;
}

function ContentSection(blog: ContentSectionProps) {
    return (
        <section key={blog.link}>
            <ul className="grid grid-flow-row gap-3">
                <li
                    key={blog.link}
                    className="flex flex-col-reverse sm:flex-row sm:gap-10 gap-4 px-3 py-2 -mx-3 rounded-lg transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900"
                >
                    <time
                        className="opacity-60 sm:w-20"
                        dateTime={blog.datePublished}
                        aria-label={`Written ${blog.datePublished}`}
                    >
                        {blog.datePublished}
                    </time>

                    <a
                        href={blog.link}
                        className=""
                    >
                        <p className="font-medium">{blog.title}</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default ContentSection;