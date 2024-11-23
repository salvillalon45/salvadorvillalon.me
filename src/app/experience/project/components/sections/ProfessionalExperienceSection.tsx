import { fullTimeExperienceData } from '~/lib/data/experienceData';
import ExperienceSection from './ExperienceSection';

function ProfesionalExperienceSection() {
    return (
        <section id='full-time-experience-section' className='grid gap-4'>
            <div className='grid gap-6 w-9/12 mx-auto'>
                <h2 className="text-xl font-bold">Profesional Experience</h2>

                <ExperienceSection experienceData={fullTimeExperienceData} />
            </div>
        </section>
    );
}

export default ProfesionalExperienceSection;