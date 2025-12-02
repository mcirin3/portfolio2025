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
    .from("reactions")
    .select("id, post_id, user_id, type")
    .eq("post_id", postId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(req) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const { postId, userId, type = "like" } = await req.json();

  if (!postId || !userId) {
    return NextResponse.json({ error: "postId and userId are required" }, { status: 400 });
  }

  // Toggle: if exists, delete; else insert
  const { data: existing } = await supabase
    .from("reactions")
    .select("id")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .eq("type", type)
    .maybeSingle();

  if (existing?.id) {
    const { error } = await supabase.from("reactions").delete().eq("id", existing.id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ removed: true });
  }

  const { data, error } = await supabase
    .from("reactions")
    .insert({ post_id: postId, user_id: userId, type })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
