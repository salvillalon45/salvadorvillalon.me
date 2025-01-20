import { fetchGallery } from "~/lib/gallery"
import Image from "next/image";
import Wrapper from "~/app/_components/Wrapper";
import AnchorLink from "~/app/_components/AnchorLink";
import Heading from "~/app/_components/Heading";
import { Separator } from "~/app/_components/ui/separator";
import { HeadingSize } from "~/lib/types";

interface SlugProps {
    params: {
        year: string;
        album: string;
    }
}

// Generate all possible year/album combinations at build time
export async function generateStaticParams() {
    const gallery = fetchGallery()

    return gallery.map(({ year, albums }) => {
        return albums.map(({ slug }) => {
            console.log({ year, slug })
            return {
                year,
                album: slug
            }
        })
    });
}

function AlbumSlug({ params }: SlugProps) {
    const gallery = fetchGallery().find(({ year }) => year === params.year)!
    const { pictures, location, title, description } = gallery.albums.find(({ slug }) => slug === params.album)!

    return (
        <section className={`album-section my-12`}>
            <Wrapper>
                <div className="grid gap-12">
                    <div className='grid gap-4'>
                        <Heading
                            text={title}
                            size={HeadingSize.H1}
                        />
                        <p>
                            <span className="font-bold">Location:</span>{' '}
                            <span className="underline">{location}</span>
                        </p>
                        <p className="font-medium">{description}</p>
                        <Separator />

                        <AnchorLink
                            href={`/gallery/${params.year}/`}
                            text="Back"
                            className="max-w-fit bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pictures.map((image, index) => {
                            return (
                                // <div key={index} className="relative w-full h-[600px] w-[300px]">
                                <div key={index} className="relative w-full h-[500px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-200"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default AlbumSlug