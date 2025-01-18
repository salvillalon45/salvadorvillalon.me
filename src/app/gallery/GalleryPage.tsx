import { type Gallery, HeadingSize } from "~/lib/types";
import Heading from "../_components/Heading";
import Wrapper from "../_components/Wrapper";
import { Separator } from "../_components/ui/separator";

import '../../styles/GalleryPage.css'
import { fetchGallery } from "~/lib/gallery";
import Year from "./Year";

function GalleryPage() {
    const galleryData: Gallery = fetchGallery();
    // const [currentSection, setCurrentSection] = useState(GalleryYearValue.YEAR_2024);

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
                        <p>A view on my adventures. Click the button below to view my adventures!</p>
                        {/* <GallerySelector
                            currentSection={currentSection}
                            setCurrentSection={setCurrentSection}
                        /> */}
                    </div>

                    <div className="grid gap-4">
                        <Heading
                            text="TEST"
                            size={HeadingSize.H2}
                        />
                        {galleryData.map((data) => {
                            return (
                                <Year key={data.year} {...data} />
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* {images.map((image, index) => (
                            <div key={index} className="relative w-full h-[300px]">
                                < Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-200"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        ))} */}
                    </div>
                </div >
            </Wrapper >
        </section >
    );
}

export default GalleryPage;