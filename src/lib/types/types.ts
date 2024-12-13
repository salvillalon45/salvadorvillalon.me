export interface ExperienceData {
    role_title: string;
    organization: string;
    date: string;
    org_link: string;
    description: string;
    skills: string;
}

export enum SectionType {
    FULL_TIME = 'FULL_TIME',
    INTERNSHIPS = 'INTERNSHIPS',
    TEACHING = 'TEACHING',
    CURRENT = 'CURRENT',
    EDUCATION = 'EDUCATION',
}

export enum HeadingSize {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}