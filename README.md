# SouthAxis Infrastructure

Production-ready Next.js App Router website for SouthAxis Infrastructure, a premium groundworks and infrastructure contractor.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Supabase
- Resend

## Pages

- Home
- Services
- Project Showcase
- Contact Us
- Blog

## Environment

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

The contact form posts to `/api/contact`, validates the payload, rejects honeypot submissions, inserts into `contact_messages`, and sends an instant Resend email alert.

## Database

Run the migration in `supabase/migrations/20260523000000_initial_schema.sql` against your Supabase project. It creates:

- `contact_messages`
- `projects`
- `blog_posts`

Public read policies are enabled for published projects and blog posts. Contact messages are server-only via the service role key.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deploying to Vercel

Add the environment variables in Vercel Project Settings before deploying. The app avoids initializing Supabase and Resend clients at module scope, so builds do not require production secrets.
