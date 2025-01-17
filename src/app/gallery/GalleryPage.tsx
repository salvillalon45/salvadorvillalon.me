import { HeadingSize } from "~/lib/types";
import Heading from "../_components/Heading";
import Wrapper from "../_components/Wrapper";
import { Separator } from "../_components/ui/separator";
import Image from "next/image";

import '../../styles/GalleryPage.css'

function GalleryPage() {
    const images = [
        { src: '/gallery/2.jpg', alt: 'Gallery Image 1' },
        { src: '/gallery/4.JPG', alt: 'Gallery Image 2' },
        { src: '/gallery/5.HEIC', alt: 'Gallery Image 3' },
        { src: '/gallery/6.HEIC', alt: 'Gallery Image 4' },
        { src: '/gallery/7.HEIC', alt: 'Gallery Image 5' },
        { src: '/gallery/8.HEIC', alt: 'Gallery Image 6' }
    ]

    return (
        <section className="gallery-page-section my-12">
            <Wrapper>
                <div className="grid gap-8">
                    <div className='grid gap-4'>
                        <Heading
                            text="Gallery of Adventures"
                            size={HeadingSize.H1}
                        />
                        <Separator />
                        <p>A view on my adventures</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full h-[300px]">
                                < Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-200"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div >
            </Wrapper >
        </section >
    );
}

export default GalleryPage;