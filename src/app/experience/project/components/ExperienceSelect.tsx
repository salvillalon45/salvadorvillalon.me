import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/components/ui/select"
import { SectionType } from "~/lib/types/types";

interface ExperienceSelectProps {
    currentSection: SectionType;
    setCurrentSection: (value: SectionType) => void;
}

function ExperienceSelect({ currentSection, setCurrentSection }: ExperienceSelectProps) {
    const experienceSections = [
        { label: 'Currently Doing', value: SectionType.CURRENT },
        { label: 'Full-Time Experience', value: SectionType.FULL_TIME },
        { label: 'Internships', value: SectionType.INTERNSHIPS },
        { label: 'Teaching', value: SectionType.TEACHING },
        { label: 'Education', value: SectionType.EDUCATION },
    ];

    return (
        <Select value={currentSection} onValueChange={setCurrentSection}>
            <SelectTrigger className="w-[180px]">
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

export default ExperienceSelect;