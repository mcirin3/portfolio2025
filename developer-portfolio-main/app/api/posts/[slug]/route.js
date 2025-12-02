import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_req, { params }) {
  const slug = params?.slug;

  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, body_html, body_md, cover_url, tags, published_at")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}
