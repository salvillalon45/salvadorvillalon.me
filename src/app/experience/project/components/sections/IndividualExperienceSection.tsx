import ExperienceSection from "./ExperienceSection";

interface IndividualExperienceSectionProps {
    id: string;
    heading: string;
    data: {
        organization: string;
        organization_link: string;
        positions: {
            title: string;
            date: string;
            description: string;
            skills: string;
        }[];
    }[]
}

function IndividualExperienceSection({ id, heading, data }: IndividualExperienceSectionProps) {
    return (
        <section id={id} className='grid gap-4'>
            <div className='grid gap-6'>
                <h2 className="text-xl font-bold">{heading}</h2>

                <ExperienceSection experienceData={data} />
            </div>
        </section>
    );
}

export default IndividualExperienceSection;