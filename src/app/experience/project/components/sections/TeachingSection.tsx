import { teachingExperienceData } from '~/lib/data/experienceData';
import ExperienceSection from './ExperienceSection';

function TeachingSection() {
    return (
        <section id='full-time-experience-section' className='grid gap-4'>
            <div className='grid gap-6 w-9/12 mx-auto'>
                <h2 className="text-xl font-bold">Teaching</h2>

                <ExperienceSection experienceData={teachingExperienceData} />
            </div>
        </section>
    );
}

export default TeachingSection;