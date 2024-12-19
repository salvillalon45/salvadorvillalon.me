import ExperiencePage from "./ExperiencePage";
import { type Metadata } from 'next';

export const metadata: Metadata = { title: 'Experience' };

function Experience() {
    return (
        <main className="experiencePageMain">
            <ExperiencePage />
        </main>
    );
}

export default Experience;