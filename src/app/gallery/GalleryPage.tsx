import { type Gallery, HeadingSize } from "~/lib/types";
import Heading from "../_components/Heading";
import Wrapper from "../_components/Wrapper";
import { Separator } from "../_components/ui/separator";

import '../../styles/GalleryPage.css'
import { fetchGallery } from "~/lib/gallery";
import Year from "./Year";

function GalleryPage() {
    const galleryData: Gallery = fetchGallery();

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
                        <p>A view on my adventures. Click the button below to view my adventures by year!</p>
                    </div>

                    <div className="grid grid-flow-row m-auto grid-cols-1 justify-space md:grid-cols-3 gap-8">
                        {galleryData.map((data) => {
                            return (
                                <Year key={data.year} {...data} />
                            );
                        })}
                    </div>
                </div >
            </Wrapper >
        </section >
    );
}

export default GalleryPage;