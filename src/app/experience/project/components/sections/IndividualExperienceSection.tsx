import { type ExperiencesDataArray, HeadingSize } from "~/lib/types/types";
import ExperienceSection from "./ExperienceSection";
import Heading from "~/app/_components/Heading";

interface IndividualExperienceSectionProps {
    id: string;
    heading: string;
    data: ExperiencesDataArray;
}

function IndividualExperienceSection({ id, heading, data }: IndividualExperienceSectionProps) {
    return (
        <section id={id} className='grid gap-4'>
            <div className='grid gap-6'>
                <Heading
                    text={heading}
                    size={HeadingSize.H2}
                />

                <ExperienceSection experienceData={data} />
            </div>
        </section>
    );
}

export default IndividualExperienceSection;