import { type ExperiencesDataArray, HeadingSize } from "~/lib/types";
import Heading from "~/app/_components/Heading";
import ExperienceItem from "./ExperienceItem";
import { Separator } from "../_components/ui/separator";

interface ExperienceSectionProps {
    id: string;
    heading: string;
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
                        <>
                            <div>
                                <p>
                                    <a className='underline' href={orgLink}>
                                        <b>{organization}</b>
                                    </a>
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
                        </>
                    );
                })}
            </div>
        </section>
    );
}

export default ExperienceSection;