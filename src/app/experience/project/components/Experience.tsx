import { SectionType } from "~/lib/types/types";
import IndividualExperienceSection from "./sections/IndividualExperienceSection";
import { educationData, internshipExperienceData, professionalExperienceData, teachingExperienceData } from "~/lib/data/experienceData";

interface ExperienceProps {
    currentSection: SectionType;
}

function Experience({ currentSection }: ExperienceProps) {
    function showExperienceContent() {
        switch (currentSection) {
            case SectionType.FULL_TIME:
                return <IndividualExperienceSection
                    id='professional-experience-section'
                    heading='Profesional Experience'
                    data={professionalExperienceData}
                />;
            case SectionType.INTERNSHIPS:
                return <IndividualExperienceSection
                    id='internships-experience-section'
                    heading='Internships'
                    data={internshipExperienceData}
                />;
            case SectionType.TEACHING:
                return <IndividualExperienceSection
                    id='teaching-experience-section'
                    heading='Teaching'
                    data={teachingExperienceData}
                />;
            case SectionType.CURRENT:
                return <p>Currently Doing</p>;
            case SectionType.EDUCATION:
                return <IndividualExperienceSection
                    id='education-experience-section'
                    heading='Education'
                    data={educationData}
                />;
            default:
                return (
                    <p className='text-center'>
                        Click on the <b>Dropdown Menu</b> to explore my
                        experience!
                    </p>
                );
        }
    }

    return showExperienceContent();
}

export default Experience;