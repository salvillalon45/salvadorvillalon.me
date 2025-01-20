import AnchorLink from "../_components/AnchorLink";

interface YearProps {
    year: string;
}

function Year({ year }: YearProps) {
    return (
        <section className='year-section' key={year}>
            <div>
                <AnchorLink
                    href={`gallery/${year}`}
                    text={year}
                    target={'_self'}
                    rel="noopener noreferrer"
                    className="
                        max-w-fit
                        bg-primary
                        text-primary-foreground
                        hover:bg-primary/90
                        flex
                        items-center
                        rounded-md
                        px-3
                        py-2
                        transition-colors
                        text-3xl
                        font-extrabold
                    "
                />
            </div>
        </section>
    )
}

export default Year