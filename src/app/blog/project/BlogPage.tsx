import DividerLine from "~/app/_components/DividerLine";
import Wrapper from "~/app/_components/Wrapper";
import { fetchBlogs, fetchMedia } from "~/lib/api/blog";
import ContentSection from "./components/ContentSection";

function BlogPage() {
  const blogs = fetchBlogs();
  const media = fetchMedia();

  return (
    <section className="blogPageSection my-12">
      <Wrapper>
        <div className="grid gap-12">
          {/* // TODO: Turn this into a reusable heading component */}
          <div className='grid gap-4'>
            <h1 className="text-3xl font-bold">Blogs & Media</h1>
            <DividerLine />
            <p>My writing and where I been online!</p>
          </div>

          <div className="grid gap-4">
            <h2 className='text-xl font-bold'>Blogs</h2>
            {blogs.map((blog) => {
              return (
                <ContentSection key={blog.title} {...blog} />
              );
            })}
          </div>

          <div className="grid gap-4">
            <h2 className='text-xl font-bold'>Media</h2>
            {media.map((mediaItem) => {
              return (
                <ContentSection
                  key={mediaItem.title}
                  {...mediaItem}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default BlogPage