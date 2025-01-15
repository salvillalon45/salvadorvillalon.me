export type ExperiencesDataArray = Array<{
    organization: string;
    organization_link: string;
    positions: Array<{
        title: string;
        date: string;
        description: string;
        skills: string;
    }>;
}>

export enum SectionType {
    PROFESSIONAL = 'PROFESSIONAL',
    INTERNSHIPS = 'INTERNSHIPS',
    TEACHING = 'TEACHING',
    CURRENT = 'CURRENT',
    EDUCATION = 'EDUCATION',
}

export enum SectionLabel {
    PROFESSIONAL = 'Professional Experience',
    INTERNSHIPS = 'Internships',
    TEACHING = 'Teaching',
    CURRENT = 'Currently Doing',
    EDUCATION = 'Education',
}

export enum NowSections {
    CAREER = 'Career',
    EDUCATION = 'Education & Projects',
    LIFE = 'Life & Misc',
    FINANCE = 'Finance',
    READING = 'Reading',
}

export enum HeadingSize {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export type Routes = Array<{
    href: string;
    text: string;
}>;

export enum RunTableFilters {
    TYPE = 'type',
    LOCATION = 'location',
}