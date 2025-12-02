import PageHeader from "@/app/components/page-header";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getPost(slug) {
  if (!supabase) return null;

  const { data } = await supabase
    .from("posts")
    .select("id, title, slug, body_html, cover_url, tags, published_at")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  return data;
}

export default async function BlogDetail({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="py-12 text-center text-white/70">
        Post not found. <Link href="/blog" className="text-[#d50032] underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="py-8 lg:py-12">
      <PageHeader
        eyebrow="Blog"
        title={post.title}
        subtitle={post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}
        ctaLabel="Back to blog"
        ctaHref="/blog"
      />

      <article className="prose prose-invert max-w-none">
        {post.cover_url ? (
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover_url} alt={post.title} className="w-full object-cover" />
          </div>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: post.body_html || "<p>No content yet.</p>" }} />
      </article>
    </div>
  );
}
