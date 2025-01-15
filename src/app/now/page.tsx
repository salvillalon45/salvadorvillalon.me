import { type Metadata } from 'next';
import NowPage from './NowPage';

export const metadata: Metadata = { title: 'Now with Sal' };

function Now() {
    return (
        <main className="now-page-main">
            <NowPage />
        </main>
    );
}

export default Now;