create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  company_name text,
  project_type text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  sector text not null,
  summary text not null,
  description text,
  metrics jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  excerpt text not null,
  body text not null,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
alter table public.projects enable row level security;
alter table public.blog_posts enable row level security;

create policy "Published projects are publicly readable"
  on public.projects for select
  using (published = true);

create policy "Published blog posts are publicly readable"
  on public.blog_posts for select
  using (published = true);

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
create index if not exists projects_slug_idx on public.projects (slug);
create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
