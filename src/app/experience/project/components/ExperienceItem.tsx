interface ExperienceItemProps {
    title: string;
    date: string;
    description: string
    skills: string;
};

function ExperienceItem({
    title,
    date,
    description,
    skills
}: ExperienceItemProps) {
    return (
        <div className='grid gap-2'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <p>{title}</p>
                    <p>{date}</p>
                </div>
            </div>

            <p>{description}</p>

            <p>
                {!!skills ? (
                    <>
                        <span className='text-grey'>Tech:</span> {skills}
                    </>
                ) : null}
            </p>
        </div>
    );
}

export default ExperienceItem;