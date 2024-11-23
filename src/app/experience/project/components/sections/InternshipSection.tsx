import { internshipExperienceData } from '~/lib/data/experienceData';
import ExperienceSection from './ExperienceSection';

function InternshipSection() {
    return (
        <section id='full-time-experience-section' className='grid gap-4'>
            <div className='grid gap-6 w-9/12 mx-auto'>
                <h2 className="text-xl font-bold">Internship</h2>

                <ExperienceSection experienceData={internshipExperienceData} />
            </div>
        </section>
    );
}

export default InternshipSection;