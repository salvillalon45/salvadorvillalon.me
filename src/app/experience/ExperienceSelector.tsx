import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/app/_components/ui/select"
import { SectionType } from "~/lib/types";

interface ExperienceSelectorProps {
    currentSection: SectionType;
    setCurrentSection: (value: SectionType) => void;
}

function ExperienceSelector({ currentSection, setCurrentSection }: ExperienceSelectorProps) {
    const experienceSections = [
        { label: 'Currently Doing', value: SectionType.CURRENT },
        { label: 'Professional Experience', value: SectionType.FULL_TIME },
        { label: 'Internships', value: SectionType.INTERNSHIPS },
        { label: 'Teaching', value: SectionType.TEACHING },
        { label: 'Education', value: SectionType.EDUCATION },
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