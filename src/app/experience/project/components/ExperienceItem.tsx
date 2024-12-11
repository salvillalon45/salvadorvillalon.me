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
            <div className='flex flex-col gap-4'>
                <p>
                    <a href={orgLink}>
                        <b>{organization}</b>
                    </a>

                </p>
                <div className='flex'>
                    <p>{roleTitle}</p>
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