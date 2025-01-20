export function fetchGallery() {
    const gallery = [
        {
            year: '2024',
            albums: [
                {
                    title: 'Salton Sea',
                    location: 'Salton Sea, California',
                    slug: 'salton-sea',
                    description: 'A wonder of nature.',
                    pictures: [
                        { src: '/gallery/2024/salton_sea/1.jpg', alt: 'Salton Album Picture 1' },
                        { src: '/gallery/2024/salton_sea/2.jpg', alt: 'Salton Album Picture 2' },
                        { src: '/gallery/2024/salton_sea/3.jpg', alt: 'Salton Album Picture 3' },
                        { src: '/gallery/2024/salton_sea/5.jpg', alt: 'Salton Album Picture 4' },
                        { src: '/gallery/2024/salton_sea/6.jpg', alt: 'Salton Album Picture 5' },
                        { src: '/gallery/2024/salton_sea/7.jpg', alt: 'Salton Album Picture 6' },
                    ]
                },
                {
                    title: 'Feria de San Marcos',
                    location: 'Aguascalientes, Mexico',
                    slug: 'feria-de-san-marcos',
                    description: 'Second time attending! Saw Group Frontera, Conjunto Primavera, and tried traditional Mexican food!',
                    pictures: [
                        { src: '/gallery/2024/aguas/1.jpg', alt: 'Aguascalientes Album Picture 1' },
                        { src: '/gallery/2024/aguas/3.jpg', alt: 'Aguascalientes Album Picture 2' },
                        { src: '/gallery/2024/aguas/4.jpg', alt: 'Aguascalientes Album Picture 3' },
                        { src: '/gallery/2024/aguas/5.jpg', alt: 'Aguascalientes Album Picture 4' },
                        { src: '/gallery/2024/aguas/6.jpg', alt: 'Aguascalientes Album Picture 5' },
                        { src: '/gallery/2024/aguas/7.jpg', alt: 'Aguascalientes Album Picture 6' },
                    ],
                },
                {
                    title: 'Snowboarding',
                    location: 'Mammoth Mountain, California',
                    slug: 'snowboarding',
                    description: 'First time snowboarding! Scary at first, but fun afterwards.',
                    pictures: [
                        { src: '/gallery/2024/snow/1.jpg', alt: 'Snowboarding Album Picture 1' },
                        { src: '/gallery/2024/snow/2.jpg', alt: 'Snowboarding Album Picture 2' },
                        { src: '/gallery/2024/snow/3.jpg', alt: 'Snowboarding Album Picture 3' },
                        { src: '/gallery/2024/snow/4.jpg', alt: 'Snowboarding Album Picture 4' },
                    ],
                },
                {
                    title: 'Shaver Lake Camping',
                    location: 'Shaver Lake, California',
                    slug: 'shaver-lake-camping',
                    description: 'Camping is becoming a very fun activity. Hope to do more of it.',
                    pictures: [
                        { src: '/gallery/2024/shaver_lake/2.jpg', alt: 'Shaver Lake Album Picture 1' },
                        { src: '/gallery/2024/shaver_lake/4.JPG', alt: 'Shaver Lake Album Picture 2' },
                        { src: '/gallery/2024/shaver_lake/5.jpg', alt: 'Shaver Lake Album Picture 3' },
                        { src: '/gallery/2024/shaver_lake/6.jpg', alt: 'Shaver Lake Album Picture 4' },
                        { src: '/gallery/2024/shaver_lake/7.jpg', alt: 'Shaver Lake Album Picture 5' },
                    ]
                }
            ],
        },
        {
            year: '2023',
            albums: [
                {
                    title: 'Costa Rica',
                    location: 'Costa Rica',
                    slug: 'costa-rica',
                    description: 'Costa Rica is filled with nature. I went rafting and surfing.',
                    pictures: [
                        { src: '/gallery/2023/costa_rica/1.jpg', alt: 'Costa Rica Album Picture 1' },
                        { src: '/gallery/2023/costa_rica/2.jpg', alt: 'Costa Rica Album Picture 2' },
                        { src: '/gallery/2023/costa_rica/3.jpg', alt: 'Costa Rica Album Picture 3' },
                        { src: '/gallery/2023/costa_rica/4.jpg', alt: 'Costa Rica Album Picture 4' },
                        { src: '/gallery/2023/costa_rica/5.jpg', alt: 'Costa Rica Album Picture 5' },
                        { src: '/gallery/2023/costa_rica/6.jpg', alt: 'Costa Rica Album Picture 5' },
                        { src: '/gallery/2023/costa_rica/7.jpg', alt: 'Costa Rica Album Picture 6' }
                    ]
                },
                {
                    title: 'Out in the Wild',
                    location: 'Imperial Valley, California',
                    slug: 'out-in-the-wild',
                    description: 'Picked up Hiking as a new hobby.',
                    pictures: [
                        { src: '/gallery/2023/hiking/1.jpg', alt: 'Hiking Album Picture 1' },
                        { src: '/gallery/2023/hiking/2.jpg', alt: 'Hiking Album Picture 2' },
                        { src: '/gallery/2023/hiking/3.jpg', alt: 'Hiking Album Picture 3' },
                        { src: '/gallery/2023/hiking/4.jpg', alt: 'Hiking Album Picture 4' },
                    ]
                },
                {
                    title: 'Feria de San Marcos',
                    location: 'Aguascalientes, Mexico',
                    slug: 'feria-de-san-marcos',
                    description: 'My first time attending the biggest fair in the world.',
                    pictures: [
                        { src: '/gallery/2023/aguas/1.jpg', alt: 'Aguas Album Picture 1' },
                        { src: '/gallery/2023/aguas/2.jpg', alt: 'Aguas Album Picture 2' },
                        { src: '/gallery/2023/aguas/3.jpg', alt: 'Aguas Album Picture 3' },
                        { src: '/gallery/2023/aguas/4.jpg', alt: 'Aguas Album Picture 4' },
                        { src: '/gallery/2023/aguas/5.jpg', alt: 'Aguas Album Picture 5' },
                        { src: '/gallery/2023/aguas/6.jpg', alt: 'Aguas Album Picture 6' },
                    ]
                },
                {
                    title: 'Colombia',
                    location: 'Colombia',
                    slug: 'colombia',
                    description: 'First time in Colombia! It was a great experience.',
                    pictures: [
                        { src: '/gallery/2023/colombia/1.jpg', alt: 'Colombia Album Picture 1' },
                        { src: '/gallery/2023/colombia/2.jpg', alt: 'Colombia Album Picture 2' },
                        { src: '/gallery/2023/colombia/3.jpg', alt: 'Colombia Album Picture 3' },
                        { src: '/gallery/2023/colombia/4.jpg', alt: 'Colombia Album Picture 4' },
                        { src: '/gallery/2023/colombia/5.jpg', alt: 'Colombia Album Picture 4' },
                        { src: '/gallery/2023/colombia/6.jpg', alt: 'Colombia Album Picture 6' },
                        { src: '/gallery/2023/colombia/7.jpg', alt: 'Colombia Album Picture 7' },
                        { src: '/gallery/2023/colombia/8.jpg', alt: 'Colombia Album Picture 8' },
                        { src: '/gallery/2023/colombia/9.jpg', alt: 'Colombia Album Picture 9' },
                    ]
                },
                {
                    title: 'Baja Beach Fest',
                    location: 'Rosarito, Baja California',
                    slug: 'baja-beach-fest',
                    description: 'Saw so many artists and dance too! 🕺🏽',
                    pictures: [
                        { src: '/gallery/2023/baja_beach_fest/1.jpg', alt: 'Baja Beach Fest Album Picture 1' },
                        { src: '/gallery/2023/baja_beach_fest/2.jpg', alt: 'Baja Beach Fest Album Picture 2' },
                    ]
                },
                {
                    title: 'Sequioa National Forest',
                    location: 'National park in Tulare County, California',
                    slug: 'sequioa-national-forest',
                    description: 'Nature is so cool.',
                    pictures: [
                        { src: '/gallery/2023/sequioa_national_park/1.jpg', alt: 'Sequioa National Forest Album Picture 1' },
                        { src: '/gallery/2023/sequioa_national_park/2.jpg', alt: 'Sequioa National Forest Album Picture 2' },
                        { src: '/gallery/2023/sequioa_national_park/3.jpg', alt: 'Sequioa National Forest Album Picture 3' },
                        { src: '/gallery/2023/sequioa_national_park/4.jpg', alt: 'Sequioa National Forest Album Picture 4' },
                        { src: '/gallery/2023/sequioa_national_park/5.JPG', alt: 'Sequioa National Forest Album Picture 5' },
                        { src: '/gallery/2023/sequioa_national_park/6.jpg', alt: 'Sequioa National Forest Album Picture 6' },
                        { src: '/gallery/2023/sequioa_national_park/7.jpg', alt: 'Sequioa National Forest Album Picture 7' },
                        { src: '/gallery/2023/sequioa_national_park/8.jpg', alt: 'Sequioa National Forest Album Picture 8' }
                    ]
                },
                {
                    title: 'Texas',
                    location: 'Texas, United States',
                    slug: 'texas',
                    description: 'Went to concerts and explore Texas! Saw Allah-Las, Unknown Mortal Orchestra, and Panda Bear and Sonic Boom.',
                    pictures: [
                        { src: '/gallery/2023/texas/1.jpg', alt: 'Texas Album Picture 1' },
                        { src: '/gallery/2023/texas/2.jpg', alt: 'Texas Album Picture 2' },
                        { src: '/gallery/2023/texas/3.jpg', alt: 'Texas Album Picture 3' },
                        { src: '/gallery/2023/texas/4.jpg', alt: 'Texas Album Picture 4' },
                        { src: '/gallery/2023/texas/5.jpg', alt: 'Texas Album Picture 5' },
                        { src: '/gallery/2023/texas/6.jpg', alt: 'Texas Album Picture 6' },
                        { src: '/gallery/2023/texas/7.jpg', alt: 'Texas Album Picture 7' },
                        { src: '/gallery/2023/texas/8.jpg', alt: 'Texas Album Picture 8' }
                    ]
                },
                {
                    title: 'Camping',
                    location: 'Julian, California',
                    slug: 'julian-camping',
                    description: 'First time camping! Will do it again!',
                    pictures: [
                        { src: '/gallery/2023/julian_camping/1.jpg', alt: 'Julian Camping Album Picture 1' },
                        { src: '/gallery/2023/julian_camping/2.jpg', alt: 'Julian Camping Album Picture 2' },
                        { src: '/gallery/2023/julian_camping/3.jpg', alt: 'Julian Camping Album Picture 3' },
                        { src: '/gallery/2023/julian_camping/4.jpg', alt: 'Julian Camping Album Picture 4' },
                        { src: '/gallery/2023/julian_camping/5.jpg', alt: 'Julian Camping Album Picture 5' },
                        { src: '/gallery/2023/julian_camping/6.jpg', alt: 'Julian Camping Album Picture 6' },
                        { src: '/gallery/2023/julian_camping/7.jpg', alt: 'Julian Camping Album Picture 7' }
                    ]
                },
                {
                    title: 'Salvation Mountain',
                    location: 'Niland, California',
                    slug: 'salvation-mountain',
                    description: 'A cinematic masterpiece',
                    pictures: [
                        { src: '/gallery/2023/salvation_mountain/1.jpg', alt: 'Salvation Mountain Album Picture 1' },
                        { src: '/gallery/2023/salvation_mountain/2.jpg', alt: 'Salvation Mountain Album Picture 2' },
                        { src: '/gallery/2023/salvation_mountain/3.jpg', alt: 'Salvation Mountain Album Picture 3' },
                        { src: '/gallery/2023/salvation_mountain/4.jpg', alt: 'Salvation Mountain Album Picture 4' },
                        { src: '/gallery/2023/salvation_mountain/5.jpg', alt: 'Salvation Mountain Album Picture 5' },
                        { src: '/gallery/2023/salvation_mountain/6.jpg', alt: 'Salvation Mountain Album Picture 6' }
                    ]
                },
                {
                    title: 'San Francisco',
                    location: 'San Francisco, California',
                    slug: 'san-francisco',
                    description: 'Finally got to explore the city! Met up with friends over there.',
                    pictures: [
                        { src: '/gallery/2023/sf/1.jpg', alt: 'San Francisco Album Picture 1' },
                        { src: '/gallery/2023/sf/2.jpg', alt: 'San Francisco Album Picture 2' },
                        { src: '/gallery/2023/sf/3.jpg', alt: 'San Francisco Album Picture 3' },
                        { src: '/gallery/2023/sf/4.jpg', alt: 'San Francisco Album Picture 4' },
                        { src: '/gallery/2023/sf/5.jpg', alt: 'San Francisco Album Picture 5' },
                        { src: '/gallery/2023/sf/6.jpg', alt: 'San Francisco Album Picture 6' },
                        { src: '/gallery/2023/sf/7.jpg', alt: 'San Francisco Album Picture 7' },
                        { src: '/gallery/2023/sf/8.jpg', alt: 'San Francisco Album Picture 8' },
                        { src: '/gallery/2023/sf/9.jpg', alt: 'San Francisco Album Picture 9' }
                    ]
                },
            ]
        },
        {
            year: '2022',
            albums: [
                {
                    title: 'Porto',
                    location: 'Porto, Portugal',
                    slug: 'portugal',
                    description: 'Portugal is so nice.',
                    pictures: [
                        { src: '/gallery/2022/portugal/1.jpg', alt: 'Portugal Album Picture 1' },
                        { src: '/gallery/2022/portugal/2.jpg', alt: 'Portugal Album Picture 2' },
                        { src: '/gallery/2022/portugal/3.jpg', alt: 'Portugal Album Picture 3' },
                        { src: '/gallery/2022/portugal/4.jpg', alt: 'Portugal Album Picture 4' },
                        { src: '/gallery/2022/portugal/5.jpg', alt: 'Portugal Album Picture 5' },
                        { src: '/gallery/2022/portugal/6.jpg', alt: 'Portugal Album Picture 6' },
                        { src: '/gallery/2022/portugal/7.jpg', alt: 'Portugal Album Picture 7' },
                        { src: '/gallery/2022/portugal/8.jpg', alt: 'Portugal Album Picture 8' },
                    ],
                },
                {
                    title: 'Amsterdam',
                    location: 'Amsterdam, Netherlands',
                    slug: 'amsterdam',
                    description: 'I needed more days to appreciate Amsterdam.',
                    pictures: [
                        { src: '/gallery/2022/amsterdam/1.jpg', alt: 'Amsterdam Album Picture 1' },
                        { src: '/gallery/2022/amsterdam/2.jpg', alt: 'Amsterdam Album Picture 2' },
                        { src: '/gallery/2022/amsterdam/3.jpg', alt: 'Amsterdam Album Picture 3' },
                        { src: '/gallery/2022/amsterdam/4.jpg', alt: 'Amsterdam Album Picture 4' }
                    ]
                },
                {
                    title: 'Barcelona',
                    location: 'Barcelona, Spain',
                    slug: 'barcelona',
                    description: 'I needed more days to appreciate Barcelona.',
                    pictures: [
                        { src: '/gallery/2022/barcelona/1.jpg', alt: 'Barcelona Album Picture 1' },
                        { src: '/gallery/2022/barcelona/2.jpg', alt: 'Barcelona Album Picture 2' },
                        { src: '/gallery/2022/barcelona/3.jpg', alt: 'Barcelona Album Picture 3' },
                        { src: '/gallery/2022/barcelona/4.jpg', alt: 'Barcelona Album Picture 4' },
                        { src: '/gallery/2022/barcelona/5.jpg', alt: 'Barcelona Album Picture 5' },
                        { src: '/gallery/2022/barcelona/6.jpg', alt: 'Barcelona Album Picture 6' },
                        { src: '/gallery/2022/barcelona/7.jpg', alt: 'Barcelona Album Picture 7' },
                        { src: '/gallery/2022/barcelona/8.jpg', alt: 'Barcelona Album Picture 8' },
                        { src: '/gallery/2022/barcelona/9.jpg', alt: 'Barcelona Album Picture 9' },
                        { src: '/gallery/2022/barcelona/10.jpg', alt: 'Barcelona Album Picture 10' },
                    ],
                },
                {
                    title: 'Heroica Mulegé',
                    location: 'Heroica Mulegé, Baja California Sur',
                    description: 'A quite little town close to the beach.',
                    slug: 'mulege',
                    pictures: [
                        { src: '/gallery/2022/mulege/1.jpg', alt: 'Mulege Album Picture 1' },
                        { src: '/gallery/2022/mulege/2.jpg', alt: 'Mulege Album Picture 2' },
                    ]
                },
            ],
        },
    ]


    return gallery;
}