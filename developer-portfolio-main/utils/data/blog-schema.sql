-- Run this in Supabase SQL editor.
-- Tables: posts, comments, reactions, profiles (optional display name/avatar).

create table if not exists public.profiles (
  id uuid primary key default auth.uid(),
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references public.profiles (id) on delete set null,
  title text not null,
  slug text unique not null,
  summary text,
  body_md text,
  body_html text,
  cover_url text,
  tags text[] default '{}',
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.posts (id) on delete cascade,
  author_id uuid references public.profiles (id) on delete set null,
  author_name text, -- fallback display if not using auth
  body text not null,
  parent_id uuid references public.comments (id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.reactions (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.posts (id) on delete cascade,
  user_id uuid not null,
  type text not null default 'like',
  created_at timestamptz default now(),
  unique (post_id, user_id, type)
);

-- Helpful indexes
create index if not exists posts_slug_idx on public.posts (slug);
create index if not exists posts_status_published_at_idx on public.posts (status, published_at desc);
create index if not exists comments_post_id_created_idx on public.comments (post_id, created_at);
create index if not exists reactions_post_id_idx on public.reactions (post_id);

-- RLS: enable and keep open for now (tighten later)
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.reactions enable row level security;
alter table public.profiles enable row level security;

-- Simple policies (adjust later for real auth)
create policy "Public read posts" on public.posts for select using (status = 'published');
create policy "Public read comments" on public.comments for select using (true);
create policy "Public read reactions" on public.reactions for select using (true);

-- Temp open insert (lock down to auth users later)
create policy "Anyone can insert comments" on public.comments for insert with check (true);
create policy "Anyone can insert reactions" on public.reactions for insert with check (true);
create policy "Anyone can insert posts (dev only)" on public.posts for insert with check (true);

-- Update timestamps trigger
create extension if not exists moddatetime schema public;
create trigger handle_posts_updated_at
  before update on public.posts
  for each row execute procedure moddatetime (updated_at);
