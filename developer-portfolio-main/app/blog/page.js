// @flow strict

import BlogCard from "../components/homepage/blog/blog-card";

export const dynamic = "force-dynamic";

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/posts`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center text-white/70">No blogs available right now. Please check back soon.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map(
            (blog, i) => (
              <BlogCard blog={{
                ...blog,
                cover_image: blog.cover_url,
                title: blog.title,
                description: blog.summary,
                url: `/blog/${blog.slug}`,
              }} key={i} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default page;
