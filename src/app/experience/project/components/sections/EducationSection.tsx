import { educationData } from '~/lib/data/experienceData';
import ExperienceSection from './ExperienceSection';

function EducationSection() {
    return (
        <section id='full-time-experience-section' className='grid gap-4'>
            {/* <div className='grid gap-6 w-9/12 mx-auto'> */}
            <div className=''>
                <h2 className="text-xl font-bold">Education</h2>

                <ExperienceSection experienceData={educationData} />
            </div>
        </section>
    );
}

export default EducationSection;