export function fetchGallery() {
    const gallery = [
        {
            year: '2024',
            albums: [
                {
                    title: 'Salton Sea',
                    location: 'Salton Sea, California',
                    slug: 'salton-sea',
                    pictures: [
                        //TODO: Update the alt
                        { src: '/gallery/2024/salton_sea/1.jpg', alt: 'Salton Album Picture 1' },
                        { src: '/gallery/2024/salton_sea/2.HEIC', alt: 'Salton Album Picture 2' },
                        { src: '/gallery/2024/salton_sea/3.HEIC', alt: 'Salton Album Picture 3' },
                        { src: '/gallery/2024/salton_sea/5.jpg', alt: 'Salton Album Picture 4' },
                        { src: '/gallery/2024/salton_sea/6.jpg', alt: 'Salton Album Picture 5' },
                        { src: '/gallery/2024/salton_sea/7.jpg', alt: 'Salton Album Picture 6' },
                    ]
                },
                {
                    title: 'Feria de San Marcos',
                    location: 'Aguascalientes, Mexico',
                    slug: 'feria-de-san-marcos',
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
                    slug: 'first-time-snowboarding',
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
                    pictures: [
                        { src: '/gallery/2024/shaver_lake/2.jpg', alt: 'Shaver Lake Album Picture 1' },
                        { src: '/gallery/2024/shaver_lake/4.JPG', alt: 'Shaver Lake Album Picture 2' },
                        { src: '/gallery/2024/shaver_lake/5.HEIC', alt: 'Shaver Lake Album Picture 3' },
                        { src: '/gallery/2024/shaver_lake/6.HEIC', alt: 'Shaver Lake Album Picture 4' },
                        { src: '/gallery/2024/shaver_lake/7.HEIC', alt: 'Shaver Lake Album Picture 5' },
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
                    pictures: [
                        { src: '/gallery/2023/costa_rica/1.HEIC', alt: 'Costa Rica Album Picture 1' },
                        { src: '/gallery/2023/costa_rica/2.jpg', alt: 'Costa Rica Album Picture 2' },
                        { src: '/gallery/2023/costa_rica/3.jpg', alt: 'Costa Rica Album Picture 3' },
                        { src: '/gallery/2023/costa_rica/4.HEIC', alt: 'Costa Rica Album Picture 4' },
                        { src: '/gallery/2023/costa_rica/5.HEIC', alt: 'Costa Rica Album Picture 5' },
                        { src: '/gallery/2023/costa_rica/6.jpg', alt: 'Costa Rica Album Picture 5' },
                        { src: '/gallery/2023/costa_rica/7.HEIC', alt: 'Costa Rica Album Picture 6' }
                    ]
                },
                {
                    title: 'Out in the Wild',
                    location: 'Imperial Valley, California',
                    slug: 'out-in-the-wild',
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
                    pictures: [
                        { src: '/gallery/2023/aguas/1.jpg', alt: 'Aguas Album Picture 1' },
                        { src: '/gallery/2023/aguas/2.jpg', alt: 'Aguas Album Picture 2' },
                        { src: '/gallery/2023/aguas/3.HEIC', alt: 'Aguas Album Picture 3' },
                        { src: '/gallery/2023/aguas/4.jpg', alt: 'Aguas Album Picture 4' },
                        { src: '/gallery/2023/aguas/5.jpg', alt: 'Aguas Album Picture 5' },
                        { src: '/gallery/2023/aguas/6.HEIC', alt: 'Aguas Album Picture 6' },
                    ]
                },
                {
                    title: 'Colombia',
                    location: 'Colombia',
                    slug: 'colombia',
                    pictures: [
                        { src: '/gallery/2023/colombia/1.jpg', alt: 'Colombia Album Picture 1' },
                        { src: '/gallery/2023/colombia/2.jpg', alt: 'Colombia Album Picture 2' },
                        { src: '/gallery/2023/colombia/3.jpg', alt: 'Colombia Album Picture 3' },
                        { src: '/gallery/2023/colombia/4.jpg', alt: 'Colombia Album Picture 4' },
                        { src: '/gallery/2023/colombia/5.jpg', alt: 'Colombia Album Picture 4' },
                        { src: '/gallery/2023/colombia/6.jpg', alt: 'Colombia Album Picture 6' },
                        { src: '/gallery/2023/colombia/7.jpg', alt: 'Colombia Album Picture 7' },
                        { src: '/gallery/2023/colombia/8.jpg', alt: 'Colombia Album Picture 8' },
                        { src: '/gallery/2023/colombia/9.HEIC', alt: 'Colombia Album Picture 9' },
                    ]
                },
                {
                    title: 'Baja Beach Fest',
                    location: 'Rosarito, Baja California',
                    slug: 'baja-beach-fest',
                    pictures: [
                        { src: '/gallery/2023/baja_beach_fest/1.jpg', alt: 'Baja Beach Fest Album Picture 1' },
                        { src: '/gallery/2023/baja_beach_fest/2.jpg', alt: 'Baja Beach Fest Album Picture 2' },
                    ]
                },
                {
                    title: 'Sequioa National Forest',
                    location: 'National park in Tulare County, California',
                    slug: 'sequioa-national-forest',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
                {
                    title: 'Texas is so Cool!',
                    location: 'Texas',
                    slug: 'texas-is-so-cool',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
                {
                    title: 'First time camping',
                    location: 'Julian, CA',
                    slug: 'first-time-camping',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
                {
                    title: 'Slab City',
                    location: 'Slab City, CA',
                    slug: 'slab-city',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
                {
                    title: 'SF',
                    location: 'San Francisco, CA',
                    slug: 'san-francisco',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
            ]
        },
        {
            year: '2022',
            albums: [
                {
                    title: 'Mulege',
                    location: 'Barcelona, Spain',
                    slug: 'mulege',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
                    ]
                },
                {
                    title: 'Porto',
                    location: 'Porto, Portugal',
                    slug: 'porto',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                    ],
                },
                {
                    title: 'Amsterdam',
                    location: 'Amsterdam, Netherlands',
                    slug: 'amsterdam',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
                        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
                    ]
                },
                {
                    title: 'Barcelona',
                    location: 'Barcelona, Spain',
                    slug: 'barcelona',
                    pictures: [
                        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
                        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
                        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
                    ],
                },
            ],
        },
    ]


    return gallery;
}