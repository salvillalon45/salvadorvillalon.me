import { SectionType } from "~/lib/types";
import IndividualExperienceSection from "./ExperienceSection";
import { professionalExperienceData, internshipExperienceData, teachingExperienceData, currentlyDoingExperienceData, educationData } from "~/lib/ExperienceData";

interface ExperienceListProps {
    currentSection: SectionType;
}

function ExperienceList({ currentSection }: ExperienceListProps) {
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
                return <IndividualExperienceSection
                    id='current-experience-section'
                    heading='Currently Doing'
                    data={currentlyDoingExperienceData}
                />;;
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

export default ExperienceList;