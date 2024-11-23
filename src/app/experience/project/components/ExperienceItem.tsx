interface ExperienceItemProps {
    roleTitle: string;
    organization: string;
    date: string;
    description: string;
    orgLink: string;
    skills: string;
};

function ExperienceItem({
    roleTitle,
    organization,
    date,
    description,
    orgLink,
    skills
}: ExperienceItemProps) {
    return (
        <div className='grid gap-2'>
            <p>
                {roleTitle} @{' '}
                <a href={orgLink}>
                    <b>{organization}</b>
                </a>
            </p>

            <p className='text-grey'>{date}</p>

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