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