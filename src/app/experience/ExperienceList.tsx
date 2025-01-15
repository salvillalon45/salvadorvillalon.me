import { SectionLabel, SectionType } from "~/lib/types";
import IndividualExperienceSection from "./ExperienceSection";
import { professionalExperienceData, internshipExperienceData, teachingExperienceData, currentlyDoingExperienceData, educationData } from "~/lib/experienceData";

interface ExperienceListProps {
    currentSection: SectionType;
}

function ExperienceList({ currentSection }: ExperienceListProps) {
    function showExperienceContent() {
        switch (currentSection) {
            case SectionType.PROFESSIONAL:
                return <IndividualExperienceSection
                    id='professional-experience-section'
                    heading={SectionLabel.PROFESSIONAL}
                    data={professionalExperienceData}
                />;
            case SectionType.INTERNSHIPS:
                return <IndividualExperienceSection
                    id='internships-experience-section'
                    heading={SectionLabel.INTERNSHIPS}
                    data={internshipExperienceData}
                />;
            case SectionType.TEACHING:
                return <IndividualExperienceSection
                    id='teaching-experience-section'
                    heading={SectionLabel.TEACHING}
                    data={teachingExperienceData}
                />;
            case SectionType.CURRENT:
                return <IndividualExperienceSection
                    id='current-experience-section'
                    heading={SectionLabel.CURRENT}
                    data={currentlyDoingExperienceData}
                />;;
            case SectionType.EDUCATION:
                return <IndividualExperienceSection
                    id='education-experience-section'
                    heading={SectionLabel.EDUCATION}
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