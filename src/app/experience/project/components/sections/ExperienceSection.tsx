import DividerLine from "~/app/_components/DividerLine";
import { type ExperiencesDataArray, } from "~/lib/types/types";
import ExperienceItem from "../ExperienceItem";

interface ExperienceSectionProps {
    experienceData: ExperiencesDataArray
}

function ExperienceSection({ experienceData }: ExperienceSectionProps) {
    return experienceData.map(({ organization, organization_link: orgLink, positions }, index) => {
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
                    index + 1 === experienceData.length ? null : (
                        <DividerLine style='mb-2 mt-2' />
                    )
                }
            </>
        );
    })
}

export default ExperienceSection;