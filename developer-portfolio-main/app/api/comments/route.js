import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ error: "postId required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("comments")
    .select("id, post_id, author_name, body, created_at")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(req) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  // NOTE: Replace with real auth lookup. For now, accept author_name/body from payload.
  const { postId, authorName, body } = await req.json();

  if (!postId || !authorName || !body) {
    return NextResponse.json({ error: "postId, authorName, and body are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("comments")
    .insert({
      post_id: postId,
      author_name: authorName,
      body,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
