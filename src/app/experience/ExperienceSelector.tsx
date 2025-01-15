import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/app/_components/ui/select"
import { SectionLabel, SectionType } from "~/lib/types";

interface ExperienceSelectorProps {
    currentSection: SectionType;
    setCurrentSection: (value: SectionType) => void;
}

function ExperienceSelector({ currentSection, setCurrentSection }: ExperienceSelectorProps) {
    const experienceSections = [
        { label: SectionLabel.CURRENT, value: SectionType.CURRENT },
        { label: SectionLabel.PROFESSIONAL, value: SectionType.PROFESSIONAL },
        { label: SectionLabel.INTERNSHIPS, value: SectionType.INTERNSHIPS },
        { label: SectionLabel.TEACHING, value: SectionType.TEACHING },
        { label: SectionLabel.EDUCATION, value: SectionType.EDUCATION },
    ];

    return (
        <Select value={currentSection} onValueChange={setCurrentSection}>
            <SelectTrigger className="w-[218px]">
                <SelectValue placeholder={currentSection} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectLabel>My Experience</SelectLabel>
                    {experienceSections.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default ExperienceSelector;