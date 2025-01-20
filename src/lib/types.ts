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

export enum GalleryYearValue {
    YEAR_2024 = '2024',
    YEAR_2023 = '2023',
    YEAR_2022 = '2022'
}

export enum GalleryLabel {
    YEAR_2024 = '2024',
    YEAR_2023 = '2023',
    YEAR_2022 = '2022'
}

export type Gallery = Array<{
    year: string;
    albums: Array<AlbumItem>
}>

export interface AlbumItem {
    title: string;
    location: string;
    slug: string;
    description: string;
    pictures: Array<{ src: string; alt: string; }>;
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

export enum RoutesValues {
    HOME = '/',
    NOW = '/now',
    ABOUT = '/about',
    BLOG = '/blog',
    EXPERIENCE = '/experience',
    GALLERY = '/gallery'
}

export enum RoutesLabels {
    HOME = 'Home',
    NOW = 'Now',
    ABOUT = 'About',
    BLOG = 'Blog',
    EXPERIENCE = 'Experience',
    GALLERY = 'Gallery'
}

export enum RunTableFilters {
    TYPE = 'type',
    LOCATION = 'location',
}