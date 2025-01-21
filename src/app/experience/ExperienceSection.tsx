import { type ExperiencesDataArray, HeadingSize, SectionLabel } from "~/lib/types";
import Heading from "~/app/_components/Heading";
import ExperienceItem from "./ExperienceItem";
import { Separator } from "../_components/ui/separator";
import AnchorLink from "../_components/AnchorLink";
import { Fragment } from "react";

interface ExperienceSectionProps {
    id: string;
    heading: SectionLabel
    data: ExperiencesDataArray;
}

function ExperienceSection({ id, heading, data }: ExperienceSectionProps) {
    return (
        <section id={id} className='grid gap-4'>
            <div className='grid gap-6'>
                <Heading
                    text={heading}
                    size={HeadingSize.H2}
                />

                {data.map(({ organization, organization_link: orgLink, positions }, index) => {
                    return (
                        <Fragment key={organization}>
                            <div>
                                <p>
                                    <AnchorLink
                                        href={orgLink}
                                        text={organization}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold underline"
                                    />
                                </p>
                            </div>

                            {
                                positions.map(
                                    (
                                        { title, date, description, skills },
                                    ) => {
                                        return (
                                            <div key={title}>
                                                <ExperienceItem
                                                    title={title}
                                                    date={date}
                                                    description={description}
                                                    skills={skills}
                                                />
                                            </div>
                                        );
                                    }
                                )
                            }

                            {
                                index + 1 === data.length ? null : (
                                    <Separator className='mb-2 mt-2' />
                                )
                            }
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
}

export default ExperienceSection;