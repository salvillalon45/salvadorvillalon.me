import BlogPage from "./BlogPage";

import { type Metadata } from 'next';

export const metadata: Metadata = { title: 'Blog' };

function Blog() {
  return (
    <main className="blog-page-main">
      <BlogPage />
    </main>
  );
}

export default Blog;
