import { type Metadata } from 'next';
import RunPage from './RunPage';

export const metadata: Metadata = { title: 'Running with Sal' };

function Run() {
    return (
        <main className="run-page-main">
            <RunPage />
        </main>
    );
}

export default Run;