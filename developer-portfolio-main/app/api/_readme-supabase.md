## Supabase setup notes

1) Create a Supabase project and add env vars to `.env.local` (do not commit):
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2) In Supabase SQL editor, run `utils/data/blog-schema.sql` to create tables and policies.

3) For production, tighten RLS policies so only authenticated users can insert posts/comments/reactions.

4) API routes wired:
- `GET /api/posts` → list published posts
- `GET /api/posts/[slug]` → single post
- `GET/POST /api/comments` → fetch/create comments (currently open; add auth)
- `GET/POST /api/reactions` → like/unlike (currently open; add auth)

5) Blog UI:
- `/blog` pulls from `/api/posts`
- `/blog/[slug]` pulls directly from Supabase via client helper

Drop your keys into `.env.local`, restart the dev server, and the API/UX will use your Supabase data.
