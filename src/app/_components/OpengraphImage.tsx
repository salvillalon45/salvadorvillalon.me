interface OpengraphImageProps {
    title: string;
    description: string;
    url: string;
}

function OpengraphImage(props: OpengraphImageProps) {
    const { title, description, url } = props
    const base = 'salvador-villalon.vercel.app'

    return (
        <div
            style={{
                backgroundColor: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'relative',
                fontFamily: 'Inter',
                backgroundImage:
                    'linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(to right, #f5f5f5 1px, white 1px)',
                backgroundSize: '20px 20px',
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`${base}/profile.jpg`}
                width="115"
                height="115"
                style={{
                    borderRadius: '100%',
                    position: 'absolute',
                    left: 60,
                    top: 60,
                }}
                alt="Salvador Villalon Profile Picture"
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    position: 'absolute',
                    bottom: 140,
                    left: 60,
                    width: '65%',
                }}
            >
                <span
                    style={{
                        fontSize: '5.25rem',
                        fontWeight: 700,
                        letterSpacing: '-2px',
                        lineHeight: '1',
                    }}
                >
                    {title}
                </span>
                <span
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 600,
                    }}
                >
                    {description}
                </span>
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: 60,
                    left: 60,
                    fontSize: '1.75rem',
                    lineHeight: 1,
                    fontWeight: 600,
                    borderRadius: 100,
                    fontFamily: 'RobotoMono',
                }}
            >
                {url ? `${base}/${url}` : base}
            </div>
        </div>
    )
}

export default OpengraphImage;