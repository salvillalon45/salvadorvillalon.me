import { SectionType } from "~/lib/types/types";
import EducationSection from "./sections/EducationSection";
import ProfessionalExperienceSection from "./sections/ProfessionalExperienceSection";
import InternshipSection from "./sections/InternshipSection";
import TeachingSection from "./sections/TeachingSection";

interface ExperienceProps {
    currentSection: SectionType;
}

function Experience({ currentSection }: ExperienceProps) {
    function showExperienceContent() {
        switch (currentSection) {
            case SectionType.FULL_TIME:
                return <ProfessionalExperienceSection />;
            case SectionType.INTERNSHIPS:
                return <InternshipSection />;
            case SectionType.TEACHING:
                return <TeachingSection />;
            case SectionType.CURRENT:
                // return <CurrentlyDoingSection />;
                return <p>Currently Doing</p>;
            case SectionType.EDUCATION:
                return <EducationSection />;
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