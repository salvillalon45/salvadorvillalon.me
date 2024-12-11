import ExperienceSection from "./ExperienceSection";

interface IndividualExperienceSectionProps {
    id: string;
    heading: string;
    data: {
        role_title: string;
        organization: string;
        date: string;
        org_link: string;
        description: string;
        skills: string;
    }[];
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