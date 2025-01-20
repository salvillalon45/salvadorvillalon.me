import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/app/_components/ui/select"
import { GalleryLabel, GalleryYearValue, } from "~/lib/types";

interface GallerySelectorProps {
    currentSection: GalleryYearValue;
    setCurrentSection: (value: GalleryYearValue) => void;
}

function GallerySelector({ currentSection, setCurrentSection }: GallerySelectorProps) {
    const gallerySections = [
        { label: GalleryLabel.YEAR_2024, value: GalleryYearValue.YEAR_2024 },
        { label: GalleryLabel.YEAR_2023, value: GalleryYearValue.YEAR_2023 },
        { label: GalleryLabel.YEAR_2022, value: GalleryYearValue.YEAR_2022 },
    ];

    return (
        <Select value={currentSection} onValueChange={setCurrentSection}>
            <SelectTrigger className="w-[218px]">
                <SelectValue placeholder={currentSection} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Gallery</SelectLabel>
                    {gallerySections.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default GallerySelector;