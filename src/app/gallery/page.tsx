import { type Metadata } from 'next';
import GalleryPage from './GalleryPage';

export const metadata: Metadata = { title: 'Gallery' };

function Gallery() {
    return (
        <main className="gallery-page-main">
            <GalleryPage />
        </main>
    );
}

export default Gallery;