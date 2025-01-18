import AnchorLink from "../_components/AnchorLink";

interface YearProps {
    year: string;
}

function Year({ year }: YearProps) {
    return (
        <section key={year}>
            <ul className="grid grid-flow-row gap-3">
                <li
                    key={year}
                    className="flex flex-col-reverse sm:flex-row sm:gap-10 gap-4 px-3 py-2 -mx-3 rounded-lg transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900"
                >
                    <p className="font-medium">
                        <AnchorLink
                            href={`gallery/${year}`}
                            text={year}
                            target={'_self'}
                            rel="noopener noreferrer"
                            className="no-underline"
                        />
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Year